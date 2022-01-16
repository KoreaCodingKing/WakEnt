import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NoticesAPI } from '../../structs/notices';

import styles from '../../styles/components/isedol/IsedolNotices.module.scss';
import { concatClass } from '../../utils/class';
import { useHashState } from '../../utils/hashState';
import Button from '../common/Button';
import { LoadSpinner } from '../common/LoadSpinner';
import Pagination from '../common/Pagination';

const tabs = {
  notice: '우왁굳',
  members: [
    '전체',
    '아이네',
    '징버거',
    'lilpa',
    '주르르',
    '고세구',
    '비챤'
  ]
};

const useNoticesAPI = (
  page = 1,
  selectedTab = '전체'
): [NoticesAPI | null, Error | null, () => void] => {
  const [data, setData] = useState<Omit<NoticesAPI, 'error'> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [retry, setRetry] = useState<number>(0);

  useEffect(() => {
    if (data && data.page === page && data.selectedTab === selectedTab) {
      return;
    }

    setData(null);
    setError(null);

    fetch(`/api/notices?page=${page}&tab=${selectedTab}`)
      .then(v => v.json())
      .then(v => {
        if (v.error) {
          throw new Error(v.error);
        }

        setData(v);
      })
      .catch(e => setError(e));
  }, [page, retry, selectedTab]);

  return [
    data,
    error,
    () => {
      setRetry(Math.random());
    },
  ];
};

export const Notices: NextPage = () => {
  const [page, setPage] = useHashState<string>("1");
  const [selectedTab, setSelectedTab] = useState<string>(tabs.notice);

  const [notices, error, retry] = useNoticesAPI(Number(page), selectedTab);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <p onClick={() => {
          if (selectedTab === tabs.notice) return;
          setSelectedTab(tabs.notice);
        }}>NOTICE</p>
        <span>|</span>
        <p onClick={() => {
          if (selectedTab !== tabs.notice) return;
          setSelectedTab(tabs.members[0]);
        }}>Member Schdule/Notice</p>
      </h1>
      <section className={styles.section}>
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
            {selectedTab === tabs.notice && (
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
              </>
            )}
            {selectedTab !== tabs.notice && (
              <>
                <div className={styles.member_list}>
                  <h2>
                    {tabs.members.map((member) => {
                      return (
                        <p onClick={() => {
                          if (selectedTab === member) return;
                          setSelectedTab(member);
                        }}>{member}</p>
                      );
                    })}
                  </h2>
                </div>
              </>
            )}
            <div className={styles.pages}>
              <Pagination
                current={notices.page}
                pages={notices.pages}
                previous={notices.previous}
                next={notices.next}
                movePage={to => {
                  setPage(to.toString());
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
