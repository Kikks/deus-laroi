import { Icon } from '@iconify/react';
import Link from 'next/link';

import Button from '@/components/lib/Button';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section
      className={`icon-patter-bg grid max-h-[900px] w-full place-items-center px-5 py-20 lg:h-[80vh] lg:p-10 ${styles.contact}`}
    >
      <div className="container mt-10 grid h-full w-full grid-cols-1 place-items-center gap-14 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col items-center gap-14 text-center text-white lg:items-start lg:text-left">
          <h3 className="relative font-garamond text-lg font-semibold uppercase before:absolute before:left-[50%] before:top-10 before:h-1 before:w-14 before:translate-x-[-50%] before:rounded-md before:bg-primary-main md:text-xl lg:before:left-[15%]">
            Let&apos;s Get Started
          </h3>

          <h1 className="max-w-[20ch] font-garamond text-3xl font-semibold md:text-5xl">
            Are you ready to create something exceptional?
          </h1>

          <span>Contact Deus ‘La Roi Limited for your construction needs</span>
        </div>

        <Link href="/contact">
          <Button>
            <div className="flex items-center gap-3">
              <span>Let’s talk about your project</span>
              <Icon icon="charm:chevron-right" />
            </div>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
