import { NextPage } from "next";

import { ContentsHeader } from "../../components/contents/ContentsHeader";
import styles from '../../styles/components/contents/Games/Games.module.scss';

const List: NextPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <ContentsHeader></ContentsHeader>
      </header>
    </div>
  )
}

export default List;