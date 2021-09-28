import { Grid } from '@material-ui/core';
import useBreakPoint from '../../hooks/useBreakPoint';
import Logo from '../../components/Logo.Component';

const fullVh = {
  height: '100vh',
  maxHeight: '100vh',
  overflow: 'hidden',
};

const topHalf = {
  height: '40vh',
  maxHeight: '40vh',
  overflow: 'hidden',
};

export default function LogoContainer({ scale }: { scale: number }) {
  const upSm = useBreakPoint('up', 'sm');
  return (
    <Grid
      item
      container
      xs={12}
      sm={6}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        transform: `scale(${scale})`,
        ...(upSm ? fullVh : topHalf),
      }}
    >
      <Logo />
    </Grid>
  );
}
