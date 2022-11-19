import { Icon } from '@iconify/react';
import Link from 'next/link';
import Carousel from 're-carousel';
import { useState } from 'react';

import SetIndicator from '@/components/lib/SetIndicator';

import { services } from './data';
import styles from './Services.module.scss';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={`icon-pattern-bg grid w-full place-items-center px-5 pt-20 pb-5 md:max-h-[900px] lg:h-[100vh] lg:p-10 ${styles.section}`}
    >
      <div className="container flex h-[500px] w-full flex-col items-start gap-10 lg:h-[550px] lg:min-h-[70%]">
        <h3 className="relative font-garamond text-lg font-bold uppercase text-tertiary-main before:absolute before:left-[20%] before:top-10 before:h-1 before:w-14 before:translate-x-[-50%] before:rounded-md before:bg-secondary-dark md:text-xl">
          Our Services
        </h3>

        <div className="w-full flex-1">
          <Carousel
            auto
            loop
            interval={10000}
            duration={1000}
            widgets={[
              ({ index }) => (
                <SetIndicator index={index} setActiveIndex={setActiveIndex} />
              ),
            ]}
            frames={services.map((service, index) => (
              <div
                className="grid h-full w-full content-center items-start justify-start justify-items-start gap-5 px-2 md:px-0 lg:gap-7"
                key={index}
              >
                <h1 className="max-w-[24ch] font-garamond text-3xl font-semibold md:text-4xl lg:text-5xl">
                  {service.title}{' '}
                  <span className="text-secondary-dark">
                    {service.highlight}
                  </span>
                  .
                </h1>
                <p className="max-w-[49ch] text-sm md:text-base">
                  {service.description}
                </p>

                <Link href={`/services${service.link}`}>
                  <a
                    href=""
                    className="flex items-end gap-2 font-garamond text-xl text-secondary-dark lg:text-2xl"
                  >
                    Learn more
                    <Icon
                      icon="akar-icons:chevron-right"
                      className="mb-1 text-lg lg:text-xl"
                    />
                  </a>
                </Link>
              </div>
            ))}
          />
        </div>

        <div className="flex w-full justify-center gap-2">
          {Array.from(Array(services.length).keys()).map((item) => (
            <button
              onClick={() => setActiveIndex(item)}
              className={`h-2 w-2 rounded-full ${
                activeIndex === item ? 'bg-secondary-dark' : 'bg-[#d8d8d8]'
              }`}
              key={item}
            />
          ))}
        </div>

        <div className="-mt-10 flex w-full items-center justify-end gap-3 text-sm font-medium text-secondary-dark">
          <span>Swipe</span>
          <figure className="grid aspect-square w-6 place-items-center">
            <img
              src="/assets/icons/RightArrow.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Services;
