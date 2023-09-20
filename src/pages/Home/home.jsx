import { Link } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/fetch';
import { Card } from '../../components/Card/Card';
import styles from './home.module.css';

import banner from '../../assets/banner.png';

export function Home() {
  // Use the fetch hook to get data from the provided url
  const { data, error } = useFetch(`./logements.json`);

  // If there is an error while fetching, display an error message
  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return (
    <div className={styles.homeContainer}>
      {/* Banner */}
      <section className={styles.banner}>
        <img src={banner} alt='paysage côtier'></img>
        <div className={styles.spanContainer}>
          <span className={styles.span1}>Chez vous, </span>
          <span className={styles.span2}>partout et ailleurs</span>
        </div>
      </section>
      {/* Body */}
      <section className={styles.thumb}>
        <div className={styles.cardContainer}>
          {/* Map through the data array to display a card for each element */}
          {data.map((logement, index) => (
            <div className={styles.cardCalc} key={`${logement.id}-${index}`}>
              <Link to={`/lodging/${logement.id}`}>
                <Card picture={logement.cover} title={logement.title} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
