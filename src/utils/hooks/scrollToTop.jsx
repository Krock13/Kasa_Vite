import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTopWrapper({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const body = document.querySelector('#root');
    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      500
    );
  }, [pathname]);

  return children;
}
