import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { NoticeSources } from '../../pages/api/notices';
import { NoticesAPI } from '../../structs/notices';

import styles from '../../styles/components/isedol/IsedolNotices.module.scss';
import { concatClass } from '../../utils/class';
import { useHashState } from '../../utils/hashState';
import Button from '../common/Button';
import { LoadSpinner } from '../common/LoadSpinner';
import Pagination from '../common/Pagination';
import { useHorizonalPageScroller } from '../common/Scroll';

const useNoticesAPI = (
  page = 1,
  tab = 0
): [NoticesAPI | null, Error | null, () => void] => {
  const [data, setData] = useState<Omit<NoticesAPI, 'error'> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [retry, setRetry] = useState<number>(0);

  useEffect(() => {
    if (data && data.page === page && data.tab === tab) {
      return;
    }

    setData(null);
    setError(null);

    fetch(`/api/notices?page=${page}&tab=${tab}`)
      .then(v => v.json())
      .then(v => {
        if (v.error) {
          throw new Error(v.error);
        }

        setData(v);
      })
      .catch(e => setError(e));
  }, [page, retry, tab]);

  return [
    data,
    error,
    () => {
      setRetry(Math.random());
    },
  ];
};

export const Notices: NextPage = () => {
  const [page, setPage] = useHashState<string>('1');
  const [tab, setTab] = useState<number>(0);
  const tabRef = useRef<HTMLDivElement>(null);
  const membersTabCache: HTMLElement[] = [];


  const [notices, error, retry] = useNoticesAPI(Number(page), tab);

  useHorizonalPageScroller(tabRef, 1000, membersTabCache);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NOTICE</h1>
      <section className={styles.section}>
        <div className={styles.tabs}
          ref={tabRef}>
          {NoticeSources.map((v, i) => (
            <div ref={(element: HTMLDivElement) =>
              element && membersTabCache.push(element)
            }>
              <Button onClick={() => {
                setTab(i);
                setPage('1');
              }} active={tab === i}>{v.name}</Button>
            </div>
          ))}
        </div>
        {error ? (
          <div className={styles.error}>
            <span className={styles.bold}>게시글을 가져올 수 없습니다.</span>
            <br></br>
            오류: {error}
            <br></br>
            <br></br>
            <Button onClick={() => retry()}>다시 요청하기</Button>
          </div>
        ) : !notices ? (
          <LoadSpinner></LoadSpinner>
        ) : (
          <>
            <div className={styles.postList}>
              {notices.list.map(v => (
                <Link
                  key={v.id}
                  href={`https://cafe.naver.com/steamindiegame/${v.id}`}
                  passHref
                >
                  <a className={styles.post}>
                    <p className={styles.postTitle}>{v.title}</p>
                    <div className={styles.postDetails}>
                      <span
                        className={concatClass(styles.item, styles.comments)}
                      >
                        {v.comments} 댓글
                      </span>
                      <span className={concatClass(styles.item, styles.likes)}>
                        {v.likes} 좋아요
                      </span>
                      <span className={concatClass(styles.item, styles.date)}>
                        {v.date}
                      </span>
                      <span className={styles.item}>{v.writer}</span>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <div className={styles.pages}>
              <Pagination
                current={notices.page}
                pages={notices.pages}
                previous={notices.previous}
                next={notices.next}
                movePage={to => {
                  setPage(`${to}`);
                }}
              ></Pagination>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Notices;
