import { Link } from 'react-router-dom';
import styles from './error.module.css';

// Function to display the error page when a user tries to access a non-existent page
export function Error() {
  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.titre}>404</h2>

      <p className={styles.error}>
        <span>Oups! La page que </span>
        <span>vous demandez n'existe pas.</span>
      </p>

      {/* Link to the home page */}
      <Link to={`./`} className={styles.redirection}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
