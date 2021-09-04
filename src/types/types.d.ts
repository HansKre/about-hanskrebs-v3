import {CreateCSSProperties, PropsFunc} from '@material-ui/styles/withStyles'
export type CSSStyle = React.CSSProperties | CreateCSSProperties<{}> | PropsFunc<{}, CreateCSSProperties<{}>>;