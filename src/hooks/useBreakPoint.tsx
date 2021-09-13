import { useTheme } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import useWindowSize from './useWindowResize';
import Theme from '../styles/Theme';

type Limit = 'up' | 'down' | 'between' | 'only';

function useBreakPoint(
  limit: Limit,
  start: Breakpoint,
  end?: Breakpoint,
  theme?: typeof Theme
): boolean {
  const contextTheme = useTheme();
  const { width: windowWidth } = useWindowSize();
  if (limit === 'only') {
    return windowWidth === (theme || contextTheme).breakpoints.values[start];
  }
  if (limit === 'up') {
    return windowWidth >= (theme || contextTheme).breakpoints.values[start];
  }
  if (limit === 'down') {
    return windowWidth < (theme || contextTheme).breakpoints.values[start];
  }
  if (limit === 'between' && end) {
    return (
      windowWidth >= (theme || contextTheme).breakpoints.values[start] &&
      windowWidth < (theme || contextTheme).breakpoints.values[end]
    );
  }
  return false;
}

export default useBreakPoint;
