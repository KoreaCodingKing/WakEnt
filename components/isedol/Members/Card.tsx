import { motion } from 'framer-motion';
import Image from 'next/image';
import { Ref, useCallback } from 'react';
import { IsedolMemberID, Members } from '../../../structs/member';
import styles from '../../../styles/components/isedol/IsedolMembers.module.scss';
import { concatClass } from '../../../utils/class';
import Centerize from '../../common/Centerize';

interface MemberCardProps {
  id: IsedolMemberID
  index: number
  state?: 'active' | 'disappear'
  ref: Ref<HTMLDivElement>
  onMouseEnter?: (id: IsedolMemberID) => void
  onMouseOut?: (id: IsedolMemberID) => void
  onClick?: (id: IsedolMemberID) => void
}

export const MemberCard = ({
  id,
  state,
  index = 0,
  ref,
  onMouseEnter,
  onMouseOut,
  onClick,
}: MemberCardProps) => {
  const member = Members[id];

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
      className={concatClass(styles.member, state && styles[state])}
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
              layout='fill'
              priority
              placeholder='blur'
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
                ? '/images/icons/ico_card_arrow_tail.svg'
                : '/images/icons/ico_card_arrow.svg'
            }
            layout='fill'
            alt='사인 arrow'
            priority
          ></Image>
        </div>
        <p className={styles.sign_name}>
          <Image
            className={styles.member_sign_name}
            src={member.signNameImage}
            layout='fill'
            alt={`${member.name.ko}`}
            priority
          ></Image>
        </p>
        <div className={styles.sign_wrapper}>
          <Image
            className={styles.member_sign}
            src={member.signImage}
            layout='fill'
            alt={`${member.name.ko} 싸인`}
          ></Image>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;
