import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import {SocialIcon} from 'react-social-icons';
import {hoverable} from '../styles/Styles';

const useStyles = makeStyles({
    hoverableSocial: {
        ...hoverable,
        "&:hover": {
            transform: 'scale(1.15)',
        },
    },
    button: {
        backgroundColor: '#2d2c30',
        border: 'none',
        borderRadius: '10px',
        color: 'white',
        width: '100%',
        cursor: 'pointer',
    },
});

export default function Contact() {
    const classes = useStyles();
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}} >
            <h1>Let's Build Something Together 👋</h1>
            <Grid container>
                <Grid item container direction='column' xs={12} >
                    <h2 style={{color: "#48484a"}}>Feel free to reach me out if you're looking for a developer, have a question, or just want to connect.</h2>
                </Grid>
                <Grid item container direction='column' xs={12} style={{marginTop: '2em'}}>
                    {/* <h2 style={{color: "#48484a"}}>Social Networks</h2> */}
                    <div style={{display: 'flex', flex: 1}}>
                        <div style={{flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '4rem'}}>
                            <SocialIcon style={{height: '2.4em', width: '2.4em'}} className={`${classes.hoverableSocial}`} url="https://github.com/hanskre" target="_blank" rel="noopener noreferrer" />
                            <SocialIcon style={{height: '2.4em', width: '2.4em'}} className={`${classes.hoverableSocial}`} url="https://www.linkedin.com/in/hans-krebs-63b35034/" target="_blank" rel="noopener noreferrer" />
                            <SocialIcon style={{height: '2.4em', width: '2.4em'}} className={`${classes.hoverableSocial}`} url="https://www.instagram.com/hanso711/" target="_blank" rel="noopener noreferrer" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
