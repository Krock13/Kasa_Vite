import { useParams, useNavigate } from 'react-router-dom';
import styles from './lodging.module.css';
import { useFetch } from '../../utils/hooks/fetch';
import { ImageSlider } from '../../components/ImageSlider/ImageSlider';
import { Tags } from '../../components/Tag/Tag';
import { Rating } from '../../components/Rating/Rating';
import { Host } from '../../components/Host/Host';
import { Collapsible } from '../../components/Collapse/Collapse';

export function Lodging() {
  // Fetch data from the logements.json file.
  const { data, isLoading, error } = useFetch(`../logements.json`);

  // Get the id from the URL params
  const { id } = useParams();

  // Find the element with the matching id in the fetched data
  const element = data?.find((element) => element.id === id);

  // Get the navigate function from the hook
  const navigate = useNavigate();

  // If there is an error or if the element is not found, navigate to the 404 page
  if (error || !isLoading & !element) {
    navigate('/404');
  }

  // Destructure the props of the element
  if (!isLoading && element) {
    const { pictures, title, location, tags, rating, host, description, equipments } = element;

    return (
      <div className={styles.lodgingContainer}>
        {/* Display the image slider with the provided pictures */}
        <ImageSlider slides={pictures} />
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.location}>{location}</h3>

        {/* Display the tags, rating, and host information */}
        <Tags tags={tags} className={styles.lodgingTags} />
        <div className={styles.ratingAndHost}>
          <Rating rating={parseInt(rating, 10)} />
          <Host host={host} />
        </div>

        {/* Display collapsible sections for description and equipment */}
        <div className={styles.collapsideContainers}>
          <Collapsible customStyle={true} title='Description' content={description} />
          <Collapsible customStyle={true} title='Équipements' content={equipments} />
        </div>
      </div>
    );
  }
}
