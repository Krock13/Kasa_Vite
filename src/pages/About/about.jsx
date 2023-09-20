import styles from './about.module.css';
import { Collapsible } from '../../components/Collapse/Collapse';

import banner from '../../assets/banner_about.png';

// Import paragraphs from a separate file in order to keep clean code.
import { aboutData } from './aboutData';

export function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Banner */}
      <div className={styles.bannerContainer}>
        <img src={banner} alt='bannière paysage de montagne' className={styles.banner}></img>
      </div>
      {/* Body */}
      <div className={styles.collapsibleContainer}>
        <div>
          {/* Display a Collapsible component for each element of aboutData */}
          <Collapsible customStyle={false} title='Fiabilité' content={aboutData.fiabilite} />
          <Collapsible customStyle={false} title='Respect' content={aboutData.respect} />
          <Collapsible customStyle={false} title='Service' content={aboutData.service} />
          <Collapsible customStyle={false} title='Sécurité' content={aboutData.securite} />
        </div>
      </div>
    </div>
  );
}
