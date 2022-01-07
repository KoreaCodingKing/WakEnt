import styles from '../../styles/components/wakenter/WakEnterFooter.module.scss';
import { WakEnterLogo } from './WakEnterHeader';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contents}>
        <div>
          <WakEnterLogo className={styles.logo}></WakEnterLogo>
        </div>
        <div className={styles.location}>
          <p>
            주식회사 왁엔터테인먼트 | 대표: 우왁굳<br></br>주소 : 인천광역시 송도
            왁엔터로 1-1 | 호스팅 사업자 : Vercel
          </p>
        </div>
        <div className={styles.disclaimer}>
          <p>
            본 페이지의 내용은 전부 허구입니다. 만약 실제와 맞아 떨어지는 내용이<br></br>
            있다면 그것은 세상이 말세인 것입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
