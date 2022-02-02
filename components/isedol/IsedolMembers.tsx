import React, { useEffect, useRef, useState, useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import styles from '../../styles/components/isedol/IsedolMembers.module.scss';

import { IsedolMemberID, Members } from '../../structs/member';
import { useHorizonalSlider } from '../common/Scroll';

import { useHashState, useNonNullState } from '../../utils/state';
import { concatClass } from '../../utils/class';

import { WakEnterLogoLink } from '../wakenter/WakEnterHeader';
import { useIntersectionObserver, useRect } from './Members/Observer';
import { useDeviceWidthLimiter } from '../../utils/device';

import MemberCard from './Members/Card';
import MemberProfile from './Members/Profile';

interface DetailMemberCSS extends React.CSSProperties {
  '--left': string
  '--top': string
  '--width': string
}

export const IsedolMembers: NextPage = () => {
  const [chosenMember, setChosenMember] = useHashState<IsedolMemberID | null>(
    null
  );
  const previousMember = useNonNullState(chosenMember);
  const [
    currentHoverMember,
    setCurrentHoverMember,
  ] = useState<IsedolMemberID | null>(null);

  const container = useRef<HTMLDivElement>(null);
  const member = useRef<HTMLDivElement>(null);
  const membersCardCache: HTMLElement[] = [];

  const [parentRect, cardRect] = useRect(
    member,
    `.${styles.member}.${styles.active}`
  );
  const isMobile = useDeviceWidthLimiter(1124);

  useHorizonalSlider(container, isMobile && chosenMember === null);
  useIntersectionObserver(
    container,
    `.${styles.member}`,
    isMobile && chosenMember === null,
    useCallback(id => {
      setCurrentHoverMember(id);
    }, [])
  );

  const scrollToTop = useCallback(() => {
    container.current!.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [container]);

  useEffect(() => {
    scrollToTop();
  }, [chosenMember, scrollToTop]);

  useEffect(() => {
    if (!isMobile || chosenMember) {
      return;
    }

    requestAnimationFrame(() => {
      const card = member.current!.querySelector(
        `.${styles.member}:first-child`
      ) as HTMLElement;
      card.dataset.active = 'true';
      setCurrentHoverMember(card.dataset.member as IsedolMemberID);
    });
  }, [chosenMember, isMobile]);

  const hoverTimeout = useRef(0!);

  const onMemberCardMouseEnter = useCallback(
    (id: IsedolMemberID) => {
      if (!isMobile && chosenMember === null) {
        clearTimeout(hoverTimeout.current);
      }

      setCurrentHoverMember(id);
    },
    [chosenMember, isMobile, hoverTimeout]
  );

  const onMemberCardMouseOut = useCallback(() => {
    if (!isMobile && chosenMember === null) {
      hoverTimeout.current = (setTimeout(() => {
        setCurrentHoverMember(null);
      }, 60) as unknown) as number;
    }
  }, [chosenMember, isMobile]);

  const onMemberCardClick = useCallback(
    (id: IsedolMemberID) => {
      if (chosenMember) {
        setChosenMember(null);
        return;
      }

      if (isMobile && container.current) {
        scrollToTop();
      }

      setChosenMember(id);
    },
    [chosenMember, isMobile, scrollToTop, setChosenMember]
  );

  const pageMember = currentHoverMember || chosenMember;

  return (
    <div className={styles.isedol_members__container}>
      <Head>
        <meta
          name='theme-color'
          content={pageMember ? Members[pageMember].backgroundColor : '#0A0A0B'}
        ></meta>
      </Head>
      <div
        className={concatClass(
          styles.inner_container,
          chosenMember !== null && styles.active
        )}
        data-member={pageMember}
        ref={container}
      >
        <div
          className={concatClass(
            styles.members_list,
            chosenMember !== null && styles.chosen,
            isMobile && styles.mobile
          )}
          ref={member}
          data-member={chosenMember}
        >
          {(Object.keys(Members) as IsedolMemberID[]).map((id, i) => {
            return (
              <MemberCard
                key={`member-card-${id}`}
                id={id}
                state={
                  currentHoverMember === null || id === currentHoverMember
                    ? 'active'
                    : !!chosenMember && chosenMember !== id
                      ? 'disappear'
                      : undefined
                }
                index={i}
                ref={(element: HTMLDivElement) =>
                  element && membersCardCache.push(element)
                }
                onMouseEnter={onMemberCardMouseEnter}
                onMouseOut={onMemberCardMouseOut}
                onClick={onMemberCardClick}
              ></MemberCard>
            );
          })}
        </div>
        {previousMember && (
          <div
            className={concatClass(
              styles.member_detail,
              chosenMember !== null && styles.active
            )}
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

export default IsedolMembers;
