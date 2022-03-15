import { NextPage } from 'next';
import Image from 'next/image';

import { ContentsHeader } from "../../components/contents/ContentsHeader";
import { contents } from "../../structs/contents";

import styles from '../../styles/components/contents/Games/Games.module.scss';

const Contents: NextPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <ContentsHeader></ContentsHeader>
      </header>
      <div className={styles.background}>
        <Image src=''></Image>
      </div>
      <div className={styles.contents}>
        {contents.map((content, index) => {
          return (
            <div key={`content-${index}`}>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contents;