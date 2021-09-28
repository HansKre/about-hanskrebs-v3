import { useTheme } from '@material-ui/core/styles';
import useWindowWidth from '../hooks/useWindowWidth';
import HeroImg from '../components/HeroImg';
import useBreakPoint from '../hooks/useBreakPoint';

export default function About() {
  const windowWidth = useWindowWidth();
  const theme = useTheme();
  const upSm = windowWidth >= theme.breakpoints.values.sm;
  const downXl = useBreakPoint('down', 'xl');

  return (
    <section
      id='about'
      style={{
        ...(downXl && { minHeight: '100vh' }),
        columnCount: upSm ? 2 : 1,
        columnGap: '7.5vw',
        padding: upSm ? '7.5vw 7.5vw 7.5vw 7.5vw' : '10% 16px 7.5vw 32px',
        backgroundColor: theme.palette.primary.dark,
        zIndex: 1,
      }}
    >
      <h1
        style={{
          marginTop: 0,
        }}
      >
        About Me 😎
      </h1>
      <h3>
        Hi there! I’m Hans. I’m a passionate person who loves building things
        with code.
      </h3>
      <h3>
        My first experience with programming was when I was 12, but it didn’t
        last long: I learned Delphi, which is a dialect of Object Pascal
        programming language and even created a couple of smaller applications
        like a math exercise program. I lost my free time when Blizzard released
        Diablo, though 😬
      </h3>
      <h3>
        Years later, I decided to try learning Objective-C to help out in a
        project that I was working on. It was a radically different experience
        and I distinctly remember that it started clicking for me and I was
        programming every moment of my free time again.
      </h3>
      <h3>
        Since then, I completed a degree in computer science and found my true
        passion in Front End Development and Software Architecture. I love
        honing my skills to constantly get better in Javascript, Typescript, CSS
        and React. Seeing my projects improve with the level of my skills gives
        me great pleasure and feels super rewarding to me.
      </h3>
      <h3>
        Besides programming, I enjoy photography 📸, cycling 🚴‍♂️, good wine 🍷
        and being outdoor 🌿.
      </h3>
      <h3>
        Photography naturally complements eye for detail, lines, composition,
        symmetry and proportions. For me, it’s about capturing the moment,
        beauty and wonders of our amazing world while being creative. It’s such
        an amazing art.
      </h3>
      <HeroImg />
    </section>
  );
}
