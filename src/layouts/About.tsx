import {Grid} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import heroImg from '../assets/IMG_9921_matte_look_1440.jpeg';
import heroImgMobile from '../assets/IMG_9921_matte_look_avatar.jpeg';
import useWindowSize from '../hooks/useWindowResize';

const useStyles = makeStyles({
    fullVh: {
        height: '50vh',
        maxHeight: '50vh',
        minHeight: '50vh',
        overflow: 'hidden',
    },
    fullVhColumns: {
        height: '50vh',
        minHeight: '50vh',
    },
    halfVh: {
        height: '25vh',
        maxHeight: '25vh',
        minHeight: '25vh',
        overflow: 'hidden',
    },
});

export default function About() {
    const classes = useStyles();
    let {width: windowWidth} = useWindowSize();
    const theme = useTheme();

    function ResponsiveImg() {
        const imgResponsiveStyle = () => {
            if (windowWidth >= theme.breakpoints.values.avatar) {
                return {
                    width: '100vw',
                    top: '-13.5vw',
                }
            } else {
                return {
                    height: '100%',
                    borderRadius: '50%',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                }
            }
        }
        const imgLink = windowWidth >= theme.breakpoints.values.avatar ? heroImg : heroImgMobile;
        return <img
            src={imgLink}
            alt={imgLink}
            style={{
                position: 'relative',
                ...imgResponsiveStyle(),
            }} />
    }
    return (
        <Grid container direction='column' >
            {/* ROW 1 */}
            <Grid
                item
                container
                justifyContent={windowWidth >= theme.breakpoints.values.avatar ? 'flex-start' : 'center'}
                xs={12}
                className={classes.fullVh}
            >
                <ResponsiveImg />
            </Grid>
            {/* ROW 2 */}
            <Grid
                item
                container
                justifyContent='center'
                alignItems='center'
                xs={12}
                className={classes.fullVhColumns}
                style={{
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                {/* TOP | LEFT container */}
                <Grid
                    item
                    container
                    direction='column'
                    xs={12}
                    sm={6}
                    className={windowWidth >= theme.breakpoints.values.sm ? classes.fullVhColumns : classes.halfVh}
                    style={{
                        height: '100%',
                        padding: windowWidth >= theme.breakpoints.values.sm
                            ? '7.5vw 7.5vw 1vw 7.5vw'
                            : '10% 15% 1vw 15%',
                        flexWrap: 'nowrap',
                    }}>
                    <h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptates nostrum sit deleniti molestias magnam, minima harum temporibus nam ullam?
                    </h3>
                    <h3>
                        Besides programming, I enjoy photography 📸, cycling 🚴‍♂️, good wine 🍷 and being outdoor 🌿.
                    </h3>
                </Grid>
                {/* BOTTOM | RIGHT container */}
                <Grid
                    item
                    container
                    direction='column'
                    xs={12}
                    sm={6}
                    className={windowWidth >= theme.breakpoints.values.sm ? classes.fullVhColumns : classes.halfVh}
                    style={{
                        height: '100%',
                        padding: windowWidth >= theme.breakpoints.values.sm
                            ? '7.5vw 7.5vw 1vw 7.5vw'
                            : '1vw 15% 1vw 15%',
                        flexWrap: 'nowrap',
                    }}>
                    <h3>
                        <i><label>Photography</label></i> naturally complements the eye for detail, lines, composition and proportions.
                        For me, it's about capturing the moment, beauty and wonders of our amazing world while being creative.
                        It's such an amazing art.
                    </h3>
                    <h3>Please feel free to explore some of my works on this page.</h3>
                </Grid>
            </Grid>
        </Grid>
    )
}
