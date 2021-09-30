/* eslint-disable react/jsx-props-no-spreading */
import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import WorksCardDescription from './WorksCardDescription';
import WorksCardImg, { ImgSides } from './WorksCardImg';
import WorksCardTitle from './WorksCardTitle';
import useBreakPoint from '../hooks/useBreakPoint';

type ImgProps = {
  src: string;
  srcFallback: string;
  placeholder: string;
  placeholderFallback: string;
};

type DescriptionProps = {
  title: string;
  github: string;
};

type Props = {
  marginTop?: string;
  marginBottom?: string;
  zIndex?: number;
  imgSide: keyof typeof ImgSides;
  backgroundColor?: string;
  background?: string;
  href: string;
  imgProps: ImgProps;
  descriptionProps: DescriptionProps;
  children: ReactNode;
  featuredContent?: ReactNode;
};

/**
 * Returns 'column' on xs-devices,
 * otherwise 'row' to show image on
 * the left or 'row-reverse' to show
 * image on the right.
 */
function flexDirection(downSm: boolean, imgSide: keyof typeof ImgSides) {
  if (downSm) {
    return 'column';
  }
  if (ImgSides[imgSide] === ImgSides.left) {
    return 'row';
  }
  if (ImgSides[imgSide] === ImgSides.right) {
    return 'row-reverse';
  }
  throw new Error('Invalide value provided for: imgSide.');
}

const useStyles = makeStyles({
  paper: ({
    marginTop,
    marginBottom,
    zIndex,
    imgSide,
    upMd,
    downSm,
    downXs,
  }: {
    marginTop: string | undefined;
    marginBottom: string | undefined;
    zIndex: number | undefined;
    imgSide: keyof typeof ImgSides;
    upMd: boolean;
    downSm: boolean;
    downXs: boolean;
  }) => ({
    display: 'flex',
    zIndex: zIndex || 0 + 1,
    flexDirection: flexDirection(downSm, imgSide),
    width: upMd ? '80vw' : '100%',
    marginTop: `calc(48px + ${marginTop || '0px'})`,
    marginBottom: `calc(56px + ${marginBottom || '0px'})`,
    borderRadius: '20px',
    ...(ImgSides[imgSide] === ImgSides.left && {
      position: 'relative',
      ...(!downXs && { right: '-25px' }),
    }),
  }),
});

export default function WorksCard(props: Props & Record<string, any>) {
  // eslint-disable-next-line object-curly-newline
  const {
    marginTop,
    marginBottom,
    imgSide,
    backgroundColor,
    background,
    href,
    imgProps,
    descriptionProps,
    children,
    featuredContent,
    zIndex,
  } = props;

  const upMd = useBreakPoint('up', 'md');
  const downSm = useBreakPoint('down', 'sm');
  const downXs = useBreakPoint('down', 'xs');
  const classes = useStyles({
    marginTop,
    marginBottom,
    zIndex,
    imgSide,
    upMd,
    downSm,
    downXs,
  });

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0 7.5vw',
        justifyContent: 'center',
        ...(backgroundColor && { backgroundColor }),
        ...(background && { background }),
        zIndex,
      }}
    >
      <Paper elevation={12} className={classes.paper}>
        {downSm && <WorksCardTitle title={descriptionProps.title} />}
        <WorksCardImg imgSide={imgSide} {...imgProps} href={href} />
        <WorksCardDescription
          imgSide={imgSide}
          {...descriptionProps}
          href={href}
        >
          {children}
        </WorksCardDescription>
      </Paper>
      {!downSm && featuredContent}
    </div>
  );
}
