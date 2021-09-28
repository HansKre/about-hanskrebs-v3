import Grid from '@material-ui/core/Grid';
import Section from './contact/Section';
import MailToButton from './contact/MailToButton';
import SocialIcons from './contact/SocialIcons';

export default function Contact() {
  return (
    <Section id='contact'>
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
    </Section>
  );
}
