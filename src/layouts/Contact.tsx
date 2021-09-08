import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import { hoverable } from '../styles/Styles';
import useWindowSize from '../hooks/useWindowResize';

const useStyles = makeStyles({
  hoverableSocial: {
    ...hoverable,
    '&:hover': {
      transform: 'scale(1.15)',
    },
  },
  hoverableLink: {
    ...hoverable,
    backgroundColor: 'Transparent',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    alignSelf: 'flex-start',
    '&:hover': {
      transform: 'scale(1.10)',
    },
  },
});

export default function Contact() {
  const theme = useTheme();
  const { width: windowWidth } = useWindowSize();
  const upMd = windowWidth >= theme.breakpoints.values.md;
  const classes = useStyles({ upMd });

  function SocialIcons() {
    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <SocialIcon
            bgColor={theme.palette.secondary.light}
            className={`${classes.hoverableSocial}`}
            url='https://github.com/hanskre'
            target='_blank'
            rel='noopener noreferrer'
          />
          <SocialIcon
            className={`${classes.hoverableSocial}`}
            url='https://www.linkedin.com/in/hans-krebs-63b35034/'
            target='_blank'
            rel='noopener noreferrer'
          />
          <SocialIcon
            className={`${classes.hoverableSocial}`}
            url='https://www.instagram.com/hanso711/'
            target='_blank'
            rel='noopener noreferrer'
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: upMd ? '7.5vw 15vw' : '7.5vw',
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <h1 id='contact'>Let’s Build Something Together 👋</h1>
      <Grid container>
        <Grid item container direction='column' xs={12}>
          <h3 style={{ paddingTop: 0 }}>
            Feel free to reach me out if you’re looking for a developer, have a
            question, or just want to connect.
          </h3>
          <button type='button' className={`${classes.hoverableLink}`}>
            <h3>
              <a
                style={{
                  fontSize: 'inherit',
                  textDecoration: 'underline',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '3px',
                  textDecorationColor: theme.palette.secondary.main,
                }}
                href='mailto:hans@hanskrebs.me'
              >
                hans@hanskrebs.me
              </a>
            </h3>
          </button>
        </Grid>
        <Grid
          item
          container
          direction='column'
          xs={12}
          style={{ marginTop: '2em' }}
        >
          <SocialIcons />
        </Grid>
      </Grid>
    </div>
  );
}
