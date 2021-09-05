import {createTheme} from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

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