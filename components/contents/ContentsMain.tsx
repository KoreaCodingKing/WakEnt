import { NextPage } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Content, ContentName, contentsList, Game } from "../../structs/contents";

import YouTubeCard from '../../components/isedol/YouTubeCard';
import YouTubePlayerOverlay from '../../components/common/YouTubePlayerOverlay';
import { useDebouncer, useIntersectionObserver } from '../../components/isedol/Members/Utils';
import { classes } from '../../utils/class';
import Sidebar from '../../components/contents/sidebar/Sidebar';
import { MenuButton } from '../../components/isedol/IsedolHeader';
import FilterListOverlay from '../../components/contents/overlay/filterListOverlay';

import styles from '../../styles/components/contents/ContentsMain.module.scss';

const ContentsMain: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const [choosenGame, setChoosenGame] = useState<Game|string|null>('전체');
  const [choosenContentName, setChoosenContentName] = useState<ContentName|null>();
  const [contents, setContents] = useState<Content[]>(contentsList);
  const [currentContents, setCurrentContents] = useState<Content[]>([]);
  const [youtubeID, setYoutubeID] = useState<string>('');
  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>();
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  const container = useRef<HTMLDivElement>(null!);

  const numberOfContentsByPage = 24;
  const contentsPage = true;

  const openYouTube = (id: string) => {
    setYoutubeID(id);
    setOpenPlayer(true);
  };

  const [run] = useDebouncer(() => {
    setOpenDetail(!openDetail);
  }, 60);

  useIntersectionObserver(
    container,
    `.${styles.emptyCards}`,
    true,
    contentsPage,
    useCallback(() => {
      setTimeout(() => {
        setPage(page => page+1);
        setCurrentContents(
          contents.slice(
            0,
            (contents.length >= (page+2)*numberOfContentsByPage) ? (page+2)*numberOfContentsByPage : contents.length
          )
        );
      }, 200);
    }, [page, contents])
  );

  const filterContents = useCallback((game: Game|string, contentName?: ContentName) => {
    if (!container.current) {
      return;
    }
    setPage(1);
    container.current.scrollTo(0, 0);
    setChoosenGame(game);
    setOpenDetail(false);
    if (game === '전체') {
      setChoosenContentName(null);
      setContents(contentsList);
      return;
    }
    if (game && !contentName) {
      setChoosenContentName(null);
      setContents(contentsList.filter((content: Content) => content.game === game));
      return;
    }
    setChoosenContentName(contentName);
    setContents(contentsList.filter((content: Content) => content.game === game && content.content === contentName));
  }, []);

  useEffect(() => {
    setCurrentContents(contents.slice(0, numberOfContentsByPage));
  }, [contents]);

  useEffect(() => {
    const updateSidebar = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth <= 1124) {
        setShowSidebar(false);
        return;
      }

      setOpenDetail(false);
      setShowSidebar(true);
    };
    updateSidebar();

    window.addEventListener("resize", updateSidebar);

    return () => window.removeEventListener("resize", updateSidebar);
  }, []);

  return (
    <div className={styles.container}>
      <YouTubePlayerOverlay
        id={youtubeID}
        open={openPlayer}
        close={() => setOpenPlayer(false)}
      ></YouTubePlayerOverlay>
      <div className={styles.inner_container}>
        {showSidebar && (
          <Sidebar selectContents={filterContents}></Sidebar>
        )}
        {!showSidebar && (
          <div className={styles.filter_box}>
            <MenuButton open={openDetail} onClick={run}></MenuButton>
          </div>
        )}
        <div className={styles.contents_wrapper}
          ref={container}>
          <FilterListOverlay open={openDetail}
            selectContents={filterContents}
          ></FilterListOverlay>
          <div className={styles.filter_boxes}>
            {choosenGame && choosenGame !== '전체' && (
              <div className={styles.filter_game}>
                <p>{choosenGame}</p>
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 32 32"
                  width="16px"
                  height="16px"
                  onClick={() => filterContents('전체')}>
                  <path
                    d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/>
                </svg>
              </div>
            )}
            {choosenContentName && (
              <div className={styles.filter_contents}>
                <p>{choosenContentName}</p>
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 32 32"
                  width="16px"
                  height="16px"
                  onClick={() => filterContents(choosenGame!)}>
                  <path
                    d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/>
                </svg>
              </div>
            )}
          </div>
          <div className={styles.contents}>
            {currentContents.map((content) => {
              return (
                <YouTubeCard
                  key={`content-${content.links}`}
                  title={content.title}
                  thumbnail={content.thumbnail}
                  id={content.links}
                  onClick={() => openYouTube(content.links)}
                ></YouTubeCard>
              );
            })}
          </div>
          {page < Math.ceil(contents.length / 24) && (
            <div className={classes(styles.contents, styles.emptyCards)}>
              {Array(6).fill(0).map((_, index) => {
                return (
                  <YouTubeCard
                    key={`content-${index}`}
                    title=''
                    id=''
                  ></YouTubeCard>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentsMain;