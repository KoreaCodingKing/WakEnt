import React, { useEffect, useRef, useState, useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import styles from '../../styles/components/isedol/IsedolMembers.module.scss';

import { IsedolMemberID, IsedolMembers } from '../../structs/member';
import { useHorizonalSlider } from '../common/Scroll';

import { useHashState, useNonNullState } from '../../utils/state';

import { WakEnterLogoLink } from '../wakenter/WakEnterHeader';
import { useIntersectionObserver, useRect, useDebouncer } from './Members/Utils';
import { useDeviceWidthLimiter } from '../../utils/device';

import MemberCard from './Members/Card';
import MemberProfile from './Members/Profile';

interface DetailMemberCSS extends React.CSSProperties {
  '--left': string
  '--top': string
  '--width': string
}

export const IsedolMembersPage: NextPage = () => {
  const [chosenMember, setChosenMember] = useHashState<IsedolMemberID | null>(
    null
  );
  const previousMember = useNonNullState(chosenMember);
  const [
    currentHoverMember,
    setCurrentHoverMember,
  ] = useState<IsedolMemberID | null>(null);

  const container = useRef<HTMLDivElement>(null!);
  const membersList = useRef<HTMLDivElement>(null!);

  const [parentRect, cardRect] = useRect(membersList, `.${styles.member}`);
  const isMobile = useDeviceWidthLimiter(1124);

  useHorizonalSlider(container, chosenMember === null);
  useIntersectionObserver(
    container,
    `.${styles.member}`,
    isMobile && chosenMember === null,
    false,
    useCallback(id => {
      setCurrentHoverMember(id);
    }, [])
  );

  const scrollToTop = useCallback(() => {
    container.current.scrollTo({
      top: 0,
      left: 0,
    });
  }, [container]);

  /**
   * 멤버가 변경된 경우 스크롤을 맨 처음으로 돌립니다.
   */
  useEffect(() => {
    scrollToTop();
  }, [chosenMember, scrollToTop]);

  const [run, cancel] = useDebouncer((id: IsedolMemberID | null) => {
    setCurrentHoverMember(id);
  }, 60);

  const onMemberCardMouseEnter = useCallback(
    (id: IsedolMemberID) => {
      if (isMobile) return;
      cancel();
      setCurrentHoverMember(id);
    },
    [isMobile, cancel]
  );

  const onMemberCardMouseOut = useCallback(() => {
    if (isMobile || chosenMember !== null) return;
    run(null);
  }, [chosenMember, isMobile, run]);

  const onMemberCardClick = useCallback(
    (id: IsedolMemberID) => {
      if (chosenMember) {
        setChosenMember(null);
        return;
      }

      scrollToTop();
      setChosenMember(id);
    },
    [chosenMember, scrollToTop, setChosenMember]
  );

  const pageMember = currentHoverMember || chosenMember;

  return (
    <div className={styles.memberPageContainer}>
      <Head>
        <meta
          name='theme-color'
          content={pageMember ? IsedolMembers[pageMember].backgroundColor : '#0A0A0B'}
        ></meta>
      </Head>
      <div
        className={styles.container}
        data-active={chosenMember !== null}
        data-member={pageMember}
        ref={container}
      >
        <div
          className={styles.membersList}
          ref={membersList}
        >
          {(Object.keys(IsedolMembers) as IsedolMemberID[]).map((id, i) => {
            const state =
              chosenMember !== null && chosenMember !== id
                ? 'disappear'
                : (!isMobile && pageMember === null) || pageMember === id
                  ? 'active'
                  : 'normal';

            return (
              <MemberCard
                key={`member-card-${id}`}
                id={id}
                state={state}
                index={i}
                onMouseEnter={onMemberCardMouseEnter}
                onMouseOut={onMemberCardMouseOut}
                onClick={onMemberCardClick}
              ></MemberCard>
            );
          })}
        </div>
        {previousMember && (
          <div
            className={styles.memberDetails}
            style={
              {
                '--left': parentRect && `${parentRect.left + 32}px`,
                '--top': cardRect && `${cardRect.top}px`,
                '--width': cardRect && `${cardRect.width}px`,
                '--height': cardRect && `${cardRect.height}px`,
              } as DetailMemberCSS
            }
          >
            <MemberProfile id={previousMember}></MemberProfile>
          </div>
        )}
      </div>
      <WakEnterLogoLink className={styles.logo} white></WakEnterLogoLink>
    </div>
  );
};

export default IsedolMembersPage;
