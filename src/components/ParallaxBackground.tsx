import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(
    scrollY,
    [elementTop, elementTop + window.innerHeight + 1],
    [-120, (-1 * window.innerHeight) / 2],
    {
      clamp: false,
    }
  );

  useLayoutEffect(() => {
    if (ref.current && ref.current.parentElement) {
      const element = ref.current.parentElement;
      setElementTop(element.offsetTop - window.innerHeight);
    }
  }, [ref]);

  return (
    <motion.div
      id='parallax'
      ref={ref}
      style={{
        display: 'flex',
        width: '100%',
        height: '200vh',
        position: 'absolute',
        y,
        // eslint-disable-next-line @typescript-eslint/quotes
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23272727' d='M1136-288V0h1v320h-1v160H-304v-768h1440zM0 0v320h320V0H0zm513 320h320V0H513v320z'/%3E%3Cpath d='M20 0h1v1h-1zM0 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 20h1v1h-1zM0 20h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 40h1v1h-1zM0 40h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 60h1v1h-1zM0 60h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 80h1v1h-1zM0 80h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 100h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 120h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 140h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 160h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 180h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 200h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 220h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 240h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 260h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 280h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM20 300h1v1h-1zm-20 0h1v1H0zm40 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zm20 0h1v1h-1zM300 0h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1zm0 20h1v1h-1z' fill='%23000'/%3E%3Cpath d='M0 0h320v320H0z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  );
}
