import HeroImg from './about/HeroImg';
import Description from './about/Description';
import Section from './about/Section';

export default function About() {
  return (
    <Section id='about'>
      <h1
        style={{
          marginTop: 0,
        }}
      >
        About Me 😎
      </h1>
      <Description />
      <HeroImg />
    </Section>
  );
}
