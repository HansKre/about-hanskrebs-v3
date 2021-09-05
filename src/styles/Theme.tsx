import {createTheme} from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const MAIN_THEME_COLORS = [
    'rgb(12, 18, 72)',
    'rgb(178, 178, 178)',
    'rgb(208, 55, 55)',
    'rgb(247, 247, 247)',
    'rgb(255, 255, 255)',
]

const breakpoints = createBreakpoints({});
declare module "@material-ui/core/styles/createBreakpoints" {
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
        },
    },
    // https://material-ui.com/customization/breakpoints/#custom-breakpoints
    breakpoints: {
        values: {
            ...breakpoints.values,
            sm: 640,
            avatar: 716
        },
    },
});

export default CustomTheme;