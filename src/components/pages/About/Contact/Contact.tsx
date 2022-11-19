import { Icon } from '@iconify/react';
import Link from 'next/link';

import Button from '@/components/lib/Button';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section
      className={`icon-patter-bg grid w-full place-items-center px-5 py-20 lg:px-10 lg:py-32 ${styles.contact}`}
    >
      <div className="container grid h-full w-full grid-cols-1 place-items-center gap-5 md:gap-14 lg:grid-cols-2 lg:gap-32">
        <div className="hidden lg:block" />
        <div className="mx-auto flex flex-col items-center gap-10 text-center text-white md:max-w-[550px] lg:max-w-none lg:items-start lg:text-left">
          <h3 className="font-garamond text-2xl font-medium text-white lg:text-3xl">
            You don’t have to play the blame game between battling professionals
            and contractors with one point of contact.
          </h3>

          <p className="lg:text-lg lg:leading-loose">
            Our meticulousness shows that you are one call away to the only
            responsible party that prevents you from getting involved where you
            lack deep expertise. This makes for a more professionalized,
            efficient and streamlined process to ensure timely delivery of your
            project, and at the right price.
          </p>

          <Link href="/contact">
            <Button>
              <div className="flex items-center gap-3">
                <span>Let’s talk about your project</span>
                <Icon icon="charm:chevron-right" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
