import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './imageSlider.module.css';
import { ShowArrows } from '../../components/ShowArrows/ShowArrows';

// Function to display an image slider with navigation arrows
export const ImageSlider = ({ slides }) => {
  // Initialize the state variables for the current slide index and a function to set it
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const goToPrevious = () => {
    // Check if the current slide is the first one
    const isFirstSlide = currentIndex === 0;

    // Set the new index to the last slide if the current slide is the first one, or the previous slide otherwise
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to a specific slide by index
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Get the current slide based on the current index
  const photo = slides[currentIndex];

  return (
    <div className={styles.imageSliderContainer}>
      {/* Display navigation arrows */}
      <ShowArrows goToPrevious={goToPrevious} goToNext={goToNext} slides={slides} />

      {/* Display the current slide */}
      <img src={photo} alt={`Slide ${currentIndex + 1}`} className={styles.pictures}></img>
      <div className={styles.rectangle}></div>

      {/* Display the current image index and the total number of images */}
      <div className={styles.imageIndex}>{`${currentIndex + 1}/${slides.length}`}</div>

      <div>
        {slides.map((_, slideIndex) => {
          return <div key={slideIndex} onClick={() => goToSlide(slideIndex)}></div>;
        })}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};
