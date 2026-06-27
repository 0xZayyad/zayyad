/**
 * Utility function to smoothly scroll to an element by its ID
 * @param id The ID of the element to scroll to (with or without # prefix)
 */
export const scrollTo = (id: string) => {
  // Remove # prefix if present
  const cleanId = id.startsWith('#') ? id.substring(1) : id;
  const element = document.getElementById(cleanId);

  if (element) {
    // Account for fixed navbar height (64px)
    const navHeight = 64;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementTop - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Utility function to get the current scroll position
 */
export const getScrollY = (): number => {
  return window.scrollY;
};

/**
 * Utility function to check if user has scrolled past a certain point
 * @param threshold The pixel threshold to check against
 */
export const isScrolledPast = (threshold: number): boolean => {
  return window.scrollY > threshold;
};