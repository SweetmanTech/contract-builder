import { useState, useEffect } from 'react';

export const checkWidth = () => {
  const [windowWidth, setWindowWidth] = useState(null); // Start with null as it won't be available server-side

  useEffect(() => {
    // This code runs only on the client side, because useEffect is not executed during SSR
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width setup
    updateWindowWidth();

    // Add resize event listener
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []); // Empty dependency array ensures this runs only once after initial render

  return windowWidth;
};
