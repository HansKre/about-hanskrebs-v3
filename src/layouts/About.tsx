/* eslint-disable @typescript-eslint/indent */
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import heroImg from '../assets/IMG_9921_matte_look_1440.jpeg';
import heroImgMobile from '../assets/IMG_9921_matte_look_avatar.jpeg';
import useWindowWidthSize from '../hooks/useWindowWidthSize';

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
  const windowWidth = useWindowWidthSize();
  const theme = useTheme();
  const upAvatar = windowWidth >= theme.breakpoints.values.avatar;
  const upSm = windowWidth >= theme.breakpoints.values.sm;

  function ResponsiveImg() {
    const imgResponsiveStyle = () => {
      if (upAvatar) {
        return {
          width: '100vw',
          top: '-13.5vw',
        };
      }
      return {
        height: '100%',
        borderRadius: '50%',
        boxShadow:
          '0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 2%)',
      };
    };
    const imgLink = upAvatar ? heroImg : heroImgMobile;
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
        justifyContent={upAvatar ? 'flex-start' : 'center'}
        xs={12}
        className={classes.fullVh}
        style={
          upAvatar
            ? { backgroundColor: theme.palette.secondary.light }
            : {
                background:
                  'linear-gradient(0deg, rgba(12,18,72,1) 0%, rgba(200,200,200,1) 50%, rgba(12,18,72,1) 100%)',
                margin: '-1px 0' /* remove strange white line top and bottom */,
              }
        }
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
          className={upSm ? classes.fullVhColumns : classes.halfVh}
          style={{
            height: '100%',
            padding: upSm ? '7.5vw 7.5vw 7.5vw 7.5vw' : '10% 15% 1vw 15%',
            flexWrap: 'nowrap',
          }}
        >
          <h3>
            Hi there! I’m Hans. I’m a passionate person who loves building
            things with code.
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
          className={upSm ? classes.fullVhColumns : classes.halfVh}
          style={{
            height: '100%',
            padding: upSm ? '7.5vw 7.5vw 7.5vw 7.5vw' : '1vw 15% 7.5vw 15%',
            flexWrap: 'nowrap',
          }}
        >
          <h3>
            Since then, I completed a degree in computer science and found my
            true passion in Front End Development and Software Architecture. I
            love honing my skills to constantly get better in Javascript,
            Typescript, CSS and React. Seeing my projects improve with the level
            of my skills gives me great pleasure and feels super rewarding to
            me.
          </h3>
          <h3>
            Besides programming, I enjoy photography 📸, cycling 🚴‍♂️, good wine
            🍷 and being outdoor 🌿.
          </h3>
          <h3>
            Photography naturally complements the eye for detail, lines,
            composition, symmetry and proportions. For me, it’s about capturing
            the moment, beauty and wonders of our amazing world while being
            creative. It’s such an amazing art.
          </h3>
        </Grid>
      </Grid>
    </Grid>
  );
}
