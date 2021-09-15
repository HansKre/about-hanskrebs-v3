/* eslint-disable global-require */
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core';

import useWindowWidth from '../hooks/useWindowWidth';
import { CSSStyle } from '../types/types';
import ProgressiveImgWithFallback from './ProgressiveImgWithFallback';
import { easeInOut } from '../styles/Styles';

const imgBase: CSSStyle = {
  position: 'relative',
  alignSelf: 'flex-start' /* Safari-fix */,
};

const useStyles = makeStyles({
  img: (props: { upSm: boolean }) => ({
    ...imgBase,
    zIndex: 1,
    width: '100%',
    height: 'auto',
    borderRadius: '34px',
    mixBlendMode: 'luminosity',
    paddingTop: props.upSm ? 0 : '1vw',
    ...easeInOut,
    '&:hover': {
      mixBlendMode: 'unset',
      transform: 'scale(1.04)',
    },
  }),
});

export default function HeroImg() {
  const windowWidth = useWindowWidth();
  const theme = useTheme();
  const upSm = windowWidth >= theme.breakpoints.values.sm;
  const classes = useStyles({ upSm });
  const animShiftDesktop = { top: '40%', left: '45%' };
  return (
    <ProgressiveImgWithFallback
      src={require('../assets/IMG_1515.webp').default}
      srcFallback={require('../assets/IMG_1515.jpg').default}
      placeholder={require('../assets/IMG_1515_lowres.webp').default}
      placeholderFallback={require('../assets/IMG_1515_lowres.jpg').default}
      className={classes.img}
      animShift={animShiftDesktop}
    />
  );
}
