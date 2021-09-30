/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { motion, useMotionValue } from 'framer-motion';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@material-ui/core';
import { bordersVariant } from './photography/variants';
import { GALLERY } from './photography/gallery';
import { hoverable, imgBase } from '../styles/StyledComponentsStyles';
import useBreakPoint from '../hooks/useBreakPoint';

const iPhoneX = '375px';

/* We are scrolling virtually in the outer container.
Due to `position: sticky; top: 0;` of the InnerContainer,
it looks like InnerContainer is pinned during scrolling.
*/
const OuterContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InnerContainer = styled(motion.div)`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Section = styled.section<{ upMd: boolean; bgColor: string }>`
  padding-bottom: ${({ upMd }) => (upMd ? '15vw' : 0)};
  background-color: ${({ bgColor }) => bgColor};
`;

const Gallery = styled(motion.ul)`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  width: max-content;
  user-select: none;
  padding: 0px 7.5vw 0px 7.5vw;
  list-style-type: none;
  will-change: transform;
  cursor: default;

  @media only screen and (max-width: ${iPhoneX}) {
    padding: 0px 15vw;
  }
`;

const GalleryTitle = styled.h1`
  font-style: italic;
  font-size: 64px;
  color: white;

  @media only screen and (max-width: ${iPhoneX}) {
    font-size: 54px;
  }
`;

const GalleryImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${imgBase}
  ${hoverable}
`;

const GalleryItem = styled.li`
  height: 70%;
  width: 35vw;
  min-height: 500px;
  max-height: 700px;
  min-width: 370px;
  max-width: 450px;

  @media only screen and (max-width: ${iPhoneX}) {
    height: 60%;
    width: 75vw;
    min-height: initial;
    max-height: initial;
    min-width: initial;
    max-width: initial;
  }

  &:not(:last-of-type) {
    margin-right: 3.5vw;

    @media only screen and (max-width: ${iPhoneX}) {
      margin-right: 6vw;
    }
  }

  &:nth-child(even) {
    transform: translateY(25px);

    @media only screen and (max-width: ${iPhoneX}) {
      transform: translateY(50px);
    }

    ${GalleryTitle} {
      transform: translateX(10%) translateY(-120%);
    }
  }

  &:nth-child(odd) {
    transform: translateY(-50px);

    @media only screen and (max-width: ${iPhoneX}) {
      transform: translateY(-30px);
    }

    ${GalleryTitle} {
      transform: translateX(10%) translateY(-120%);
    }
  }
`;

const Heading = styled(motion.div)`
  padding: 7.5vw 7.5vw 0 7.5vw;
`;

export default function Photography() {
  const theme = useTheme();
  const upMd = useBreakPoint('up', 'md');
  const [virtualHeight, setVirtualHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  // `| null` is needed to be able to assign ref.current manually
  // https://stackoverflow.com/questions/58017215/what-typescript-type-do-i-use-with-useref-hook-when-setting-current-manually
  const galleryRef = useRef<HTMLUListElement | null>(null);

  const [inViewRef, inView] = useInView({ threshold: 0.2 });

  const yMotionValue = useMotionValue(0);

  useEffect(() => {
    // even though we see a horizontal scroll (width-direction),
    // browser is actually tracking the scrollY movement continously,
    // since we are scrolling on the y-axis.
    // Henc, a virtual height needs to be set, which is the width
    // of the gallery but without the viewport-width (does not
    // need to be scrolled, since it's already fully in view) but
    // with the viewport-height (the actual hight of the DOM-element)
    const calcVirtualHeight = (galleryWidth: number) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const newVirtualHeight = galleryWidth - vw + vh;
      return newVirtualHeight;
    };

    const calcAndSetVirtualHeight = (ref: RefObject<HTMLUListElement>) => {
      const galleryWidth = ref.current?.scrollWidth || 0;
      const newVirtualHeight = calcVirtualHeight(galleryWidth);
      setVirtualHeight(newVirtualHeight);
    };

    const trackScroll = (ref: RefObject<HTMLDivElement>) => {
      const offsetTopToYMotionVal = () => {
        if (ref && ref.current) {
          const offsetTop = -ref.current.offsetTop;
          yMotionValue.set(offsetTop);
        }
      };
      window.addEventListener('scroll', offsetTopToYMotionVal);
    };

    const resizeHandler = () => {
      calcAndSetVirtualHeight(galleryRef);
    };

    calcAndSetVirtualHeight(galleryRef);
    window.addEventListener('resize', resizeHandler);
    trackScroll(containerRef);
  }, [yMotionValue]);

  function assetThumbnailLink(assetName: string) {
    return require(`../assets/photography/${assetName}`).default;
  }

  function assetLink(assetName: string) {
    return require(`../assets/photography/${assetName.replace(
      '_thumbnail',
      ''
    )}`).default;
  }

  // Use `useCallback` so we don't recreate the function
  // on each render - Could result in infinite loop
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      galleryRef.current = node;
      // Callback refs, like the one from `useInView`,
      // is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <Section id='photography' upMd={upMd} bgColor={theme.palette.primary.dark}>
      <Heading>
        <h1>Favorite Pictures 📸</h1>
        <h3>
          Front End Development is a very creative process. Same is true for
          photography. It is an art which naturally complements eye for detail,
          lines, composition, symmetry and proportions. For me, it’s about
          capturing the moment, beauty and wonders of our amazing world while
          being creative.
        </h3>
        <h3>
          Photography and Front End Development both being a real craft both
          require a lot of practice, dedication and passion. I find it
          fascinating and infinitely rewarding to look back at own works and see
          actual progress in skilled craftmanship.
        </h3>
        <h3>Here are some of my favorite pictures that I took.</h3>
      </Heading>
      <OuterContainer style={{ height: virtualHeight }}>
        <InnerContainer
          variants={bordersVariant}
          initial='none'
          animate={inView ? 'solid' : 'none'}
          ref={containerRef}
        >
          <Gallery ref={setRefs} style={{ x: yMotionValue }}>
            {GALLERY.map((imgData) => (
              <GalleryItem key={imgData.id}>
                <a
                  href={assetLink(imgData.thumbnailSrc)}
                  target='_blank'
                  rel='noreferrer'
                >
                  <GalleryImage
                    style={{
                      backgroundImage: `url(${assetThumbnailLink(
                        imgData.thumbnailSrc
                      )})`,
                    }}
                  />
                </a>
                <GalleryTitle>{imgData.title}</GalleryTitle>
              </GalleryItem>
            ))}
          </Gallery>
        </InnerContainer>
      </OuterContainer>
    </Section>
  );
}
