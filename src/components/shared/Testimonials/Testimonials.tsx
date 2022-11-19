import Carousel from 're-carousel';
import { useState } from 'react';

import SetIndicator from '@/components/lib/SetIndicator';

import { testimonials } from './data';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={`icon-pattern-bg grid max-h-[900px] w-full place-items-center px-5 pt-20 pb-5 lg:h-[100vh] lg:p-10 ${styles.testimonials}`}
    >
      <div className="container grid place-items-center gap-10 md:gap-16">
        <h3 className="relative text-center font-garamond text-lg font-bold uppercase text-tertiary-main before:absolute before:left-[50%] before:top-10 before:h-1 before:w-14 before:translate-x-[-50%] before:rounded-md before:bg-secondary-dark md:text-xl">
          Testimonial
        </h3>

        <div className="relative grid w-full place-items-center gap-5 lg:gap-10">
          <figure className="absolute left-[5%] top-2 aspect-square w-[15vw] max-w-[100px] md:top-5 md:left-[8%] md:w-[30vw] lg:left-[25%]">
            <img
              src="/assets/icons/DoubleQuote.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </figure>

          <div className="h-[350px] w-full md:h-[450px]">
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
              frames={testimonials.map((testimonial, index) => (
                <div
                  className="grid h-full w-full place-items-center"
                  key={index}
                >
                  <figure className="z-10 h-20 w-20 overflow-hidden rounded-full md:h-28 md:w-28">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </figure>

                  <div className="-mt-16 grid min-h-[250px] w-[80vw] max-w-[640px] place-content-center place-items-center gap-5 rounded-lg bg-white px-5 pt-16 pb-10 text-center shadow-lg shadow-gray-200 md:-mt-20 md:min-h-[320px] md:gap-10 md:p-10 lg:px-24">
                    <div>
                      <h3 className="font-garamond text-xl font-medium text-tertiary-main">
                        {`${testimonial.name}${
                          testimonial.position && `, ${testimonial.position}`
                        }`}
                      </h3>
                      <span className="font-semibold text-[#c7c7c7]">
                        {testimonial.company}
                      </span>
                    </div>

                    <p className="text-sm md:text-base">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              ))}
            />
          </div>

          <div className="flex gap-2">
            {Array.from(Array(testimonials.length).keys()).map((item) => (
              <button
                onClick={() => setActiveIndex(item)}
                className={`h-2 w-2 rounded-full ${
                  activeIndex === item ? 'bg-secondary-dark' : 'bg-[#d8d8d8]'
                }`}
                key={item}
              />
            ))}
          </div>
        </div>

        <div className="-mt-20 flex w-full items-center justify-end gap-3 text-sm font-medium text-secondary-dark">
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

export default Testimonials;
