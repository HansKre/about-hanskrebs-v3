import styled, { css } from 'styled-components';

/**
 * Replacement of Material-UI Grid
 */
const GridContainer = styled.div<{
  container?: boolean;
  item?: boolean;
  overFlowHidden?: boolean;
}>`
  ${(props) =>
    props.container &&
    css`
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
    `}

  ${(props) =>
    props.item &&
    css`
      margin: 0;
      box-sizing: border-box;
    `}

  overflow: ${(props) => (props.overFlowHidden ? 'hidden' : 'initial')};
`;

export default GridContainer;
