import { motion } from 'framer-motion';
import type { FC } from 'react';

import styles from './Hero.module.scss';
import type HeroProps from './Hero.props';

const textVariant = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Hero: FC<HeroProps> = ({ image, title }) => {
  return (
    <header
      className={`${styles.hero} relative grid w-full place-items-center px-5 py-3 lg:px-10`}
      style={{
        backgroundImage: image ? `url('${image}')` : 'none',
      }}
    >
      <div
        className={`${styles.glass_overlay} absolute top-0 left-0 z-10 h-full w-full`}
      />

      <figure className={`absolute top-0 left-0 z-10 h-full w-full opacity-20`}>
        <img
          src="/assets/images/glass.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="container z-20 flex w-full justify-center py-10 md:py-28 lg:justify-start lg:py-32">
        <motion.h1
          variants={textVariant}
          initial="initial"
          animate="animate"
          className="max-w-[18ch] text-center font-garamond  text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-left"
        >
          {title}
        </motion.h1>
      </div>
    </header>
  );
};

export default Hero;
