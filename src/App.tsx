import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './styles/Theme';
import LandingPage from './layouts/LandingPage';
import About from './layouts/About';
import Contact from './layouts/Contact';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <LandingPage />
      <About />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
