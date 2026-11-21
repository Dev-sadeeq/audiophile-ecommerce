import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <section className="bg-Dark py-16">
        <section className="mx-auto px-6 sm:px-8 md:px-12 lg:px-24 xl:px-70">
          <div className="flex flex-col items-center gap-y-6 md:items-start md:gap-y-2 lg:flex-row lg:justify-between lg:items-center">
            <div className="mb-8 md:mb-0">
              <Link to="/">
                <img src="/assets/shared/desktop/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="text-white flex flex-col gap-y-6 items-center md:flex-row ">
              <Link to="/" className="hover:text-hover-color font-bold">
                HOME
              </Link>
              <Link
                to="/headphones"
                className="p-6 hover:text-hover-color font-bold"
              >
                HEADPHONES
              </Link>
              <Link
                to="/speakers"
                className="p-6 hover:text-hover-color font-bold"
              >
                SPEAKERS
              </Link>
              <Link
                to="/earphones"
                className="p-6 hover:text-hover-color font-bold"
              >
                EARPHONES
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-y-6 mt-10 space-y-7 md:items-start md:mt-7">
            <div className="">
              <p className="text-gray-400 leading-9 md:leading-normal text-center md:text-left lg:w-[50%]">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
            </div>

            <div className="flex flex-col items-center md:flex-row md:justify-between md:w-full md:mt-8">
              <div className="flex gap-4 order-2 lg:-mt-64">
                <Link>
                  <img src="/assets/shared/desktop/icon-facebook.svg" alt="" />
                </Link>
                <Link>
                  <img src="/assets/shared/desktop/icon-twitter.svg" alt="" />
                </Link>
                <Link>
                  <img
                    src="/assets/shared/desktop/icon-instagram.svg"
                    alt=""
                  />
                </Link>
              </div>

              <div className="mb-10 md:mb-0 order-1">
                <p className="text-gray-400 text-center">
                  Copyright 2026. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
