// Hook
import { useState, useEffect } from 'react';

export default function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires

        entry.intersectionRatio === 1
          ? setIntersecting(false)
          : setIntersecting(true);
      },

      {
        rootMargin,
      }
    );
    let el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      el && observer.unobserve(el);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
