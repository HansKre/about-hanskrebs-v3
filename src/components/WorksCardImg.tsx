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

// const animShiftPortraitRight = { top: '35%', left: '25%' };
// const animShiftPortraitLeft = { top: '35%', left: '47%' };
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

type Props = {
  parentWidth: number;
  imgSide: keyof typeof ImgSides;
};

export default function WorksCardImg(props: Props) {
  const { parentWidth, imgSide } = props;
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
      href='https://vigorous-wright-d3c341.netlify.app/'
      target='_blank'
      rel='noreferrer'
    >
      <ProgressiveImgWithFallback
        src={require('../assets/works/fem-order-summary.webp').default}
        srcFallback={require('../assets/works/fem-order-summary.png').default}
        placeholder={
          require('../assets/works/fem-order-summary_lowres.webp').default
        }
        placeholderFallback={
          require('../assets/works/fem-order-summary_lowres.png').default
        }
        className={`${classes.imgWorksScaled} ${classes.portraitImg}`}
        // TODO: properly shift animation
        // animShift={animShiftPortraitRight}
        animShift={{ top: '0', left: '0' }}
      />
    </a>
  );
}
