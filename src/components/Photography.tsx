import {useState, useLayoutEffect, useRef} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {hoverable} from '../styles/Styles'

const thumbnailRows = [
    'DSC09761_p_thumbnail.jpg',
    'DSC00470_l_thumbnail.jpg',
    'DSC07683_p_thumbnail.jpg',
    'DSC09894_l_thumbnail.jpg',
    'DSC08898_l_thumbnail.jpg',
    'DSC01822_l_thumbnail.jpg',
    'DSC04253_l_thumbnail.jpg',
    'IMG_1404_l_thumbnail.jpg',
]

type StyleProps = {
    flexRowWidth: number;
}

const useStyles = makeStyles({
    img: {
        borderRadius: '10px',
        ...hoverable,
    },
    landscapeImg: (props: StyleProps) => ({
        width: `${props.flexRowWidth / 2}px`,
        marginBottom: '30px',
    }),
    portraitImg: (props: StyleProps) => ({
        height: `${(props.flexRowWidth / 2) / 1.5}px`,
        marginBottom: '30px',
    }),
    stackedPortraitImg: (props: StyleProps) => ({
        height: `${(props.flexRowWidth / 2) / 1.5 / 2 - 20}px`,
    }),
    stackedRow: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 0,
        justifyContent: 'space-between',
        '& :nth-of-type(2)': {
            marginBottom: '30px',
        }
    }
});

export default function Photography() {
    const flexRowRef = useRef<HTMLDivElement>(null);
    const [flexRowWidth, setWidth] = useState(0);
    const classes = useStyles({flexRowWidth});

    useLayoutEffect(() => {
        setWidth(flexRowRef.current?.offsetWidth || 0);
    }, [flexRowRef])

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center'}}>
            <h1>Photography 📸</h1>
            <h2 style={{paddingTop: 0, paddingBottom: '40px'}} >Some favorite pictures that I took</h2>
            {
                <div
                    ref={flexRowRef}
                    id='flexRow1'
                    style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '40px'}}
                >
                    <a href={assetLink(thumbnailRows[0])} target='_blank' rel="noreferrer" ><img className={`${classes.img} ${classes.portraitImg}`} src={assetThumbnailLink(thumbnailRows[0])} alt={thumbnailRows[0]} /> </a>
                    <a href={assetLink(thumbnailRows[1])} target='_blank' rel="noreferrer" ><img className={`${classes.img} ${classes.landscapeImg}`} src={assetThumbnailLink(thumbnailRows[1])} alt={thumbnailRows[1]} /> </a>
                    <a href={assetLink(thumbnailRows[2])} target='_blank' rel="noreferrer" ><img className={`${classes.img} ${classes.portraitImg}`} src={assetThumbnailLink(thumbnailRows[2])} alt={thumbnailRows[2]} /> </a>
                    <a href={assetLink(thumbnailRows[3])} target='_blank' rel="noreferrer" ><img className={`${classes.img} ${classes.landscapeImg}`} src={assetThumbnailLink(thumbnailRows[3])} alt={thumbnailRows[3]} /> </a>
                    <div className={classes.stackedRow} >
                        <a href={assetLink(thumbnailRows[4])} target='_blank' rel="noreferrer" ><img className={`${classes.img} ${classes.stackedPortraitImg}`} src={assetThumbnailLink(thumbnailRows[4])} alt={thumbnailRows[4]} /> </a>
                        <a href={assetLink(thumbnailRows[5])} target='_blank' rel="noreferrer" ><img className={`${classes.img} ${classes.stackedPortraitImg}`} src={assetThumbnailLink(thumbnailRows[5])} alt={thumbnailRows[5]} /> </a>
                    </div>
                    <div className={classes.stackedRow} >
                        <a href={assetLink(thumbnailRows[6])} target='_blank' rel="noreferrer" ><img className={`${classes.img} ${classes.stackedPortraitImg}`} src={assetThumbnailLink(thumbnailRows[6])} alt={thumbnailRows[6]} /> </a>
                        <a href={assetLink(thumbnailRows[7])} target='_blank' rel="noreferrer" ><img className={`${classes.img} ${classes.stackedPortraitImg}`} src={assetThumbnailLink(thumbnailRows[7])} alt={thumbnailRows[7]} /> </a>
                    </div>
                </div>
            }
        </div>
    )
}

function assetThumbnailLink(assetName: string) {
    Boolean()
    return require(`../assets/photography/${assetName}`).default;
}

function assetLink(assetName: string) {
    return require(`../assets/photography/${assetName.replace('_thumbnail', '')}`).default;
}
