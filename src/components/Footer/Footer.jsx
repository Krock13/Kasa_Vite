import styles from './footer.module.css';

import vector_A_white from '../../assets/vector_A_white.png';
import vector_K_white from '../../assets/vector_K_white.png';
import vector_S_white from '../../assets/vector_S_white.png';
import vector_house_white from '../../assets/house_white.png';

export function Footer() {
  return (
    <div className={styles.footer}>
      {/* Display the Kasa logo using individual images */}
      <div className={styles.logo}>
        <img src={vector_K_white} alt='K'></img>
        <img className={styles.house} src={vector_house_white} alt='A'></img>
        <img src={vector_S_white} alt='S'></img>
        <img src={vector_A_white} alt='A'></img>
      </div>
      {/* Display the copyright information */}
      <span>© {new Date().getFullYear()} Kasa. All rights reserved</span>
    </div>
  );
}
