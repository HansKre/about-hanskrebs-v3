import { useTransform, useViewportScroll } from 'framer-motion';
import { useState } from 'react';

interface Props {
  scaleTo: number;
  clamp: boolean;
}

export default function useScale({ scaleTo, clamp }: Props) {
  const [scale, setScale] = useState(1);
  const { scrollY } = useViewportScroll();

  const transformedScrollY = useTransform(
    scrollY,
    [0, window.innerHeight],
    [1, scaleTo],
    {
      clamp,
    }
  );

  transformedScrollY.onChange(() => setScale(transformedScrollY.get()));

  return scale;
}
