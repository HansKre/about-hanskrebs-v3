import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Theme from '../styles/Theme';

type Limit = 'up' | 'down' | 'between' | 'only';

function useBreakPoint(
  limit: Limit,
  start: Breakpoint,
  end?: Breakpoint,
  theme?: typeof Theme
): boolean {
  const contextTheme = useTheme();
  return useMediaQuery(
    (theme || contextTheme).breakpoints[limit](start, end || start)
  );
}

export default useBreakPoint;
