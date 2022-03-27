import { NextPage } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';

import { ContentsHeader } from "../../components/contents/ContentsHeader";
import { Content, ContentName, contentsList, Game } from "../../structs/contents";

import styles from '../../styles/components/contents/Contents.module.scss';
import YouTubeCard from '../../components/isedol/YouTubeCard';
import YouTubePlayerOverlay from '../../components/common/YouTubePlayerOverlay';
import { useDebouncer, useIntersectionObserver } from '../../components/isedol/Members/Utils';
import { classes } from '../../utils/class';
import Sidebar from '../../components/contents/sidebar/Sidebar';
import { MenuButton } from '../../components/isedol/IsedolHeader';
import FilterListOverlay from '../../components/contents/overlay/filterListOverlay';

const Contents: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const [choosenGame, setChoosenGame] = useState<Game|string>('전체');
  const [choosenContentType, setChoosenContentType] = useState<ContentName>();
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
  }, 60)

  const pageHandler = useCallback((page: number) => {
    setPage(prev => prev+1);
    setCurrentContents(
      contentsList.slice(
        0,
        (contentsList.length >= page+2*numberOfContentsByPage) ? (page+2)*numberOfContentsByPage : contentsList.length)
    );
  }, []);

  useIntersectionObserver(
    container,
    `.${styles.emptyCards}`,
    true,
    contentsPage,
    useCallback(() => {
      setTimeout(() => {
        pageHandler(page);
      }, 200);
    }, [page, pageHandler])
  );

   // ToDo: game 및 contentsName 별로 보여주는 컨텐츠리스트 수정
   useEffect(() => {
    setCurrentContents(contentsList.slice(0, numberOfContentsByPage));
  }, [choosenContentType]);

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

    return () => window.removeEventListener("resize", updateSidebar) 
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contents_header}>
        <ContentsHeader></ContentsHeader>
      </div>
      <YouTubePlayerOverlay
        id={youtubeID}
        open={openPlayer}
        close={() => setOpenPlayer(false)}
      ></YouTubePlayerOverlay>
      <div className={styles.inner_container}>
        {showSidebar && (
          <Sidebar selectContents={run}></Sidebar>
        )}
        {!showSidebar && (
          <div className={styles.filter_box}>
            <MenuButton open={openDetail} onClick={run}></MenuButton>
          </div>
        )}
        <div className={styles.contents_wrapper}
          ref={container}>
          <FilterListOverlay open={openDetail}></FilterListOverlay>
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
          {page <= Math.ceil(contentsList.length / 24) && (
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

export default Contents;