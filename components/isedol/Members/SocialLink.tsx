import Link from 'next/link';

import styles from '../../../styles/components/isedol/Members/SocialLink.module.scss';

import InstagramIcon from '../../../public/images/icons/services/instagram.png';
import SoundCloudIcon from '../../../public/images/icons/services/soundcloud.png';
import TwitchIcon from '../../../public/images/icons/services/twitch.png';
import TwitterIcon from '../../../public/images/icons/services/twitter.png';
import YouTubeIcon from '../../../public/images/icons/services/youtube.png';
import Image from 'next/image';
import { SocialLinks } from '../../../structs/member';
import { concatClass } from '../../../utils/class';

interface SocialLinkProps {
  white?: boolean
}

const SocialIcons: Record<string, StaticImageData> = {
  instagram: InstagramIcon,
  soundcloud: SoundCloudIcon,
  twitch: TwitchIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
};

export const SocialLink = ({
  link,
  name,
  icon,
  white,
}: SocialLinks & SocialLinkProps) => {
  return (
    <Link href={link}>
      <a
        className={concatClass(styles.icon, white && styles.white)}
        target='_blank'
      >
        {(icon && SocialIcons[icon] && (
          <Image
            src={SocialIcons[icon]}
            width={30}
            height={30}
            alt={`${name} 링크`}
            priority
          ></Image>
        )) ??
          name}
      </a>
    </Link>
  );
};

export default SocialLink;
