import { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { NoticeSources } from '../../pages/api/notices';
import { IsedolMemberID, IsedolMembers, WakMemberID } from '../../structs/member';
import { NoticesAPI } from '../../structs/notices';

import styles from '../../styles/components/isedol/IsedolNotices.module.scss';
import { classes } from '../../utils/class';
import { useHashState } from '../../utils/state';
import Button from '../common/Button';
import { LoadSpinner } from '../common/LoadSpinner';
import Pagination from '../common/Pagination';
import { useHorizonalPageScroller } from '../common/Scroll';

import { lighten } from '../../utils/color';
import ChatIcon from '../common/icons/Chat';
import LikeIcon from '../common/icons/Like';
import FadeInImage from '../common/FadeInImage';

const memberMaps: Record<string, IsedolMemberID | WakMemberID> = {
  '우왁굳': 'wakgood',
  '징버거': 'jingburger',
  '릴파 LILPA': 'lilpa',
  '고세구': 'gosegu',
  '비챤': 'viichan',
  '아이네': 'ine',
  '주르르': 'jururu'
};

export const parseMemberFromString = (text: string): IsedolMemberID | WakMemberID | null => {
  if (memberMaps[text]) {
    return memberMaps[text];
  }

  return null;
};

interface NoticeMemberText {
  member: string
}

interface MemberColorStyles extends React.CSSProperties {
  '--color': string
  '--bg-color': string
}

const NoticeMember = ({
  member
}: NoticeMemberText) => {
  const memberId = parseMemberFromString(member);
  const memberColor = memberId && memberId === 'wakgood' ? '#164532' : IsedolMembers[memberId as IsedolMemberID].color;

  return <div className={styles.noticeMember} style={{
    '--color': memberColor,
    '--bg-color': memberColor && lighten(memberColor, 0.8)
  } as MemberColorStyles}>
    <div className={styles.profile}>
      <FadeInImage src={`/images/member/front/${memberId || 'unknown'}.png`} width={128} height={128} />
    </div>
    <span className={styles.name}>
      {member}
    </span>
  </div>;
};

const useNoticesAPI = (
  page = 1,
  tab = 0
): [NoticesAPI | null, Error | null, () => void] => {
  const [data, setData] = useState<Omit<NoticesAPI, 'error'> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [retry, setRetry] = useState<number>(0);

  const requestNotices = useCallback(() => {
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
  }, [page, tab]);

  useEffect(() => {
    requestNotices();
  }, [requestNotices, retry]);

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
      <h1 className={styles.title}>NEWS</h1>
      <section className={styles.section}>
        <div className={styles.tabs} ref={tabRef}>
          {NoticeSources.map((v, i) => (
            <div
              key={`tabs-${v.name}`}
              ref={(element: HTMLDivElement) =>
                element && membersTabCache.push(element)
              }
            >
              <Button
                onClick={() => {
                  setTab(i);
                  setPage('1');
                }}
                active={tab === i}
              >
                {v.name}
              </Button>
            </div>
          ))}
        </div>
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
                        className={classes(styles.item, styles.comments)}
                      >
                        <ChatIcon></ChatIcon> {v.comments}
                      </span>
                      {typeof v.likes !== 'undefined' && (
                        <span
                          className={classes(styles.item, styles.likes)}
                        >
                          <LikeIcon></LikeIcon> {v.likes}
                        </span>
                      )}
                      <span className={classes(styles.item, styles.date)}>
                        {v.date}
                      </span>
                      <span className={styles.item}>
                        <NoticeMember member={v.writer}></NoticeMember>
                      </span>
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
