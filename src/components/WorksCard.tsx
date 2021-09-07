/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core';
import useWindowSize from '../hooks/useWindowResize';
import WorksCardDescription from './WorksCardDescription';
import WorksCardImg, { ImgSides } from './WorksCardImg';

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
  imgSide: keyof typeof ImgSides;
  backgroundColor?: string;
  href: string;
  imgProps: ImgProps;
  descriptionProps: DescriptionProps;
  children: ReactNode;
  featuredContent?: ReactNode;
};

export default function WorksCard(props: Props) {
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
  } = props;
  //
  const { width: windowWidth } = useWindowSize();
  const theme = useTheme();
  const upMd = windowWidth >= theme.breakpoints.values.md;
  const downXs = windowWidth < theme.breakpoints.values.xs;
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0 7.5vw',
        justifyContent: 'center',
        backgroundColor,
      }}
    >
      <Paper
        elevation={12}
        style={{
          display: 'flex',
          flexDirection:
            ImgSides[imgSide] === ImgSides.left ? 'row' : 'row-reverse',
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
