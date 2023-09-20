import PropTypes from 'prop-types';
import styles from './rating.module.css';

import red_star from '../../assets/red_star.png';
import grey_star from '../../assets/grey_star.png';

// Function to display a rating with stars
export const Rating = ({ rating }) => {
  // Array of numbers from 1 to 5 representing the stars
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.ratingContainer}>
      {/* Map over the stars and display a red or grey star based on the rating value */}
      {stars.map((star) =>
        rating >= star ? (
          <img key={star.toString()} src={red_star} alt='red_star' className={styles.rating} />
        ) : (
          <img key={star.toString()} src={grey_star} alt='grey_star' className={styles.rating} />
        )
      )}
    </div>
  );
};

// PropTypes for type checking
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
