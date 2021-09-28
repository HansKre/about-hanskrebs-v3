import { motion } from 'framer-motion';
import { curtainsUp } from '../styles/AnimationVariants';

export default function CurtainsUp() {
  return (
    <motion.div
      variants={curtainsUp}
      initial='expanded'
      animate='shrunk'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        transformOrigin: 'top',
        pointerEvents: 'none',
        backgroundColor: 'black',
        zIndex: 2,
      }}
    />
  );
}
