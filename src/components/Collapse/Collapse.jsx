import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './collapse.module.css';

// Arrow icons used in the component
import down_arrow from '../../assets/down_arrow.png';
import up_arrow from '../../assets/up_arrow.png';

// Title and content from destructuring props of Lodging page or About page
export const Collapsible = ({ title, content, customStyle }) => {
  const [open, setOpen] = useState(false);
  // Toggle the state of 'open' between true and false
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.collapse}>
      {/* Button to open/close the collapse */}
      <button onClick={toggle} className={customStyle ? styles.button : styles.buttonAbout}>
        {title}
        {/* Display up or down arrow based on the state of 'open' */}
        {open ? (
          <img src={up_arrow} alt='up_arrow' className={styles.arrow} />
        ) : (
          <img src={down_arrow} alt='down_arrow' className={styles.arrow} />
        )}
      </button>
      {/* Content of the collapse */}
      {open && (
        <div className={customStyle ? styles.contentShow : styles.contentShowAbout}>
          {/* Check if content is an array or a single paragraph and render accordingly */}
          {Array.isArray(content) ? (
            <ul className={customStyle ? styles.content : styles.contentAbout}>
              {content.map((equipments) => (
                <li key={equipments}>{equipments}</li>
              ))}
            </ul>
          ) : (
            <p className={customStyle ? styles.content : styles.contentAbout}>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

// PropTypes for type checking
Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  customStyle: PropTypes.bool,
};
