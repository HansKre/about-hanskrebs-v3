import styled from 'styled-components';
import { ReactNode } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useBreakPoint from '../../hooks/useBreakPoint';

const StyledSection = styled.section<{
  upSm: boolean;
  downXl: boolean;
  bgColor: string;
}>`
  min-height: ${({ downXl }) => downXl && '100vh'};
  column-count: ${({ upSm }) => (upSm ? 2 : 1)};
  column-gap: 7.5vw;
  padding: ${({ upSm }) =>
    upSm ? '7.5vw 7.5vw 7.5vw 7.5vw' : '10% 16px 7.5vw 32px'};
  background-color: ${({ bgColor }) => bgColor};
  z-index: 1;
`;

interface Props {
  id: string;
  children: ReactNode;
}
export default function Section({ id, children }: Props) {
  const theme = useTheme();
  const upSm = useBreakPoint('up', 'sm');
  const downXl = useBreakPoint('down', 'xl');
  return (
    <StyledSection
      upSm={upSm}
      downXl={downXl}
      bgColor={theme.palette.primary.dark}
      id={id}
    >
      {children}
    </StyledSection>
  );
}
