export const mainVariant = {
  entering: { visibility: 'hidden' },
  entered: { visibility: 'visible' },
};

export const h1ContainerVariant = {
  entered: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const h1Variant = {
  entering: { opacity: 0, color: 'red' },
  entered: {
    opacity: 1,
    color: 'yellow',
    transition: {
      opacity: { duration: 0 },
      color: { delay: 1 },
    },
  },
};

export const tracksVariant = {
  fading: { opacity: 0, scale: 0.98 },
  faded: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
};

export const bordersVariant = {
  none: { borderStyle: 'none' },
  solid: {
    borderStyle: 'solid',
    borderWidth: '5px',
    transition: {
      // delay: 2,
      ease: 'easeInOut',
    },
  },
};
