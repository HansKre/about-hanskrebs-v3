import { css } from 'styled-components';

export const imgBase = css`
  border-radius: 10px;
  position: relative;
`;

export const easeInOut = css`
  transition: all 0.2s ease-in-out;
`;

export const hoverable = css`
  ${easeInOut}
  &:hover {
    transform: scale(1.04);
  }
`;
