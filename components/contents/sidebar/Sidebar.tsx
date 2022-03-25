import { useState } from 'react';
import Image from 'next/image';
import { ContentByGame, Game, GameByEnum, GameContents } from '../../../structs/contents';
import styles from '../../../styles/components/contents/sidebar/Sidebar.module.scss';

interface SidebarProps {
  selectContents: (value: string) => void,
}

const Sidebar = ({selectContents}: SidebarProps) => {
  const [hoverGame, setHoverGame] = useState<string>();

  return (
    <div className={styles.select_box}>
      <div className={styles.game}>
        <div className={styles.totalgame_icon}>
        </div>
        <p>전체</p>
      </div>
      {(Object.keys(ContentByGame) as Game[]).map((game, index) => {
        return (
          <div key={`game-${index}`} className={styles.game}>
            {ContentByGame[game].image && (
              <div className={styles.game_icon}>
                <Image
                  className={styles.image}
                  src={ContentByGame[game].image}
                  blurDataURL={ContentByGame[game].image}
                  placeholder='blur'
                  layout='fill'
                  priority
                  alt="게임 아이콘"
                ></Image>
              </div>
            )}
            <p>{ContentByGame[game].name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar;