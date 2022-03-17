import { NextPage } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { ContentsHeader } from "../../components/contents/ContentsHeader";
import { Content, ContentName, contentsList, Game } from "../../structs/contents";

import styles from '../../styles/components/contents/Contents.module.scss';
import YouTubeCard from '../../components/isedol/YouTubeCard';
import YouTubePlayerOverlay from '../../components/common/YouTubePlayerOverlay';

const Contents: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const [choosenContentType, setChoosenContentType] = useState<Game|ContentName|string>('전체');
  const [currentContents, setCurrentContents] = useState<Content[]>([]);
  const [youtubeID, setYoutubeID] = useState<string>('');
  const [openPlayer, setOpenPlayer] = useState<boolean>(false);
  const [openSelectOption, setOpenSelectOption] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const numberOfContentsByPage = 24;
  
  const openYouTube = (id: string) => {
    setYoutubeID(id);
    setOpenPlayer(true);
  };

  useEffect(() => {
    setCurrentContents(contentsList.slice(0, 0));
  }, []);

  // contentsList에서 추가로 값을 더 가져옴.
  const pageHandler = useCallback((page: number) => {
    setCurrentContents(
      contentsList.slice(
        0,
        (contentsList.length >= page*numberOfContentsByPage) ? page*numberOfContentsByPage : contentsList.length)
    )
  }, [currentContents]);
  
  // ToDo: 스크롤 0이 될때 이벤트 발생 및 page +1 증가 처리 및 pageHandler 호출
  useEffect(() => {

  }, [])


  return (
    <div className={styles.container}>
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
      <div className={styles.contents}
        ref={containerRef}>
        {currentContents.map((content, index) => {
          return (
            <YouTubeCard
              key={`content-${content.links}`}
              title={content.contentName}
              id={content.links}
              onClick={id => openYouTube(content.links)}
            ></YouTubeCard>
          );
        })}
      </div>
    </div>
  );
};

export default Contents;