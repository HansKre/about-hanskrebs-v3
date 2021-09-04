import CustomTheme from './styles/Theme';
import {Grid, ThemeProvider} from '@material-ui/core';
// import FullHeightWrapper from './components/FullHeightWrapper';
// import LandingPage from './components/LandingPage';
// import hansImg from './assets/IMG_9921_matte_look_1440.jpeg'
// import useBreakPoint from './hooks/useBreakPoint';
// import MarginsLeftRight from './components/MarginsLeftRight';
// import AboutMe from './components/AboutMe';
// import FrontendWorks from './components/FrontendWorks';
// import Photography from './components/Photography';
// import Contact from './components/Contact';
import {makeStyles} from '@material-ui/core/styles';
import mainLogo from './assets/main-logo-400x400.png';

const COLORS = [
  'rgb(12, 18, 72)',
  'rgb(178, 178, 178)',
  'rgb(208, 55, 55)',
  'rgb(247, 247, 247)',
  'rgb(255, 255, 255)',
]

const useStyles = makeStyles({
  fullHeight: {
    height: '100vh',
  },
});

function App() {
  const classes = useStyles();
  // const downPhone = !useBreakPoint('up', 'phone', undefined, CustomTheme);
  return (
    <ThemeProvider theme={CustomTheme}>
      <Grid container className={classes.fullHeight} >
        <Grid
          item
          container
          justifyContent='center'
          alignItems='center'
          xs={12}
          sm={6}
          style={{height: '100%'}} /* when stacked, this produces 2 * 100vh, when in row it's 1 * 100vh */
        >
          <img
            src={mainLogo}
            alt={mainLogo}
            style={{
              width: '25rem',
              height: '25rem'
            }} />
        </Grid>
        <Grid
          item
          container
          justifyContent='center'
          alignItems='center'
          xs={12}
          sm={6}
          style={{
            height: '100%',
            backgroundColor: COLORS[0]
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '7.5vw',
          }}>
            <h1>
              Hello there 👋, <span>I'm Hans</span>
            </h1>
            <h2>
              Welcome To My About Me Page!
            </h2>
            <h3>
              I am a software architect passionate about <i><label>web development</label></i> and <i><label>frontend desgin</label></i>.
            </h3>
            <h3>
              Besides programming, I enjoy photography 📸, cycling 🚴‍♂️, good wine 🍷 and being outdoor 🌿.
            </h3>
            <h3>
              <i><label>Photography</label></i> naturally complements the eye for detail, lines, composition and proportions.
              For me, it's about capturing the moment, beauty and wonders of our amazing world while being creative.
              It's such an amazing art.
            </h3>
            <h3>Please feel free to explore some of my creations on this page.</h3>
          </div>
        </Grid>
      </Grid>
      {/* <FullHeightWrapper backgroundColor="#48484a" backgroundImg={hansImg} height={downPhone ? "100vh" : "100vh"} > */}
      {/* <LandingPage /> */}
      {/* </FullHeightWrapper> */}
      {/* <FullHeightWrapper backgroundColor="white">
        <MarginsLeftRight >
          <AboutMe />
        </MarginsLeftRight>
      </FullHeightWrapper>
      <FullHeightWrapper backgroundColor="#48484a" height={`${window.visualViewport.height * 6.8}px`} >
        <MarginsLeftRight >
          <FrontendWorks />
        </MarginsLeftRight>
      </FullHeightWrapper>
      <FullHeightWrapper backgroundColor="black" height={`${window.visualViewport.height * 1.7}px`}>
        <MarginsLeftRight >
          <Photography />
        </MarginsLeftRight>
      </FullHeightWrapper>
      <FullHeightWrapper backgroundColor="white">
        <MarginsLeftRight >
          <Contact />
        </MarginsLeftRight>
      </FullHeightWrapper> */}
    </ThemeProvider>
  );
}

export default App;
