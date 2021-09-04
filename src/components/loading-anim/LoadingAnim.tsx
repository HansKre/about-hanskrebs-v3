import {makeStyles} from '@material-ui/core/styles';
import './LoadingAnim.css'

type StyleProps = {
    absolute: boolean;
    top: string | undefined;
    left: string | undefined;
};

const useStyles = makeStyles({
    absolute: {
        position: 'absolute',
        zIndex: 100,
        top: ({top}) => top ? top : '',
        left: ({left}) => left ? left : '',
    },
    background: (props: StyleProps) => ({
        '&.roller div:after': {
            background: props.absolute ? 'rgb(102, 31, 31)' : '#fff'
        }
    })
});

export default function LoadingAnim(props: {absolute?: boolean; top?: string; left?: string;}) {
    const classes = useStyles({
        absolute: props.absolute || false,
        top: props.top,
        left: props.left
    });
    return (
        <div className={`roller ${props.absolute && classes.absolute} ${classes.background}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
