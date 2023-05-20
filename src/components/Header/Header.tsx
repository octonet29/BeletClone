'use client'
import { useEffect, useState } from "react";
import Slider from "./Slider";
const Header:React.FC = ():JSX.Element => {
  return (
    <div className="min-h-[calc(100vh-var(--header-height)-50px)] w-full bg-dark-background-default">
      <div className="pointer-events-none absolute z-0 h-full w-full opacity-20 after:absolute after:right-0 after:left-0 after:bottom-0 after:z-10 after:h-1/4 after:bg-gradient-to-t after:from-dark-background-default">
        <video
          className="h-full w-full object-cover"
          src="/video.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center px-4 pt-16 md:min-h-[40vh] md:px-8 lg:px-10">
        <h1
          className="w-full text-center text-[2.625rem] leading-[3.125rem] text-[white]
        md:text-[4.25rem] leading-[4.875rem] lg:text-[5.75rem] leading-[6.375rem] xl:text-[7.625rem] leading-[8.125rem] 2xl:text-[9.75rem] font-light"
        >
          Ваш кинотеатр
        </h1>
        <p className="mt-4 w-full text-center  text-base leading-[1.375rem] font-normal text-[white]">
          Более 10 000 фильмов и сериалов в одном месте
        </p>
        <a
          className=" text-base leading-[1.375rem] font-normal text-[#0164dd] inline-flex w-fit items-center text-light-link-enabled hover:text-light-link-hover active:text-light-link-active disabled:text-light-text-disabled text-body-compact-02 no-underline  [&>svg]:ml-2  mt-4 md:mt-6"
          href="https://film.belet.me/"
        >
          Смотреть фильмы
          <svg
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M9.3 3.7L13.1 7.5 1 7.5 1 8.5 13.1 8.5 9.3 12.3 10 13 15 8 10 3z" />
          </svg>
        </a>
      </div>

      <Slider />
    </div>
  );
};

export default Header;
