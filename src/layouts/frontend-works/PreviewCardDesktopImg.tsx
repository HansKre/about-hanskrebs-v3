/* eslint-disable no-confusing-arrow */
/* eslint-disable global-require */
import styled, { css } from 'styled-components';
import useWindowSize from '../../hooks/useWindowResize';
import useBreakPoint from '../../hooks/useBreakPoint';
import ProgressiveImgWithFallback from '../../components/ProgressiveImgWithFallback';

const imgBase = css`
  border-radius: 10px;
  position: relative;
`;

const easeInOut = css`
  transition: all 0.2s ease-in-out;
`;

const hoverable = css`
  ${easeInOut}
  &:hover {
    transform: scale(1.04);
  }
`;

const StyledProgressiveImgWithFallback = styled(ProgressiveImgWithFallback)<{
  upMd: boolean;
  windowWidth: number;
}>`
  ${imgBase}
  ${hoverable}
width: ${({ upMd, windowWidth }) =>
    upMd ? '70vw' : `${windowWidth * 0.85}px`};
`;

export default function PreviewCardDesktopImg() {
  const { width: windowWidth } = useWindowSize();
  const upMd = useBreakPoint('up', 'md');
  const animShiftLandscape = { top: '35%', left: '42%' };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        marginTop: '1vw',
        marginBottom: '70px',
      }}
    >
      <a
        style={{ marginBottom: '-5px' }}
        href='https://dazzling-roentgen-c2c3a7.netlify.app/'
        target='_blank'
        rel='noreferrer'
      >
        <StyledProgressiveImgWithFallback
          upMd={upMd}
          windowWidth={windowWidth}
          src={
            require('../../assets/works/fem-stats-preview-card-desktop.webp')
              .default
          }
          srcFallback={
            require('../../assets/works/fem-stats-preview-card-desktop.png')
              .default
          }
          placeholder={
            require('../../assets/works/fem-stats-preview-card-desktop_lowres.webp')
              .default
          }
          placeholderFallback={
            require('../../assets/works/fem-stats-preview-card-desktop_lowres.png')
              .default
          }
          animShift={animShiftLandscape}
        />
      </a>
    </div>
  );
}
