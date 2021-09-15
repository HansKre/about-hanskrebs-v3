import { useTheme } from '@material-ui/core';
import React from 'react';
import useBreakPoint from '../hooks/useBreakPoint';

export default function WorksCardTitle({ title }: { title: string }) {
  const theme = useTheme();
  const downSm = useBreakPoint('down', 'sm');
  return (
    <h2
      style={{
        color: theme.palette.primary.main,
        ...(downSm && { textAlign: 'center' }),
      }}
    >
      {title}
    </h2>
  );
}
