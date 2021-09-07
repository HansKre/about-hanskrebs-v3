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
  parentWidth: number;
  marginTop?: string;
  marginBottom?: string;
  imgSide: keyof typeof ImgSides;
  backgroundColor?: string;
  href: string;
  imgProps: ImgProps;
  descriptionProps: DescriptionProps;
  children: ReactNode;
};

export default function WorksCard(props: Props) {
  // eslint-disable-next-line object-curly-newline
  const {
    parentWidth,
    marginTop,
    marginBottom,
    imgSide,
    backgroundColor,
    href,
    imgProps,
    descriptionProps,
    children,
  } = props;
  //
  const { width: windowWidth } = useWindowSize();
  const theme = useTheme();
  return (
    <div
      style={{
        display: 'flex',
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
          width: windowWidth >= theme.breakpoints.values.md ? '80vw' : '100%',
          marginTop: `calc(48px + ${marginTop})`,
          marginBottom: `calc(56px + ${marginBottom})`,
          borderRadius: '20px',
          ...(ImgSides[imgSide] === ImgSides.left && {
            position: 'relative',
            right: '-25px',
          }),
        }}
      >
        <WorksCardImg
          parentWidth={parentWidth}
          imgSide={imgSide}
          {...imgProps}
          href={href}
        />
        <WorksCardDescription
          imgSide={imgSide}
          {...descriptionProps}
          href={href}
        >
          {children}
        </WorksCardDescription>
      </Paper>
    </div>
  );
}
