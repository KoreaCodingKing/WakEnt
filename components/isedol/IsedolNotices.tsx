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

const members = [
  '아이네',
  '징버거',
  '릴파',
  '주르르',
  '고세구',
  '비챤'
];

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

const useScheduleNoticesAPI = (): [NoticesAPI | null, Error | null, () => void] => {
  const [data, setData] = useState<Omit<NoticesAPI, 'error'> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [retry, setRetry] = useState<number>(0);

  return [
    data,
    error,
    () => {
      setRetry(Math.random());
    },
  ];
}

export const Notices: NextPage = () => {
  const [page, setPage] = useHashState<string>("1");
  const [currentTab, setCurrentTap] = useState<number>(0);
  const [selectedMember, setSelectedMember] = useState<string>("아이네");

  const [notices, noticeError, noticeRetry] = useNoticesAPI(Number(page));
  const [schedules, scheduleError, scheduleRetry] = useScheduleNoticesAPI();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <p onClick={() => {
          if (currentTab === 0) return;
          setCurrentTap(0);
        }}>NOTICE</p>
        <span>|</span>
        <p onClick={() => {
          if (currentTab === 1) return;
          setCurrentTap(1);
        }}>Member Schdule/Notice</p>
      </h1>
      <section className={styles.section}>
        {noticeError || scheduleError ? (
          <div className={styles.error}>
            <span className={styles.bold}>게시글을 가져올 수 없습니다.</span>
            <br></br>
            오류: {noticeError!.message || scheduleError!.message}
            <br></br>
            <br></br>
            <Button onClick={() => {
              if (noticeError) {
                noticeRetry();
              } else {
                scheduleRetry();
              }
            }}>다시 요청하기</Button>
          </div>
        ) : !notices ? (
          <LoadSpinner></LoadSpinner>
        ) : (
          <>
            {currentTab === 0 && (
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
                      setPage(to.toString());
                    }}
                  ></Pagination>
                </div>
              </>
            )}
            {currentTab === 1 && (
              <>
                <div className={styles.member_list}>
                  <h2>
                    {members.map((member) => {
                      return (
                        <p onClick={() => {
                          if (selectedMember === member) return;
                          setSelectedMember(member);
                        }}>{member}</p>
                      )
                    })}
                  </h2>
                </div>
              </>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Notices;
