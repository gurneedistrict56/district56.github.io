import { FC, ReactNode, createElement, useContext } from 'react';
import { motion } from 'framer-motion';
import { PAGE_ANIMATION_DURATION } from '../app/config';
import AppContext from '../app/AppContext';
import usePrefersReducedMotion from '../utility/usePrefersReducedMotion';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface Props {
  className?: string
  items: {
    key?: string
    tag?: Tag
    className?: string
    content: ReactNode
  }[]
  itemDuration?: number
  direction?: 'vertical' | 'horizontal'
  durationBetweenItems?: number
  disabled?: boolean
}

const motionElement = (tag?: Tag) => {
  switch (tag) {
  case 'h1':  return motion.h1;
  case 'h2':  return motion.h2;
  case 'h3':  return motion.h3;
  case 'h4':  return motion.h4;
  case 'h5':  return motion.h5;
  case 'h6':  return motion.h6;
  case 'p':   return motion.p;
  default:    return motion.div;
  }
};

const AnimatedItems: FC<Props> = ({
  className,
  items,
  itemDuration = PAGE_ANIMATION_DURATION,
  direction = 'vertical',
  durationBetweenItems = 0.1,
  disabled,
}) => {
  const { hasLoaded } = useContext(AppContext);

  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldDisableMotion = disabled || !hasLoaded || prefersReducedMotion;

  return <motion.div
    className={className}
    initial={shouldDisableMotion ? false : 'hidden'}
    animate="show"
    variants={{
      show: {
        transition: {
          staggerChildren: durationBetweenItems,
        },
      },
    }}
  >
    {items.map(({ key, className, tag, content }, index) =>
      createElement(
        motionElement(tag),
        {
          key: key ?? index,
          className,
          variants: {
            hidden: {
              opacity: 0,
              ...direction === 'horizontal'
                ? { translateX: -20 }
                : { translateY: -20 },
            },
            show: {
              opacity: 1,
              ...direction === 'horizontal'
                ? { translateX: 0 }
                : { translateY: 0 },
              transition: {
                duration: itemDuration,
                easings: ['easeIn'],
              },
            },
          },
        },
        content,
      ))}
  </motion.div>;
};

export default AnimatedItems;
