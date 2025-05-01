import { useState, useEffect } from 'react';

/**
 * Custom hook that returns whether the user has scrolled past a certain threshold
 * @param threshold - The number of pixels to scroll before the effect is triggered
 * @returns boolean - Whether the user has scrolled past the threshold
 */
export default function useScrollEffect(threshold: number = 0): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
