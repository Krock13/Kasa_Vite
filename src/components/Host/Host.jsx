import PropTypes from 'prop-types';
import styles from './host.module.css';

// Function to display information about a host
export const Host = ({ host }) => {
  // Split the name into first and last name
  const nameParts = host.name.split(' ');
  // Destructure the first and last name from the array
  const [firstName, lastName] = nameParts;

  return (
    <div className={styles.nameContainer}>
      {/* Display the first and last name */}
      <div className={styles.name}>
        <p className={styles.firstName}>{firstName.trim()}</p>
        <p className={styles.lastName}>{lastName.trim()}</p>
      </div>

      {/* Display the host's profile picture */}
      <img src={host.picture} alt={`${firstName} ${lastName}`} className={styles.picture} />
    </div>
  );
};

// PropTypes for type checking
Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
