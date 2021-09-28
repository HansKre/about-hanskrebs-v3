import { ReactNode } from 'react';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core';
import useBreakPoint from '../../hooks/useBreakPoint';

const StyledSection = styled.section<{ upMd: boolean; bgColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: ${({ upMd }) => (upMd ? '7.5vw 15vw' : '7.5vw')};
  background-color: ${({ bgColor }) => bgColor};
`;

interface Props {
  id: string;
  children: ReactNode;
}

export default function Section({ id, children }: Props) {
  const theme = useTheme();
  const upMd = useBreakPoint('up', 'md');

  return (
    <StyledSection id={id} upMd={upMd} bgColor={theme.palette.primary.main}>
      {children}
    </StyledSection>
  );
}
