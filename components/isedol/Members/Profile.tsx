import Image from 'next/image';
import { IsedolMemberID, IsedolMembers } from '../../../structs/member';
import styles from '../../../styles/components/isedol/IsedolMembers.module.scss';
import ModelSlider from '../../common/ModelSlider';
import SocialLink from './SocialLink';

interface MemberProfileProps {
  id: IsedolMemberID
}

export const MemberProfile = ({ id }: MemberProfileProps) => {
  const member = IsedolMembers[id];

  return (
    <div className={styles.profile}>
      <div className={styles.profile_box}>
        <div className={styles.profile_name}>
          <h1>{member.name.ko}</h1>
          <p className={styles.sub}>{member.name.en}</p>
        </div>
        <div className={styles.profile_detail}>
          <table>
            <tbody>
              <tr>
                <td>Color</td>
                <td>{member.metadata.color}</td>
              </tr>
              <tr>
                <td>Birth</td>
                <td>{member.metadata.birth}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{member.metadata.height}cm</td>
              </tr>
              <tr>
                <td>Blood</td>
                <td>{member.metadata.blood}</td>
              </tr>
              <tr>
                <td>MBTI</td>
                <td>{member.metadata.mbti}</td>
              </tr>
              <tr>
                <td>Fandom</td>
                <td>{member.metadata.fandom}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.social_links}>
          {member.links.map(link => (
            <SocialLink
              key={`social-link-${link.name}-${link.link}`}
              {...link}
              white
            ></SocialLink>
          ))}
        </div>
      </div>
      <div className={styles.profile_sign_wrapper}>
        <Image
          className={styles.member_sign}
          src={member.signImage}
          layout='fill'
          alt={`${member.name.ko} 싸인`}
        ></Image>
      </div>
      <div className={styles.model_viewer}>
        <ModelSlider
          models={member.modelImages}
          white
        ></ModelSlider>
      </div>
    </div>
  );
};

export default MemberProfile;
