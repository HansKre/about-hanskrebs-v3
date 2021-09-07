import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const MAIN_THEME_COLORS = [
  'rgb(12, 18, 72)',
  'rgb(178, 178, 178)',
  'rgb(208, 55, 55)',
  'rgb(247, 247, 247)',
  'rgb(255, 255, 255)',
];

/** Material-UI Default Breakpoint Values:
    xs, extra-small: 0px
    sm, small: 600px
    md, medium: 960px
    lg, large: 1280px
    xl, extra-large: 1920px
 */
const breakpoints = createBreakpoints({});
declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    avatar: true;
  }
}

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: MAIN_THEME_COLORS[0],
      light: MAIN_THEME_COLORS[1],
      contrastText: MAIN_THEME_COLORS[2],
    },
    secondary: {
      main: MAIN_THEME_COLORS[4],
      light: MAIN_THEME_COLORS[3],
    },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(),
  },
  // https://material-ui.com/customization/breakpoints/#custom-breakpoints
  breakpoints: {
    values: {
      ...breakpoints.values,
      xs: 500,
      sm: 640,
      md: 900,
      avatar: 716,
    },
  },
});

export default CustomTheme;
