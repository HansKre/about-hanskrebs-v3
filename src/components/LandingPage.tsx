import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles';
// import useBreakPoint from '../hooks/useBreakPoint';
import hansImgMobile from '../assets/IMG_9921_matte_look_avatar.jpeg'

const SPLIT = 65;

const useStyles = makeStyles({
    fullWidth: {
        width: '100%',
    },
    left: {
        flex: `0 1 ${SPLIT}%`,
    },
    right: {
        flex: `0 1 calc(100% - ${SPLIT}%)`,
        paddingRight: '40px',
    },
});

export default function LandingPage() {
    const classes = useStyles();
    /* 
        useMediaQuery does seem to return true on initial load,
        only to return false immediately later. This causes
        both background ressources to load (on large screens),
        as well as a rerender when downPhone changes.
        // FIXME: investigate further and fix
    */
    // const downPhone = !useBreakPoint('up', 'phone');
    const downPhone = window.matchMedia('(max-width: 765px)').matches;
    return (
        <>
            {downPhone
                ? <>
                    <div style={{
                        backgroundColor: 'white', height: '30vh', width: '100%',
                        position: 'absolute', top: 0
                    }} ></div>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <div style={{backgroundImage: `url(${hansImgMobile})`, boxShadow: '0 0 15px 15px #48484a inset', backgroundSize: 'cover', borderRadius: '50%'}}>
                            <img style={{filter: 'opacity(0%)', width: '80vw'}} src={hansImgMobile} alt="Hans" />
                        </div>
                        <h1 style={{color: 'white'}} >I'm Hans </h1>
                        <h2 style={{paddingBottom: '60px', marginLeft: '30px', marginRight: '30px', textAlign: 'center'}}>Welcome To My About Me Page!</h2>
                    </Grid>
                </>
                : <Grid container >
                    <Grid item className={classes.left}>
                        {/* empty space filler */}
                    </Grid>
                    <Grid item className={classes.right} container justifyContent="center" direction="column" >
                        <h3 >Hello 👋</h3>
                        <h1 >I'm Hans </h1>
                        <h2>Welcome To My About Me Page!</h2>
                    </Grid>
                </Grid>
            }
        </>
    )
}
