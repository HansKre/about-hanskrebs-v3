/* eslint-disable global-require */
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core';
import { CSSStyle } from '../types/types';
import ProgressiveImgWithFallback from './ProgressiveImgWithFallback';
import { hoverable, imgBase } from '../styles/Styles';
import useWindowSize from '../hooks/useWindowResize';

export enum ImgSides {
  left,
  right,
}

type Props = {
  imgSide: keyof typeof ImgSides;
  href: string;
  src: string;
  srcFallback: string;
  placeholder: string;
  placeholderFallback: string;
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
  imgWorksScaled: {
    ...imgBase,
    ...hoverableScaled,
    transform: 'scale(1.25)',
  },
  portraitImg: (props: { downXs: boolean }) => ({
    height: props.downXs ? '30vh' : '60vh',
  }),
});

export default function WorksCardImg(props: Props) {
  const { imgSide, href, src, srcFallback, placeholder, placeholderFallback } =
    props;
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
        animShift={
          ImgSides[imgSide] === ImgSides.left
            ? animShiftPortraitLeft
            : animShiftPortraitRight
        }
      />
    </a>
  );
}
