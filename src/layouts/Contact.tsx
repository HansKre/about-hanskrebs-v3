import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core';
import MailToButton from './contact/MailToButton';
import useBreakPoint from '../hooks/useBreakPoint';
import SocialIcons from './contact/SocialIcons';

export default function Contact() {
  const theme = useTheme();
  const upMd = useBreakPoint('up', 'md');

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
        <SocialIcons />
      </Grid>
    </section>
  );
}
