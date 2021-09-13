/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Burger from '../components/Burger';
import Logo from '../components/Logo.Component';
import useBreakPoint from '../hooks/useBreakPoint';
import * as AnimationVariants from '../styles/AnimationVariants';

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
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    transformOrigin: 'top',
    pointerEvents: 'none',
    backgroundColor: 'black',
    zIndex: 2,
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
  const [scale, setScale] = useState(1);

  const { scrollY } = useViewportScroll();

  const scalingMotion = useTransform(
    scrollY,
    [0, window.innerHeight],
    [1, 1.5],
    {
      clamp: true,
    }
  );

  scalingMotion.onChange(() => setScale(scalingMotion.get()));

  return (
    <div>
      <Grid
        container
        style={{
          overflow: 'hidden',
        }}
      >
        <motion.div
          variants={AnimationVariants.curtainsUp}
          initial='expanded'
          animate='shrunk'
          className={classes.background}
        />
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
          <Logo />
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
          <motion.nav
            variants={AnimationVariants.fadeInLater}
            initial='fading'
            animate='faded'
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
          </motion.nav>
          <motion.div
            variants={AnimationVariants.deScale}
            initial='zoomed'
            animate='normal'
          >
            <motion.div
              variants={AnimationVariants.fadeIn}
              initial='fading'
              animate='faded'
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
              <motion.h4
                variants={AnimationVariants.h4First}
                initial='entering'
                animate='entered'
              >
                Hello there 👋, <span>I’m Hans.</span>
              </motion.h4>
              <motion.h1
                variants={AnimationVariants.h1}
                initial='entering'
                animate='entered'
                id='home'
                style={{ marginTop: 0 }}
              >
                <span>
                  Front End <i className='label'>Developer</i>,
                </span>{' '}
                Software Architect, and Photographer.
              </motion.h1>
              <motion.h4
                variants={AnimationVariants.h4Second}
                initial='entering'
                animate='entered'
              >
                Welcome To My About Me Page!
              </motion.h4>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
}
