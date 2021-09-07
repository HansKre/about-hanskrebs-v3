/* eslint-disable global-require */
import { makeStyles } from '@material-ui/core/styles';
import { CSSStyle } from '../types/types';
import ProgressiveImgWithFallback from './ProgressiveImgWithFallback';
import { hoverable } from '../styles/Styles';

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

type StyleProps = {
  parentWidth: number;
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

const animShiftPortraitRight = { top: '35%', left: '32%' };
const animShiftPortraitLeft = { top: '35%', left: '33%' };
// const animShiftLandscape = { top: '35%', left: '49%' };

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
  landscapeImg: (props: StyleProps) => ({
    width: `${(props.parentWidth - 2 * MARGINS_LEFT_RIGHT) / 1.5}px`,
  }),
  portraitSideImg: (props: StyleProps) => ({
    height: `${((props.parentWidth - 2 * MARGINS_LEFT_RIGHT) / 2.6) * 0.59}px`,
  }),
  portraitImg: {
    height: `${window.visualViewport.height * 0.6}px`,
  },
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
  const classes = useStyles({ parentWidth });
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
