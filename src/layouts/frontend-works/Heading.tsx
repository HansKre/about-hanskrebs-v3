import { useTheme } from '@material-ui/core';
import useBreakPoint from '../../hooks/useBreakPoint';

export default function Heading() {
  const theme = useTheme();
  const upMd = useBreakPoint('up', 'md');
  const downXs = useBreakPoint('down', 'xs');
  return (
    <div
      style={{
        display: 'flex',
        padding: downXs ? '0 7.5vw 0vw 7.5vw' : '0 7.5vw 0vw 7.5vw',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          color: theme.palette.primary.main,
          margin: 0,
          width: upMd ? '80vw' : '100%',
        }}
      >
        Some Things I’ve Built 🔮
      </h1>
    </div>
  );
}
