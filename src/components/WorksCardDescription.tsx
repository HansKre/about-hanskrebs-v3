import { IconButton, useTheme } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import useWindowSize from '../hooks/useWindowResize';
import { ImgSides } from './WorksCardImg';

type Props = {
  imgSide: keyof typeof ImgSides;
};

const handleClick = () => {
  // TODO: open in new tab
};

function Buttons() {
  return (
    <div>
      <IconButton onClick={handleClick}>
        <GitHubIcon color='primary' style={{ fontSize: '30px' }} />
      </IconButton>
      <IconButton onClick={handleClick}>
        <OpenInNewIcon color='primary' style={{ fontSize: '30px' }} />
      </IconButton>
    </div>
  );
}

export default function WorksCardDescription(props: Props) {
  const { imgSide } = props;
  const theme = useTheme();
  const { width: windowWidth } = useWindowSize();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '0 1 100%',
        height: '100%',
        justifyContent: 'center',
        padding:
          ImgSides[imgSide] === ImgSides.left
            ? '0 4vw 0 7.5vw'
            : '0 7.5vw 0 4vw',
      }}
    >
      <h2 style={{ color: theme.palette.primary.main }}>
        Order Summary Component
      </h2>
      <h3 style={{ color: theme.palette.primary.main, paddingTop: 0 }}>
        My goal was to implement a design pixel-perfectly with only an image of
        it and the font-family given. Result was this beautiful and reuseable
        order summary component.
      </h3>
      <h3 style={{ color: theme.palette.primary.main }}>
        <b>
          What I learned: estimate distance between UI elements, positioning and
          aligning items with CSS, improved my eye for detail
        </b>
      </h3>
      <h3 style={{ color: theme.palette.primary.contrastText }}>
        <i>React.js | Material-ui | CSS | Netlify</i>
      </h3>
      {windowWidth >= theme.breakpoints.values.sm && <Buttons />}
    </div>
  );
}
