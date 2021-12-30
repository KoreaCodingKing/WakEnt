import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NoticesAPI } from '../../structs/notices';

import styles from '../../styles/components/isedol/IsedolNotices.module.scss';
import { concatClass } from '../../utils/class';
import Button from '../common/Button';
import { LoadSpinner } from '../common/LoadSpinner';
import Pagination from '../common/Pagination';

const useNoticesAPI = (
  page = 1
): [NoticesAPI | null, Error | null, () => void] => {
  const [data, setData] = useState<Omit<NoticesAPI, 'error'> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [retry, setRetry] = useState<number>(0);

  useEffect(() => {
    if (data && data.page === page) {
      return;
    }

    setData(null);
    setError(null);

    fetch(`/api/notices?page=${page}`)
      .then(v => v.json())
      .then(v => {
        if (v.error) {
          throw new Error(v.error);
        }

        setData(v);
      })
      .catch(e => setError(e));
  }, [page, retry]);

  return [
    data,
    error,
    () => {
      setRetry(Math.random());
    },
  ];
};

export const Notices: NextPage = () => {
  const [page, setPage] = useState<number>(1);

  const [notices, error, retry] = useNoticesAPI(page);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NOTICES</h1>
      <section className={styles.section}>
        {error ? (
          <div className={styles.error}>
            <span className={styles.bold}>게시글을 가져올 수 없습니다.</span>
            <br></br>
            오류: {error.message}
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
                  setPage(to);
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
