import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import heroImg from '../assets/IMG_9921_matte_look_1440.jpeg';
import heroImgMobile from '../assets/IMG_9921_matte_look_avatar.jpeg';
import useWindowSize from '../hooks/useWindowResize';

const useStyles = makeStyles({
  fullVh: {
    height: '50vh',
    maxHeight: '50vh',
    minHeight: '50vh',
    overflow: 'hidden',
  },
  fullVhColumns: {
    minHeight: '50vh',
  },
  halfVh: {
    height: '25vh',
    minHeight: '25vh',
    overflow: 'hidden',
  },
});

export default function About() {
  const classes = useStyles();
  const { width: windowWidth } = useWindowSize();
  const theme = useTheme();

  function ResponsiveImg() {
    const imgResponsiveStyle = () => {
      if (windowWidth >= theme.breakpoints.values.avatar) {
        return {
          width: '100vw',
          top: '-13.5vw',
        };
      }
      return {
        height: '100%',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      };
    };
    const imgLink =
      windowWidth >= theme.breakpoints.values.avatar ? heroImg : heroImgMobile;
    return (
      <img
        src={imgLink}
        alt={imgLink}
        style={{
          position: 'relative',
          alignSelf: 'flex-start' /* Safari-fix */,
          ...imgResponsiveStyle(),
        }}
      />
    );
  }
  return (
    <Grid id='about' container direction='column'>
      {/* ROW 1 */}
      <Grid
        item
        container
        justifyContent={
          windowWidth >= theme.breakpoints.values.avatar
            ? 'flex-start'
            : 'center'
        }
        xs={12}
        className={classes.fullVh}
      >
        <ResponsiveImg />
      </Grid>
      {/* ROW 2 */}
      <Grid
        item
        container
        justifyContent='center'
        alignItems='center'
        xs={12}
        className={classes.fullVhColumns}
        style={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        {/* TOP | LEFT container */}
        <Grid
          item
          container
          direction='column'
          xs={12}
          sm={6}
          className={
            windowWidth >= theme.breakpoints.values.sm
              ? classes.fullVhColumns
              : classes.halfVh
          }
          style={{
            height: '100%',
            padding:
              windowWidth >= theme.breakpoints.values.sm
                ? '7.5vw 7.5vw 7.5vw 7.5vw'
                : '10% 15% 1vw 15%',
            flexWrap: 'nowrap',
          }}
        >
          <h3>
            Hi there! I’m Hans. I’m a passionate introvert who loves building
            things with <i className='label'>code</i>.
          </h3>
          <h3>
            My first experience with programming was when I was 12, but it
            didn’t last long: I learned Delphi, which is a dialect of Object
            Pascal programming language and even created a couple of smaller
            applications like a math exercise program. I lost my free time when
            Blizzard released Diablo, though 😬
          </h3>
          <h3>
            Years later, I decided to try learning Objective-C to help out in a
            project that I was working on. It was a radically different
            experience and I distinctly remember that it started clicking for me
            and I was programming every moment of my free time again.
          </h3>
        </Grid>
        {/* BOTTOM | RIGHT container */}
        <Grid
          item
          container
          direction='column'
          xs={12}
          sm={6}
          className={
            windowWidth >= theme.breakpoints.values.sm
              ? classes.fullVhColumns
              : classes.halfVh
          }
          style={{
            height: '100%',
            padding:
              windowWidth >= theme.breakpoints.values.sm
                ? '7.5vw 7.5vw 7.5vw 7.5vw'
                : '1vw 15% 7.5vw 15%',
            flexWrap: 'nowrap',
          }}
        >
          <h3>
            Since then, I completed a degree in computer science and found my
            true passion in <i className='label'>Front End Development</i> and
            Software Architecture. I love honing my skills to constantly get
            better in Javascript, Typescript, CSS and React. Seeing my projects
            improve with the level of my skills gives me great pleasure.
          </h3>
          <h3>
            Besides programming, I enjoy photography 📸, cycling 🚴‍♂️, good wine
            🍷 and being outdoor 🌿.
          </h3>
          <h3>
            <i className='label'>Photography</i> naturally complements the eye
            for detail, lines, composition and proportions. For me, it’s about
            capturing the moment, beauty and wonders of our amazing world while
            being creative. It’s such an amazing art.
          </h3>
        </Grid>
      </Grid>
    </Grid>
  );
}
