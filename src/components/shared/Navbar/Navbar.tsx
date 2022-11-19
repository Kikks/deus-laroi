import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import Button from '@/components/lib/Button';
import { AppConfig } from '@/utils/AppConfig';
import links from '@/utils/constants/links';

import type NavbarProps from './Navbar.prop';

const linksContainerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const linkVariant = {
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

const Navbar: FC<NavbarProps> = ({ onMenuClicked }) => {
  const router = useRouter();

  return (
    <nav className="w-full bg-white px-5 py-3 lg:px-10">
      <div className="container flex items-center justify-between">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <div className="flex cursor-pointer items-center gap-3">
              <figure className="relative aspect-square w-10 lg:w-11">
                <Image
                  layout="fill"
                  src="/assets/images/logo.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </figure>

              <h1 className="hidden font-garamond text-xl font-semibold lg:block">
                {AppConfig.title}
              </h1>
            </div>
          </Link>
        </motion.div>

        <div className="lg:gap-50 hidden items-center gap-10 lg:flex">
          <motion.div
            variants={linksContainerVariant}
            initial="initial"
            animate="animate"
            transition={{ repeat: 20, duration: 20 }}
            className="flex items-center gap-5 lg:gap-10"
          >
            {links.map((item, index) => (
              <motion.div variants={linkVariant} key={index}>
                <Link href={item.url}>
                  <a
                    className={
                      item.url === router.pathname
                        ? 'text-primary-main'
                        : 'text-tertiary-main'
                    }
                  >
                    {item.title}
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
          >
            <Link href="/contact">
              <Button>
                <span>Get in touch</span>
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.button
          initial={{ x: 50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          className="lg:hidden"
          onClick={onMenuClicked}
        >
          <Icon
            icon="heroicons-outline:menu-alt-4"
            className="text-xl text-tertiary-main"
          />
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
