import { keyframes } from 'styled-components';

export const flowUpAnim = keyframes`
  0% {
      transform: translateY(0px);
  }
  100% {
      transform: translateY(-1000px);
  }
`;

export const flowDownAnim = keyframes`
  100% {
      transform: translateY(0px);
  }
  0% {
      transform: translateY(-1000px);
  }
`;
