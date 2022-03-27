import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ContentByGame, contentsNameByEnum, Game, GameByEnum, GameContents } from '../../../structs/contents';
import styles from '../../../styles/components/contents/sidebar/Sidebar.module.scss';
import { useDebouncer } from '../../isedol/Members/Utils';
import { useDeviceWidthLimiter } from '../../../utils/device';
import { motion, Variants } from 'framer-motion';

interface SidebarProps {
  selectContents: (value: string) => void,
}

const Sidebar = ({selectContents}: SidebarProps) => {
  const [hoverGame, setHoverGame] = useState<Game|null>();
  const isMobile = useDeviceWidthLimiter(1124);

  const variants: Variants = {
    initial: () => ({
      transform: 'translateY(-5px)'
    }),
    animation: () => ({
      transform: 'translateY(0px)',
      transition: {
        type: 'spring'
      }
    }),
    hover: () => ({
      color: '#1667e0',
      fontSize: '22px',
      fontWeight: '500',
      transition: {
        type: 'spring',
        duration: 0.5
      }
    })
  }

  const [run, cancel] = useDebouncer((id: Game | null) => {
    setHoverGame(id);
  }, 60);

  const onGameIconMouseEnter = useCallback(
    (game: Game) => {
      if (isMobile) return;
      cancel();
      setHoverGame(game);
    },
    [isMobile, cancel]
  );

  const onGameIconMouseOut = useCallback(() => {
    if (isMobile || hoverGame !== null) return;
    run(null);
  }, [hoverGame, isMobile, run]);

  return (
    <div className={styles.select_box}>
      <div className={styles.game}>
        <div className={styles.totalgame_icon}>
          <div className={styles.totalgame}>
          </div>
        </div>
        <p>전체 보기</p>
      </div>
      {(Object.keys(ContentByGame) as Game[]).map((game, index) => {
        return (
          <div key={`game-${index}`}
            className={styles.game}
            onMouseEnter={() => onGameIconMouseEnter(game)}
            onMouseOut={() => onGameIconMouseOut()}>
            <div className={styles.game_icon}>
              {ContentByGame[game].image && (
                <Image
                  className={styles.image}
                  src={ContentByGame[game].image || ''}
                  blurDataURL={ContentByGame[game].image}
                  placeholder='blur'
                  layout='fill'
                  priority
                  alt="게임 아이콘"
                ></Image>
              )}
              {!ContentByGame[game].image && (
                <div className={styles.emptyImage}>
                </div>
              )}
            </div>
            <p>{ContentByGame[game].name}</p>
            {hoverGame && (
              <div
                className={styles.dropMenu}>
                {ContentByGame[game].contentName.map((conentName, index) => {
                  return (<motion.p
                    className={styles.contentsName}
                    whileHover='hover'
                    variants={variants}
                    style={{
                      '--index': `${(index + 1) / (ContentByGame[game].contentName.length + 1)}`
                    } as React.CSSProperties}>
                    <span>{conentName}</span>
                  </motion.p>)
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar;