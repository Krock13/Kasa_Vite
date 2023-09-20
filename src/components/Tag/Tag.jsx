import PropTypes from 'prop-types';
import styles from './tag.module.css';

// Function to display a list of tags
export const Tags = ({ tags }) => {
  return (
    <div className={styles.tagsContainers}>
      {/* Map over the tags and display each one in a separate container */}
      {tags.map((tag, index) => (
        <div key={`${tag}-${index}`} className={styles.lodgingTags}>
          <span className={styles.tag}>{tag}</span>
        </div>
      ))}
    </div>
  );
};

// PropTypes for type checking
Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
