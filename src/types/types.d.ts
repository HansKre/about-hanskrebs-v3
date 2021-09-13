import { CreateCSSProperties, PropsFunc } from '@material-ui/styles/withStyles';

export type CSSStyle =
  // eslint-disable-next-line no-undef
  | React.CSSProperties
  | CreateCSSProperties<{}>
  | PropsFunc<{}, CreateCSSProperties<{}>>;
