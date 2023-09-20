import { useState, useEffect } from 'react';

// Custom hook for fetching data from a URL
export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true; // Track component mount status
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          if (isMounted) {
            setData(data);
          }
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (err) {
        console.log(err);
        if (isMounted) {
          setError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    // Cleanup: set isMounted to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
}
