import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch a URL using useEffect.
 * @param {string} url - The URL to fetch.
 * @returns {Object} - An object containing the data, a boolean indicating if the data is loading, and a boolean indicating if an error occurred.
 */
export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true; // Component mounting indicator
    // Set a loading indicator to true before fetching
    setLoading(true);
    // Declaration of an asynchronous function (fetch, parse then save in the state data) + error handling
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (isMounted) {
          if (response.ok) {
            const data = await response.json();
            setData(data);
          } else {
            throw new Error('Network response was not ok');
          }
        }
      } catch (err) {
        if (isMounted) {
          console.log(err);
          setError(true);
        }
      } finally {
        // Set the loading indicator to false after fetching
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      isMounted = false; // Update indicator during demounting
    };
  }, [url]);
  return { data, isLoading, error };
}
