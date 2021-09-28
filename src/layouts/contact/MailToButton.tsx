import { useTheme } from '@material-ui/core';
import styled from 'styled-components';
import { easeInOut } from '../../styles/StyledComponentsStyles';

const HoverableButton = styled.button`
  background-color: Transparent;
  border: none;
  cursor: pointer;
  outline: none;
  align-self: flex-start;
  padding: 0;
  ${easeInOut}
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledLink = styled.a<{ textDecorationColor: string }>`
  font-size: inherit;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
  text-decoration-color: ${({ textDecorationColor }) => textDecorationColor};
  &:hover {
    text-decoration: underline 2px;
  }
`;

export default function MailToButton() {
  const theme = useTheme();
  return (
    <HoverableButton type='button'>
      <h3>
        <StyledLink
          textDecorationColor={theme.palette.secondary.main}
          href='mailto:hans@hanskrebs.me'
        >
          hans@hanskrebs.me
        </StyledLink>
      </h3>
    </HoverableButton>
  );
}
