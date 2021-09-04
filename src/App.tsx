import {ThemeProvider} from '@material-ui/core';
import CustomTheme from './styles/Theme';
import LandingPage from './layouts/LandingPage';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
