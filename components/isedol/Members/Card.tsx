import { motion } from 'framer-motion';
import Image from 'next/image';
import { Ref, useCallback } from 'react';
import { IsedolMemberID, IsedolMemberNameImages, IsedolMembers } from '../../../structs/member';
import styles from '../../../styles/components/isedol/IsedolMembers.module.scss';
import Centerize from '../../common/Centerize';

interface MemberCardProps {
  id: IsedolMemberID
  index: number
  state?: 'active' | 'disappear' | 'normal'
  ref?: Ref<HTMLDivElement>
  onMouseEnter?: (id: IsedolMemberID) => void
  onMouseOut?: (id: IsedolMemberID) => void
  onClick?: (id: IsedolMemberID) => void
}

const ArrowTailImage = `data:image/svg+xml, %3Csvg width='32' height='61' viewBox='0 0 32 61' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M29.9373 59.4269C26.3787 58.02 22.2709 57.4705 19.4688 54.6685C14.0441 49.2437 12.258 39.7074 10.657 32.5683C8.73808 24.0121 7.93627 14.9551 9.63478 6.27379C9.8993 4.92182 9.98668 3.39067 10.3397 2.07936C10.5062 1.46092 8.71213 3.36608 8.48924 3.63024C6.98575 5.41215 5.3888 7.10656 3.80134 8.81161C3.53606 9.09654 2.14346 10.8782 2.19758 10.6797C2.9486 7.92599 5.45625 4.5245 7.87241 2.97816C8.58467 2.52232 9.18279 1.92644 9.93438 1.55064C10.1478 1.44395 11.3456 3.08141 11.5381 3.29539C13.3599 5.31952 15.003 7.37713 16.931 9.30507' stroke='white' strokeWidth='3' strokeLinecap='round' /%3E%3C/svg%3E`;
const ArrowImage = `data:image/svg+xml,%3Csvg width='59' height='40' viewBox='0 0 59 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.00633 2C16.0311 2 30.8775 6.01648 41.4958 15.6694C47.0239 20.6949 50.8851 26.2655 52.9132 33.4763C53.3176 34.9144 53.3845 36.2644 53.3845 37.7448C53.3845 38.1431 53.9967 35.637 54.1177 35.2047C54.7623 32.9027 57.103 26.2937 57.103 28.6842C57.103 30.2487 52.6052 36.8282 51.7348 36.8282C51.3818 36.8282 50.2709 35.6696 49.8755 35.4665C48.3701 34.6935 47.0702 33.6485 45.5809 32.8741C43.6382 31.8638 41.6071 30.7562 39.7151 29.8102' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A`;

export const MemberCard = ({
  id,
  state,
  index = 0,
  ref,
  onMouseEnter,
  onMouseOut,
  onClick,
}: MemberCardProps) => {
  const member = IsedolMembers[id];

  const onClickHandler = useCallback(
    (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (onClick) {
        ev.preventDefault();
        onClick(id);
      }
    },
    [id, onClick]
  );

  return (
    <motion.div
      className={styles.member}
      data-state={state}
      data-member={id}
      ref={ref}
      onMouseEnter={() => onMouseEnter && onMouseEnter(id)}
      onMouseOut={() => onMouseOut && onMouseOut(id)}
      onClick={onClickHandler}
    >
      <div className={styles.background}>
        <Centerize>
          <div className={styles.member_image_wrapper}>
            <Image
              className={styles.member_image}
              src={member.image}
              layout="fill"
              priority
              placeholder="blur"
              blurDataURL={member.image}
              alt={member.name.ko}
            ></Image>
          </div>
        </Centerize>
      </div>
      <div className={styles.sign_box} data-member={id}>
        <div className={styles.arrow_wrapper}>
          <Image
            className={styles.sign_arrow}
            src={
              index % 2 === 0
                ? ArrowTailImage
                : ArrowImage
            }
            layout="fill"
            alt="사인 arrow"
            priority
          ></Image>
        </div>
        <p className={styles.sign_name}>
          <Image
            className={styles.member_sign_name}
            src={IsedolMemberNameImages[id]}
            layout="fill"
            alt={`${member.name.ko}`}
            priority
          ></Image>
        </p>
        <div className={styles.sign_wrapper}>
          <Image
            className={styles.member_sign}
            src={member.signImage}
            layout="fill"
            alt={`${member.name.ko} 싸인`}
          ></Image>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
