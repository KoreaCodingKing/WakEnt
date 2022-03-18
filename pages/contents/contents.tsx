import { NextPage } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { ContentsHeader } from "../../components/contents/ContentsHeader";
import { Content, ContentName, contentsList, Game } from "../../structs/contents";

import styles from '../../styles/components/contents/Contents.module.scss';
import YouTubeCard from '../../components/isedol/YouTubeCard';
import YouTubePlayerOverlay from '../../components/common/YouTubePlayerOverlay';
import { useIntersectionObserver } from '../../components/isedol/Members/Utils';
import { classes } from '../../utils/class';

const Contents: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const [choosenContentType, setChoosenContentType] = useState<Game|ContentName|string>('전체');
  const [currentContents, setCurrentContents] = useState<Content[]>([]);
  const [youtubeID, setYoutubeID] = useState<string>('');
  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [openSelectOption, setOpenSelectOption] = useState<boolean>(false);

  const container = useRef<HTMLDivElement>(null!);

  const numberOfContentsByPage = 24;
  
  const openYouTube = (id: string) => {
    setYoutubeID(id);
    setOpenPlayer(true);
  };

  // ToDo: game 및 contentsName 별로 보여주는 컨텐츠리스트 수정
  useEffect(() => {
    setCurrentContents(contentsList.slice(0, numberOfContentsByPage));
  }, [choosenContentType]);

  const pageHandler = useCallback((page: number) => {
    setPage(prev => prev+1);
    setCurrentContents(
      contentsList.slice(
        0,
        (contentsList.length >= page+2*numberOfContentsByPage) ? (page+2)*numberOfContentsByPage : contentsList.length)
    )
  }, [currentContents]);

  useIntersectionObserver(
    container,
    `.${styles.emptyCards}`,
    true,
    true,
    useCallback(() => {
      setTimeout(() => {
        pageHandler(page);
      }, 200)
    }, [page])
  )

  return (
    <div className={styles.container}
      ref={container}>
      <header>
        <ContentsHeader></ContentsHeader>
      </header>
      <YouTubePlayerOverlay
        id={youtubeID}
        open={openPlayer}
        close={() => setOpenPlayer(false)}
      ></YouTubePlayerOverlay>
      <div className={styles.select_box}>
        <div className={styles.select}
          onClick={() => setOpenSelectOption(true)}></div>
        {openSelectOption && (
          <div>
          </div>
        )}
      </div>
      <div className={styles.contents}>
        {currentContents.map((content, index) => {
          return (
            <YouTubeCard
              key={`content-${content.links}`}
              title={content.contentName}
              thumbnail={content.thumbnail}
              id={content.links}
              onClick={id => openYouTube(content.links)}
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
            )
          })}
        </div>
      )}
    </div>
  );
};

export default Contents;