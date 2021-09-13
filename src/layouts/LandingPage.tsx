import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Burger from '../components/Burger';
import LogoComponent from '../components/Logo.Component';
import useBreakPoint from '../hooks/useBreakPoint';

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

  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent='center'
        alignItems='center'
        xs={12}
        sm={6}
        className={upSm ? classes.fullVh : classes.topHalf}
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
  );
}
