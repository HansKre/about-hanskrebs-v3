import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ProgressiveImage from 'react-progressive-image';
import LoadingAnim from './loading-anim/LoadingAnim';


type Props = {
    backgroundColor: string;
    children?: React.ReactNode;
    backgroundImg?: string;
    height?: string;
}

type StyleProps = {
    backgroundColor: string;
    backgroundImg: string;
    height: string;
}

const useStyles = makeStyles((theme) => ({
    fullHeight: {
        height: (props: StyleProps) => props.height
    },
    background: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('avatar')]: {
            backgroundImage: (props: StyleProps) => {
                if (props.backgroundImg)
                    return `url(${props.backgroundImg})`;
                return 'unset';
            },
            backgroundPosition: '13% 0', // shift left a bit
        },
        backgroundColor: (props: StyleProps) => props.backgroundColor,
    },
}));

export default function FullHeightWrapper(props: Props) {
    const {backgroundColor, backgroundImg, height, children} = props;
    const classes = useStyles({
        backgroundColor,
        backgroundImg: backgroundImg || '',
        height: height || "100vh",
    });

    return <>
        {(backgroundImg)
            ? <ProgressiveImage src={backgroundImg || ''} placeholder={''}>
                {(src: string | undefined, loading: boolean) => (
                    <>
                        {loading ? <LoadingBackground /> : <FullSizeBackground />}
                    </>
                )}
            </ProgressiveImage>
            : <FullSizeBackground />
        }
    </>

    function FullSizeBackground() {
        return <Grid container justifyContent="center" alignItems="center" className={`${classes.fullHeight} ${classes.background}`}>
            {children}
        </Grid>;
    }

    function LoadingBackground() {
        return <Grid style={{backgroundColor: 'black'}} container justifyContent="center" alignItems="center" className={`${classes.fullHeight}`}>
            <LoadingAnim />
        </Grid>;
    }
}