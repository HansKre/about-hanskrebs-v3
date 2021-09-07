import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core';
import useWindowSize from '../hooks/useWindowResize';
import WorksCardDescription from './WorksCardDescription';
import WorksCardImg, { ImgSides } from './WorksCardImg';

type Props = {
  parentWidth: number;
  marginTop: string;
  imgSide: keyof typeof ImgSides;
};

export default function WorksCard(props: Props) {
  const { width: windowWidth } = useWindowSize();
  const theme = useTheme();
  const { parentWidth, marginTop, imgSide } = props;
  return (
    <Paper
      elevation={12}
      style={{
        display: 'flex',
        flexDirection:
          ImgSides[imgSide] === ImgSides.left ? 'row' : 'row-reverse',
        width: windowWidth >= theme.breakpoints.values.md ? '80vw' : '100%',
        marginTop: `calc(48px + ${marginTop})`,
        borderRadius: '20px',
        ...(ImgSides[imgSide] === ImgSides.left && {
          position: 'relative',
          right: '-25px',
        }),
      }}
    >
      <WorksCardImg parentWidth={parentWidth} imgSide={imgSide} />
      <WorksCardDescription imgSide={imgSide} />
    </Paper>
  );
}
