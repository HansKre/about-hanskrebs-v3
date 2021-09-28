import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import { Grid, useTheme } from '@material-ui/core';
import { easeInOut } from '../../styles/StyledComponentsStyles';

const HoverableSocialIcon = styled(SocialIcon)`
  ${easeInOut}
  &:hover {
    transform: scale(1.15);
  }
`;

export default function SocialIcons() {
  const theme = useTheme();
  return (
    <Grid
      item
      container
      direction='column'
      xs={12}
      style={{ marginTop: '2em' }}
    >
      <div style={{ display: 'flex', flex: 1 }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <HoverableSocialIcon
            bgColor={theme.palette.secondary.light}
            url='https://github.com/hanskre'
            target='_blank'
            rel='noopener noreferrer'
          />
          <HoverableSocialIcon
            url='https://www.linkedin.com/in/hans-krebs-63b35034/'
            target='_blank'
            rel='noopener noreferrer'
          />
          <HoverableSocialIcon
            url='https://www.instagram.com/hanso711/'
            target='_blank'
            rel='noopener noreferrer'
          />
        </div>
      </div>
    </Grid>
  );
}
