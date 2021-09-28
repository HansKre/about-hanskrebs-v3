import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import useBreakPoint from '../../hooks/useBreakPoint';
import Burger from '../../components/Burger';
import * as AnimationVariants from '../../styles/AnimationVariants';

const fullVh = {
  height: '100vh',
  maxHeight: '100vh',
  overflow: 'hidden' /* hide overflow of padding-bottom for large content */,
};

const bottomHalf = {
  height: '60vh',
  maxHeight: '60vh',
  overflow: 'hidden' /* hide overflow of padding-bottom for large content */,
};

export default function Greeting({ scale }: { scale: number }) {
  const theme = useTheme();
  const downSm = useBreakPoint('down', 'sm');
  const upSm = useBreakPoint('up', 'sm');
  const upMd = useBreakPoint('up', 'md');

  return (
    <Grid
      item
      container
      justifyContent='center'
      alignItems='center'
      xs={12}
      sm={6}
      style={{
        backgroundColor: theme.palette.primary.main,
        ...(upSm ? fullVh : bottomHalf),
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
            transform: `scale(${scale})`,
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
  );
}
