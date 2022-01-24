import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GomemPlanetName from '../../components/gomem/CurrentPlanetName';
import { Gomem3DWithEvents } from '../../components/gomem/Gomem3D';
import GomemNavigateButton from '../../components/gomem/NavigateButtons';
import {
  PlanetKeys,
  Planets,
} from '../../components/gomem/Planets';
import GomemPopup from '../../components/gomem/Popup';

import WakEnterMetadata from '../../components/wakenter/Meta';
import { WakEnterLogo } from '../../components/wakenter/WakEnterHeader';

import styles from '../../styles/pages/gomem/index.module.scss';

const Gomem: NextPage = () => {
  const router = useRouter();

  const onPlanetClick = (name: PlanetKeys) => {
    if (Planets[name].link) {
      router.push(Planets[name].link!);
    }
  };

  return (
    <>
      <WakEnterMetadata title='고정 멤버'></WakEnterMetadata>
      <div className={styles.main}>
        <Gomem3DWithEvents onPlanetClick={onPlanetClick}></Gomem3DWithEvents>
      </div>
      <GomemPopup></GomemPopup>
      <GomemPlanetName></GomemPlanetName>
      <GomemNavigateButton></GomemNavigateButton>
      <Link key={'link-wak-enter'} href={'/'} passHref>
        <div
          className={styles.logo}
          tabIndex={100}
          onKeyDown={ev => ev.key === 'Enter' && router.push('/')}
        >
          <WakEnterLogo white></WakEnterLogo>
        </div>
      </Link>
    </>
  );
};

export default Gomem;
