import React, { ReactNode } from 'react';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { ImgSides } from './WorksCardImg';
import useBreakPoint from '../hooks/useBreakPoint';
import WorksCardTitle from './WorksCardTitle';

type Props = {
  title: string;
  imgSide: keyof typeof ImgSides;
  href: string;
  github: string;
  children: ReactNode;
};

const handleClick = (url: string) => {
  if (url) {
    window.open(url, '_blank');
  }
};

export default function WorksCardDescription(props: Props) {
  const { imgSide, title, href, github, children } = props;
  const downSm = useBreakPoint('down', 'sm');
  const upSm = useBreakPoint('up', 'sm');

  function Buttons() {
    return (
      <div>
        <IconButton onClick={() => handleClick(github)}>
          <GitHubIcon color='primary' style={{ fontSize: '30px' }} />
        </IconButton>
        <IconButton onClick={() => handleClick(href)}>
          <OpenInNewIcon color='primary' style={{ fontSize: '30px' }} />
        </IconButton>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '0 1 100%',
        height: '100%',
        justifyContent: 'center',
        padding:
          ImgSides[imgSide] === ImgSides.left
            ? '0 4vw 0 7.5vw'
            : '0 7.5vw 0 4vw',
      }}
    >
      {!downSm && <WorksCardTitle title={title} />}
      {children}
      {upSm && <Buttons />}
    </div>
  );
}
