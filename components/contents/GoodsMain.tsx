import { NextPage } from "next";
import { ReactNode, useRef, useState } from "react";
import { GoodsCategory, itemCategory, items } from "../../structs/goods";
import { useHorizonalPageScroller } from "../common/Scroll";

import styles from '../../styles/components/contents/Goods.module.scss';
import { classes } from "../../utils/class";
import Image from "next/image";

interface CustomButtonProps {
  active: boolean,
  children: ReactNode,
  onClick: () => void
}

const banners = [
  {
    tab: '전체',
    image: '/images/goods/banner/banner_first_slide.jpg'
  }
];

export const CustomButton = ({children, active, onClick}: CustomButtonProps): JSX.Element => {
  return (
    <div className={classes(styles.button, active && styles.active)}
      onClick={() => onClick && onClick()}>
      {children}
    </div>
  );
};

const GoodsMain: NextPage = () => {
  const [tab, setTab] = useState<string>('전체');
  const tabRef = useRef<HTMLDivElement>(null!);

  const tabCache: HTMLElement[] = [];

  useHorizonalPageScroller(tabRef, 1000, tabCache);

  return (
    <div className={styles.container}>
      <div className={styles.banner_box} ref={tabRef}>
        <div className={styles.tabs}>
          <div
            className={styles.tab}
            ref={(element: HTMLDivElement) =>
              element && tabCache.push(element)
            }
          >
            <CustomButton
              onClick={() => setTab('전체')} active={'전체' === tab}>
              전체
            </CustomButton>
          </div>
          {Object.keys(items).map((item, index) => (
            <div
              key={`tabs-${index}`}
              className={styles.tab}
              ref={(element: HTMLDivElement) =>
                element && tabCache.push(element)
              }
            >
              <CustomButton
                onClick={() => setTab(item)} active={item === tab}>
                {itemCategory[item as GoodsCategory].categoryName}
              </CustomButton>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.banners}>
        <div className={styles.title_box}>
          <p>이세계아이돌의 막내 <span>&quot; 비챤 &quot;</span> 이</p>
          <p>탐내하는 굿즈들을 모았습니다.</p>
        </div>
        {banners.map((banner, index) => (
          <div key={`slide-banner-${index}`}
            className={styles.banner}>
            <Image
              src={banner.image}
              layout='fill'
              blurDataURL={banner.image}
              placeholder='blur'
              priority
            ></Image>
          </div>
        ))}
      </div>
      <div>
        <p>상품 준비중입니다.</p>
      </div>
    </div>
  );
};

export default GoodsMain;