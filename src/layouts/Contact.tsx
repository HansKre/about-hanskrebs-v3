import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import { hoverable } from '../styles/Styles';
import useWindowSize from '../hooks/useWindowResize';
import MailToButton from './contact/MailToButton';

const useStyles = makeStyles({
  hoverableSocial: {
    ...hoverable,
    '&:hover': {
      transform: 'scale(1.15)',
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
    <section
      id='contact'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: upMd ? '7.5vw 15vw' : '7.5vw',
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <h1>Let’s Build Something Together 🤝</h1>
      <Grid container>
        <Grid item container direction='column' xs={12}>
          <h3 style={{ paddingTop: 0 }}>
            Feel free to reach me out if you’re looking for a developer, have a
            question, or just want to connect.
          </h3>
          <MailToButton />
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
    </section>
  );
}
