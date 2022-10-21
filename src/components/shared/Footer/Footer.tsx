import { Icon } from '@iconify/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary-main px-5 pt-20 pb-10 text-white md:px-10 lg:p-20 lg:pb-5">
      <div className="container flex w-full flex-col gap-20">
        <div className="flex w-full flex-col justify-between gap-10 md:gap-20 lg:flex-row lg:gap-20">
          <div className="order-2 flex flex-1 flex-col gap-3 lg:order-1">
            <h3 className="font-garamond text-2xl font-semibold md:text-3xl">
              Get in touch
            </h3>

            <span>
              Are you interested in working with us? Reach out to us via email:
            </span>

            <a
              href="mailto:deuslaroi@yahoo.com"
              className="font-garamond text-xl font-semibold hover:underline"
            >
              deuslaroi@yahoo.com
            </a>
          </div>

          <div className="order-3 flex flex-1 flex-col gap-3 lg:order-2">
            <h3 className="font-garamond text-2xl font-semibold md:text-3xl">
              Social Media
            </h3>

            <div className="flex items-center gap-5">
              <a
                href=""
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white duration-500 hover:-rotate-6 hover:scale-125 hover:bg-white lg:h-12 lg:w-12"
              >
                <Icon
                  icon="cib:facebook-f"
                  className="text-xl duration-500 group-hover:text-primary-main md:text-2xl"
                />
              </a>

              <a
                href=""
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white duration-500 hover:-rotate-6 hover:scale-125 hover:bg-white lg:h-12 lg:w-12"
              >
                <Icon
                  icon="akar-icons:twitter-fill"
                  className="text-xl duration-500 group-hover:text-primary-main md:text-2xl"
                />
              </a>

              <a
                href=""
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white duration-500 hover:-rotate-6 hover:scale-125 hover:bg-white lg:h-12 lg:w-12"
              >
                <Icon
                  icon="akar-icons:linkedin-box-fill"
                  className="text-xl duration-500 group-hover:text-primary-main md:text-2xl"
                />
              </a>

              <a
                href=""
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white duration-500 hover:-rotate-6 hover:scale-125 hover:bg-white lg:h-12 lg:w-12"
              >
                <Icon
                  icon="akar-icons:instagram-fill"
                  className="text-xl duration-500 group-hover:text-primary-main md:text-2xl"
                />
              </a>
            </div>
          </div>

          <div className="order-1 flex-1 lg:order-3">
            <h1 className="max-w-[15ch] font-garamond text-3xl font-semibold md:text-5xl">
              Deus ‘La Roi Limited
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 border-t border-white pt-3 text-sm md:flex-row md:items-center md:text-base">
          <span>© 2022 De ‘La Roi Limited. All Rights Reserved</span>

          <Link href="/privacy-policy">
            <a href="">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
