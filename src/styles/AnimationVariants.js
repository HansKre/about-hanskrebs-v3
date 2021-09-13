export const pageNavigation = {
  fadeIn: { opacity: 0 },
  faded: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  fadeOut: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const deScale = {
  zoomed: { scale: 1.3 },
  normal: {
    scale: 1,
    transition: {
      delay: 1.1,
      duration: 2,
      ease: [1, 0.05, 0.48, 0.92],
    },
  },
};

export const curtainsUp = {
  expanded: { scaleY: 1 },
  shrunk: {
    scaleY: 0,
    transition: {
      delay: 1.1,
      duration: 1.8,
      ease: [1, 0.05, 0.48, 0.92],
    },
  },
};

export const fadeIn = {
  fading: { opacity: 0 },
  faded: {
    opacity: 1,
    transition: {
      delay: 2.6,
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export const h4First = {
  entering: { y: 450 },
  entered: {
    y: 0,
    transition: { delay: 2.3, duration: 2.2, ease: [0.97, -0.01, 0.32, 0.87] },
  },
};
export const h1 = {
  entering: { y: 450 },
  entered: {
    y: 0,
    transition: { delay: 2.8, duration: 2.2, ease: [0.97, -0.01, 0.32, 0.87] },
  },
};
export const h4Second = {
  entering: { y: 450 },
  entered: {
    y: 0,
    transition: { delay: 3.3, duration: 2.2, ease: [0.97, -0.01, 0.32, 0.87] },
  },
};

export const fadeInLater = {
  fading: { opacity: 0 },
  faded: {
    opacity: 1,
    transition: {
      delay: 5.0,
      duration: 2.5,
      ease: 'easeOut',
    },
  },
};
