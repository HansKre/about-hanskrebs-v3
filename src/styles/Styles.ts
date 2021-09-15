import { CSSStyle } from '../types/types';

export const easeInOut: CSSStyle = {
  transition: 'all .2s ease-in-out',
};

export const hoverable: CSSStyle = {
  ...easeInOut,
  '&:hover': {
    transform: 'scale(1.04)',
  },
};

export const imgBase: CSSStyle = {
  borderRadius: '10px',
  position: 'relative',
};
