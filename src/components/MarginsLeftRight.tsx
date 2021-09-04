import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    margins: {
        marginLeft: "70px",
        marginRight: "70px",
    },
    fullHeightAndWidth: {
        height: '100%',
        width: '100%',
    }
});

export default function MarginsLeftRight(props: {children: React.ReactNode}) {
    const classes = useStyles();
    return (
        <div className={`${classes.margins} ${classes.fullHeightAndWidth}`}>{props.children}</div>
    )
}
