/* eslint-disable global-require */
import { makeStyles } from '@material-ui/core/styles';
import useWindowWidth from '../hooks/useWindowWidth';
import { CSSStyle } from '../types/types';
import ProgressiveImgWithFallback from './ProgressiveImgWithFallback';

const imgBase: CSSStyle = {
  position: 'relative',
  alignSelf: 'flex-start' /* Safari-fix */,
};

const useStyles = makeStyles({
  img: {
    ...imgBase,
    width: '100%',
    height: 'auto',
    borderRadius: '34px',
    mixBlendMode: 'screen',
    paddingTop: '1vw',
  },
});

export default function HeroImg() {
  const windowWidth = useWindowWidth();
  const classes = useStyles({ windowWidth });
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
