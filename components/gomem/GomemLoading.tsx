import { useEffect } from 'react';
import styles from '../../styles/components/gomem/GomemLoading.module.scss';

interface GomemLoadingProps {
  progress?: number
}

export const GomemLoading = ({
  progress
}: GomemLoadingProps) => {
  useEffect(() => {
    debugger;
  }, []);

  return <div className={styles.loading}>
    <div className={styles.contents}>
      <h1>Loading {progress}</h1>
    </div>
  </div>;
};

export default GomemLoading;