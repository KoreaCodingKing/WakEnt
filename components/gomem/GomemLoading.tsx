import { Html, useProgress } from '@react-three/drei';
import styles from '../../styles/components/gomem/GomemLoading.module.scss';

export const GomemLoading = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return <Html center>{progress} Loaded</Html>;
};

export default GomemLoading;
