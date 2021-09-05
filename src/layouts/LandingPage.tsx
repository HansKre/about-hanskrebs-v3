import {Grid} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import mainLogo from '../assets/main-logo-400x400.png';
import Burger from '../components/Burger';
import useWindowSize from '../hooks/useWindowResize';

const useStyles = makeStyles({
    fullVh: {
        height: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden', /* hide overflow of padding-bottom for large content */
    },
    topHalf: {
        height: '40vh',
        maxHeight: '40vh',
        overflow: 'hidden', /* hide overflow of padding-bottom for large content */
    },
    bottomHalf: {
        height: '60vh',
        maxHeight: '60vh',
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
    const {width: windowWidth} = useWindowSize();

    return (
        <Grid container >
            <Grid
                item
                container
                justifyContent='center'
                alignItems='center'
                xs={12}
                sm={6}
                className={windowWidth && windowWidth >= theme.breakpoints.values.sm ? classes.fullVh : classes.topHalf} /* when stacked, this produces 2 * 100vh, when in row it's 1 * 100vh */
            >
                <img
                    src={mainLogo}
                    alt={mainLogo}
                    style={{
                        width: windowWidth && windowWidth >= theme.breakpoints.values.sm ? '25rem' : '40vh',
                        height: windowWidth && windowWidth >= theme.breakpoints.values.sm ? '25rem' : '40vh',
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
                className={windowWidth && windowWidth >= theme.breakpoints.values.sm ? classes.fullVh : classes.bottomHalf}
                style={{
                    backgroundColor: windowWidth && windowWidth >= theme.breakpoints.values.sm
                        ? theme.palette.primary.main
                        // : theme.palette.secondary.main,
                        : theme.palette.primary.main,
                }}
            >
                <nav
                    style={{
                        position: 'absolute',
                        top: 0,
                        width: windowWidth && windowWidth >= theme.breakpoints.values.sm ? '50vw' : '100vw',
                        display: 'flex',
                        placeContent: windowWidth && windowWidth >= theme.breakpoints.values.md
                            ? 'center space-between'
                            : 'center flex-end',
                        alignItems: 'center',
                        padding: windowWidth && windowWidth >= theme.breakpoints.values.sm ? '1vw 7.5% 0 7.5%' : '1vw 15% 0 15%',
                    }}
                >
                    {windowWidth && windowWidth >= theme.breakpoints.values.md
                        ? <>
                            <a href="http://" target="_blank" rel="noopener noreferrer">ABOUT</a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">WORKS</a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">PHOTOGRAPHY</a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">CONTACT</a>
                        </>
                        : <Burger />
                    }
                </nav>
                <div style={{
                    display: 'flex',
                    flex: '1 1 100%',
                    flexDirection: 'column',
                    padding: windowWidth && windowWidth >= theme.breakpoints.values.sm ? '15%' : '0 15% 0', /* don't use vw to avoid padding-overflow! */
                    ...(windowWidth && windowWidth < theme.breakpoints.values.sm && {
                        height: '100%',
                        justifyContent: 'center',
                    }),
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
