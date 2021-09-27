import { ReactNode } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

interface Props {
  children: ReactNode;
}

export default function FadeInOnMount({ children }: Props) {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, window.innerHeight], [1, 0.6], {
    clamp: true,
  });
  return (
    <motion.div
      style={{
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
}
