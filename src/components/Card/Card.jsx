import PropTypes from 'prop-types';
import styles from './card.module.css';

// PropTypes for type checking
Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

// The Card component displays an image and a title.
// It takes a title and an image URL as input via the props.
export function Card({ title, picture }) {
  return (
    <div className={styles.card}>
      <img src={picture} alt={title}></img>
      <div className={styles.rectangle}></div>
      <span>{title}</span>
    </div>
  );
}
