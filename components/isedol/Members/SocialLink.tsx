import Link from 'next/link';

import styles from '../../../styles/components/isedol/Members/SocialLink.module.scss';

import Image from 'next/image';
import { SocialLinks } from '../../../structs/member';
import { classes } from '../../../utils/class';
import { InstagramIcon, SoundCloudIcon, TwitchIcon, TwitterIcon, YouTubeIcon } from '../../common/icons/ServiceProdivers';

interface SocialLinkProps {
  white?: boolean
}

const SocialIcons: Record<string, string> = {
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
        className={classes(styles.icon, white && styles.white)}
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
