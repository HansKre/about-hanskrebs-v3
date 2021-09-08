import { useState, useEffect } from 'react';

/**
 * Listens for `resize`-event of the window and returns actual dimensions.
 * Note: every window-resize causes a state-change and hence a re-render!
 * See following link if you need a scroll-debouncing:
 * https://stackoverflow.com/questions/12009367/javascript-event-handling-scroll-event-with-a-delay
 * @returns current window width and height
 */
export default function useWindowWidthResize() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      if (width !== window.innerWidth) {
        setWidth(window.innerWidth);
      }
    }
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}
