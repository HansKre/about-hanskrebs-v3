import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

/* Left for reference purpose */
export const MAIN_PALETTE = [
  'rgb(12, 18, 72)',
  'rgb(178, 178, 178)',
  'rgb(208, 55, 55)',
  'rgb(247, 247, 247)',
  'rgb(255, 255, 255)',
];

export enum MainPalette {
  darkBlue = 'rgb(12, 18, 72)',
  lightBlue = 'rgb(0, 43, 92)',
  darkRed = 'rgb(198, 12, 56)',
  deprecatedRed = 'rgb(208, 55, 55)',
  grey = 'rgb(178, 178, 178)',
  silver = 'rgb(178, 183, 187)',
  lightGrey = 'rgb(247, 247, 247)',
  white = 'rgb(255, 255, 255)',
}

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
      dark: MainPalette.darkBlue,
      main: MainPalette.lightBlue,
      light: MainPalette.grey,
      contrastText: MainPalette.darkRed,
    },
    secondary: {
      main: MainPalette.white,
      light: MainPalette.lightGrey,
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
