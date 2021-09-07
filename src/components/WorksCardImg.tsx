/* eslint-disable global-require */
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core';
import { CSSStyle } from '../types/types';
import ProgressiveImgWithFallback from './ProgressiveImgWithFallback';
import { hoverable } from '../styles/Styles';
import useWindowSize from '../hooks/useWindowResize';

const MARGINS_LEFT_RIGHT = 60;

export enum ImgSides {
  left,
  right,
}

type Props = {
  parentWidth: number;
  imgSide: keyof typeof ImgSides;
  href: string;
  src: string;
  srcFallback: string;
  placeholder: string;
  placeholderFallback: string;
};

const imgBase: CSSStyle = {
  borderRadius: '10px',
  position: 'relative',
};

const hoverableScaled: CSSStyle = {
  ...hoverable,
  '&:hover': {
    transform: 'scale(1.29)',
  },
};

const animShiftPortraitRight = { top: '35%', left: '30%' };
const animShiftPortraitLeft = { top: '35%', left: '30%' };

const useStyles = makeStyles({
  imgWorks: {
    ...imgBase,
    ...hoverable,
  },
  imgWorksScaled: {
    ...imgBase,
    ...hoverableScaled,
    transform: 'scale(1.25)',
  },
  portraitImg: (props: { downXs: boolean }) => ({
    height: props.downXs
      ? `${window.visualViewport.height * 0.3}px`
      : `${window.visualViewport.height * 0.6}px`,
  }),
  marginRight: {
    marginRight: `${MARGINS_LEFT_RIGHT}px`,
  },
  marginLeft: {
    marginLeft: `${MARGINS_LEFT_RIGHT}px`,
  },
});

export default function WorksCardImg(props: Props) {
  const {
    parentWidth,
    imgSide,
    href,
    src,
    srcFallback,
    placeholder,
    placeholderFallback,
  } = props;
  const { width: windowWidth } = useWindowSize();
  const theme = useTheme();
  const downXs = windowWidth < theme.breakpoints.values.xs;
  const classes = useStyles({ downXs });

  return (
    <a
      style={{
        display: 'flex',
        flex: '0 1 auto',
        justifyContent:
          ImgSides[imgSide] === ImgSides.left ? 'flex-start' : 'flex-end',
        marginBottom: '-5px',
      }}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <ProgressiveImgWithFallback
        src={src}
        srcFallback={srcFallback}
        placeholder={placeholder}
        placeholderFallback={placeholderFallback}
        className={`${classes.imgWorksScaled} ${classes.portraitImg}`}
        // animShift={animShiftPortraitRight}
        animShift={
          ImgSides[imgSide] === ImgSides.left
            ? animShiftPortraitLeft
            : animShiftPortraitRight
        }
      />
    </a>
  );
}
