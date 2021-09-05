import {ThemeProvider} from '@material-ui/core';
import CustomTheme from './styles/Theme';
import LandingPage from './layouts/LandingPage';
import About from './layouts/About';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <LandingPage />
      <About />
    </ThemeProvider>
  );
}

export default App;
