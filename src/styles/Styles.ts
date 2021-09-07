import { CSSStyle } from '../types/types';

export const hoverable: CSSStyle = {
  transition: 'all .2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.04)',
  },
};

export const imgBase: CSSStyle = {
  borderRadius: '10px',
  position: 'relative',
};
