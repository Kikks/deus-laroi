import { Icon } from '@iconify/react';
import Link from 'next/link';

import Button from '@/components/lib/Button';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section
      className={`grid w-full place-items-center px-5 py-20 lg:px-10 lg:py-32 ${styles.contact}`}
    >
      <div className="container grid h-full w-full grid-cols-1 place-items-center gap-5 md:gap-14 lg:grid-cols-2 lg:gap-32">
        <div className="hidden lg:block" />
        <div className="mx-auto flex flex-col items-center gap-10 text-center text-white md:max-w-[550px] lg:max-w-none lg:items-start lg:text-left">
          <h3 className="font-garamond text-2xl font-medium text-white lg:text-3xl">
            Whatever it is you are looking for; construction, renovation,
            expansion, or advice, De ‘La Roi is at your service.
          </h3>

          <p className="lg:text-lg lg:leading-loose">
            De ‘La Roi Limited is ready to serve you with the very best for your
            project. Maximum satisfaction is what you’ll gain from De ‘La Roi.
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
