import Image from 'next/image';
import { ContentByGame, Game } from '../../../structs/contents';
import { classes } from '../../../utils/class';
import styles from '../../../styles/components/contents/overlay/filterListOverlay.module.scss'
import { motion, Variants } from 'framer-motion';

interface FilterListOverlay {
  open: boolean
}

const FilterListOverlay = ({open}: FilterListOverlay) => {
  const variants: Variants = {
    hover: () => ({
      color: '#1667e0',
      fontSize: '38px',
      fontWeight: '500',
      transition: {
        type: 'spring',
        duration: 0.5
      }
    })
  }

  return (
    <div className={classes(styles.overlay, open && styles.open)}>
      <div className={styles.background}></div>
      <div className={styles.contents}>
        <div className={styles.game}>
          <div className={styles.icon_wrapper}>
            <div className={styles.game_icon}>
              <div className={styles.totalgame}>
              </div>
            </div>
            <p>전체 보기</p>
          </div>
        </div>
        {(Object.keys(ContentByGame) as Game[]).map((game, index) => {
          return (
            <div key={`game-${index}`}
              className={styles.game}>
              <div className={styles.icon_wrapper}>
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
              </div>
              <div
                className={styles.dropMenu}>
                {ContentByGame[game].contentName.map((conentName, index) => {
                  return (<motion.p
                    key={`contentName-${index}`}
                    className={styles.contentsName}
                    whileHover='hover'
                    variants={variants}
                    style={{
                      '--index': `${(index + 1) / (ContentByGame[game].contentName.length + 1)}`
                    } as React.CSSProperties}>
                    {conentName}
                  </motion.p>)
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterListOverlay;