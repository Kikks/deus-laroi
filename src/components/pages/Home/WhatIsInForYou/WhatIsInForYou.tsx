import { features } from './data';
import styles from './WhatIsInForYou.module.scss';

const WhatIsInForYou = () => {
  return (
    <section
      className={`grid w-full place-items-center bg-secondary-light px-5 pt-20 pb-5 md:max-h-[900px] lg:h-[100vh] lg:p-10 ${styles.section}`}
    >
      <div className="container grid w-full place-items-center gap-10">
        <h3 className="relative text-center font-garamond text-lg font-bold uppercase text-tertiary-main before:absolute before:left-[50%] before:top-10 before:h-1 before:w-14 before:translate-x-[-50%] before:rounded-md before:bg-primary-main md:text-xl">
          What Is In For You?
        </h3>

        <p className="max-w-[60ch] text-center">
          We mix efficiency, professionalism and meticulousness in order to give
          our clients that high level satisfaction.
        </p>

        <div className="grid w-full grid-cols-1 place-content-center place-items-center gap-10 md:grid-cols-3 md:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex aspect-[385/487] w-full max-w-[300px] flex-col items-center justify-center gap-10 rounded-xl bg-white px-5 py-10 text-center shadow-md shadow-gray-500/25 duration-300 hover:scale-105 hover:shadow-lg md:max-w-[350px]"
            >
              <figure className="mt-5 aspect-square w-[30%]">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-full w-full object-contain"
                />
              </figure>

              <div className="flex flex-col gap-2">
                <h3 className="font-garamond text-2xl font-semibold md:text-xl  lg:text-3xl">
                  {feature.title}
                </h3>

                <p className="min-h-[100px] md:text-sm lg:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsInForYou;
