/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
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
  href: string;
  imgProps: ImgProps;
  descriptionProps: DescriptionProps;
  children: ReactNode;
  featuredContent?: ReactNode;
};

export default function WorksCard(props: Props & Record<string, any>) {
  // eslint-disable-next-line object-curly-newline
  const {
    marginTop,
    marginBottom,
    imgSide,
    backgroundColor,
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

  /**
   * Returns 'column' on xs-devices,
   * otherwise 'row' to show image on
   * the left or 'row-reverse' to show
   * image on the right.
   */
  function flexDirection() {
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

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0 7.5vw',
        justifyContent: 'center',
        backgroundColor,
        zIndex,
      }}
    >
      <Paper
        elevation={12}
        style={{
          display: 'flex',
          zIndex: zIndex || 0 + 1,
          flexDirection: flexDirection(),
          width: upMd ? '80vw' : '100%',
          marginTop: `calc(48px + ${marginTop || '0px'})`,
          marginBottom: `calc(56px + ${marginBottom || '0px'})`,
          borderRadius: '20px',
          ...(ImgSides[imgSide] === ImgSides.left && {
            position: 'relative',
            ...(!downXs && { right: '-25px' }),
          }),
        }}
      >
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
      {featuredContent}
    </div>
  );
}
