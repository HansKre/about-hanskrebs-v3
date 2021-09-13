/* eslint-disable object-curly-newline */
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Burger from '../components/Burger';
import LogoComponent from '../components/Logo.Component';
import useBreakPoint from '../hooks/useBreakPoint';

const animationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const useStyles = makeStyles({
  fullVh: {
    height: '100vh',
    maxHeight: '100vh',
    overflow: 'hidden' /* hide overflow of padding-bottom for large content */,
  },
  topHalf: {
    height: '40vh',
    maxHeight: '40vh',
    overflow: 'hidden' /* hide overflow of padding-bottom for large content */,
  },
  bottomHalf: {
    height: '60vh',
    maxHeight: '60vh',
    overflow: 'hidden' /* hide overflow of padding-bottom for large content */,
  },
});

/**
 * Flexbox layout with full viewport height and width.
 * Layout provides two separate containers.
 * On desktop, those are next to each other.
 * Below `sm`-breakpoint, the containers are
 * stacked with 100vh-height and 100% of width.
 */
export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const downSm = useBreakPoint('down', 'sm');
  const upSm = useBreakPoint('up', 'sm');
  const upMd = useBreakPoint('up', 'md');
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [scale, setScale] = useState(1);

  const { scrollY } = useViewportScroll();

  const transformedY = useTransform(
    scrollY,
    [0, window.innerHeight],
    [1, 1.5],
    {
      clamp: true,
    }
  );

  const opacity = useTransform(scrollY, [0, window.innerHeight / 2], [1, 0]);

  transformedY.onChange(() => setScale(transformedY.get()));

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className='Box'
      initial='hidden'
      animate={controls}
      variants={animationVariants}
      style={{ opacity }}
    >
      <Grid
        container
        style={{
          overflow: 'hidden',
        }}
      >
        <Grid
          item
          container
          justifyContent='center'
          alignItems='center'
          xs={12}
          sm={6}
          className={upSm ? classes.fullVh : classes.topHalf}
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <LogoComponent />
        </Grid>
        <Grid
          item
          container
          justifyContent='center'
          alignItems='center'
          xs={12}
          sm={6}
          className={upSm ? classes.fullVh : classes.bottomHalf}
          style={{
            backgroundColor: theme.palette.primary.main,
            transform: `scale(${scale})`,
          }}
        >
          <nav
            style={{
              position: 'absolute',
              boxSizing:
                'border-box' /* Safari-fix, seems to ignore border-box from root when 'position: absolute' is set */,
              top: 0,
              right: 0 /* Chrome-fix for Windows */,
              width: upSm ? '50vw' : '100vw',
              display: 'flex',
              placeContent: upMd ? 'center space-between' : 'center flex-end',
              alignItems: 'center',
              padding: upSm ? '1vw 7.5% 0 7.5%' : '1vw 15% 0 15%',
            }}
          >
            {upMd ? (
              <>
                <a href='#about'>ABOUT</a>
                <a href='#works'>WORKS</a>
                {/* <a href='#photography'>PHOTOGRAPHY</a> */}
                <a href='#contact'>CONTACT</a>
              </>
            ) : (
              <Burger />
            )}
          </nav>
          <div
            style={{
              display: 'flex',
              flex: '1 1 100%',
              flexDirection: 'column',
              padding: upSm
                ? '15%'
                : '0 15% 0' /* don't use vw to avoid padding-overflow! */,
              ...(downSm && {
                height: '100%',
                justifyContent: 'center',
              }),
            }}
          >
            <h4>
              Hello there 👋, <span>I’m Hans.</span>
            </h4>
            <h1 id='home' style={{ marginTop: 0 }}>
              <span>
                Front End <i className='label'>Developer</i>,
              </span>{' '}
              Software Architect, and Photographer.
            </h1>
            <h4>Welcome To My About Me Page!</h4>
          </div>
        </Grid>
      </Grid>
    </motion.div>
  );
}
