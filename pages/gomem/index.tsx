import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import GomemPlanetName from '../../components/gomem/CurrentPlanetName';
import { Gomem3DWithEvents } from '../../components/gomem/Gomem3D';
import GomemNavigateButton from '../../components/gomem/NavigateButtons';
import {
  PlanetKeys,
  Planets,
} from '../../components/gomem/Planets';
import GomemPopup from '../../components/gomem/Popup';

import WakEnterMetadata from '../../components/wakenter/Meta';
import { WakEnterLogoLink } from '../../components/wakenter/WakEnterHeader';
import { gomem3DActiveState } from '../../states/gomem/3d';

import styles from '../../styles/pages/gomem/index.module.scss';

const Gomem: NextPage = () => {
  const router = useRouter();

  const [activeRender, setActiveRender] = useRecoilState(gomem3DActiveState);

  const onPlanetClick = (name: PlanetKeys) => {
    if (Planets[name].isGomemUnit) {
      setActiveRender(!activeRender);
    }

    if (Planets[name].link) {
      router.push(Planets[name].link!);
    }
  };

  return (
    <>
      <WakEnterMetadata title='고정 멤버'></WakEnterMetadata>
      <div className={styles.main}>
        <Gomem3DWithEvents onPlanetClick={onPlanetClick} renderActive={activeRender}></Gomem3DWithEvents>
      </div>
      <GomemPopup></GomemPopup>
      <GomemPlanetName></GomemPlanetName>
      <GomemNavigateButton></GomemNavigateButton>
      <WakEnterLogoLink className={styles.logo} white></WakEnterLogoLink>
    </>
  );
};

export default Gomem;
