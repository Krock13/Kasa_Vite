import PropTypes from 'prop-types';
import styles from './showArrows.module.css';

import left_arrow from '../../assets/left_arrow.png';
import right_arrow from '../../assets/right_arrow.png';

// Function to display navigation arrows for an image slider
export function ShowArrows({ goToPrevious, goToNext, slides }) {
  // If there is only one slide, don't display the arrows
  if (slides.length <= 1) {
    return null;
  }

  return (
    <div>
      {/* Display the left arrow and call the goToPrevious function when clicked */}
      <img
        src={left_arrow}
        alt='leftArrow'
        onClick={goToPrevious}
        className={styles.leftArrow}
      ></img>
      {/* Display the right arrow and call the goToNext function when clicked */}
      <img
        src={right_arrow}
        alt='rightArrow'
        onClick={goToNext}
        className={styles.rightArrow}
      ></img>
    </div>
  );
}

// PropTypes for type checking
ShowArrows.propTypes = {
  goToPrevious: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired,
  slides: PropTypes.array.isRequired,
};
