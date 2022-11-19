import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Button from '@/components/lib/Button';
import { AppConfig } from '@/utils/AppConfig';

import styles from './Header.module.scss';

const contentVariant = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const Header = () => {
  return (
    <header
      className={`${styles.header} grid w-full place-items-center px-5 py-3 md:py-5 lg:min-h-[85vh] lg:px-10`}
    >
      <div className="container flex h-full w-full items-center py-20 text-[#f2f0f0]">
        <motion.div
          variants={contentVariant}
          initial="initial"
          animate="animate"
          className="mx-auto flex flex-col items-center gap-5 px-10 text-center md:px-0 lg:mx-0 lg:items-start lg:text-left"
        >
          <motion.h3
            variants={textVariant}
            className="font-garamond text-2xl font-semibold"
          >
            {AppConfig.title}
          </motion.h3>

          <motion.h1
            variants={textVariant}
            className="max-w-[18ch] font-garamond text-4xl font-semibold md:text-5xl"
          >
            Where Dreams Are Established.
          </motion.h1>

          <motion.span
            variants={textVariant}
            className="my-5 text-base md:max-w-[45ch]"
          >
            We believe in being proactive to the needs of our clients at all
            times, and putting in place the resources in providing quality
            sevices in achieving the best possible result.
          </motion.span>

          <motion.div variants={textVariant} className="hidden md:block">
            <Link href="/contact">
              <Button>
                <div className="flex items-center gap-3">
                  <span>Let’s talk about your project</span>
                  <Icon icon="charm:chevron-right" />
                </div>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
