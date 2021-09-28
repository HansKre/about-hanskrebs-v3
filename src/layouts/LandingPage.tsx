import useScale from '../hooks/useScale';
import FadeInOnMount from '../animations/FadeInOnMount';
import CurtainsUp from '../animations/CurtainsUp';
import GridContainer from '../styled-components/GridContainer';
import LogoContainer from './landing-page/LogoContainer';
import GreetingContainer from './landing-page/GreetingContainer';

export default function LandingPage() {
  const scale = useScale({ scaleTo: 1.5, clamp: true });

  return (
    <section id='landingpage'>
      <FadeInOnMount>
        <GridContainer container overFlowHidden>
          <CurtainsUp />
          <LogoContainer scale={scale} />
          <GreetingContainer scale={scale} />
        </GridContainer>
      </FadeInOnMount>
    </section>
  );
}
