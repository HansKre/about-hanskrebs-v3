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
          style={{height: '100%'}}
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
            padding: '6rem',
          }}>
            <h1>Welcome</h1>
            <h2>I'm a h2-heading.</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet provident, inventore obcaecati iusto soluta quasi alias consequuntur, nobis asperiores tempora mollitia dolorem quae, veniam nulla. Dolore officia aperiam fugit nobis!</h3>
            <p>hans@hanskrebs.me</p>
            <button>Subscribe</button>
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
