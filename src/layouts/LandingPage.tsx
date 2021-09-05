import {Grid} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import mainLogo from '../assets/main-logo-400x400.png';

const useStyles = makeStyles({
    fullVh: {
        height: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden', /* hide overflow of padding-bottom for large content */
    },
});

/**
 * Flexbox layout with full viewport height and width.
 * Layout provides two separate containers.
 * On desktop, those are next to each other.
 * Below `sm`-breakpoint, the containers are
 * stacked with 100vh-height and 100% of width.
 */
export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container >
            <Grid
                item
                container
                justifyContent='center'
                alignItems='center'
                xs={12}
                sm={6}
                className={classes.fullVh} /* when stacked, this produces 2 * 100vh, when in row it's 1 * 100vh */
            >
                <img
                    src={mainLogo}
                    alt={mainLogo}
                    style={{
                        width: '25rem',
                        height: '25rem',
                        position: 'relative',
                        top: '-0.25vw', /* visually align with welcome-text on the right */
                    }} />
            </Grid>
            <Grid
                item
                container
                justifyContent='center'
                alignItems='center'
                xs={12}
                sm={6}
                className={classes.fullVh}
                style={{
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '7.5vw',
                }}>
                    <h1>
                        Hello there 👋, <span>I'm Hans.</span>
                    </h1>
                    <h1 style={{marginTop: 0}}>
                        <span>Front End <i><label>Developer</label></i>,</span> Software Architect, and Photographer.
                    </h1>
                    <h2>
                        Welcome To My About Me Page!
                    </h2>
                </div>
            </Grid>
        </Grid>
    )
}
