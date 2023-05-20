"use client";
import Link from "next/link";
import React from "react";

const SubscriptionBanner: React.FC = (): JSX.Element => {
  return (
    <div>
      <ul className="relative z-10 mx-auto mt-10 grid max-w-screen-2xl grid-cols-1 gap-4 px-4 max-lg:grid-rows-3 sm:mt-16 lg:grid-cols-3 lg:px-6">
        <li className="flex h-full flex-col gap-8 rounded-2xl bg-dark-layer-01 bg-opacity-70 pt-6">
          <div className="px-4">
            <p className="text-utility-label-01 text-dark-text-strong">
              Лучший выбор для семьи
            </p>
            <h5 className="mt-2 text-fluid-sm-heading-06 text-dark-text-strong md:text-fluid-md-heading-06 lg:text-fluid-lg-heading-06 xl:text-fluid-xl-heading-06 2xl:text-fluid-2xl-heading-06">
              Telekom
            </h5>
          </div>
          <ul className="flex flex-col gap-4 px-4">
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z" />
              </svg>
              Неограниченное количество пользователей
            </li>
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z" />
              </svg>
              Работает на любом устройстве
            </li>
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z" />
              </svg>
              Высокая скорость
            </li>
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z" />
              </svg>
              Работает только в сети Telekom
            </li>
          </ul>
          <div className="mt-auto w-full p-4">
            <Link
              href={"https://belet.com.tm/film-connect"}
              className="inline-flex  items-center px-4  font-sans text-body-compact-01 rounded-lg ring-inset  focus:ring-1 focus:ring-offset-2 normal-case disabled:text-light-text-disabled  gap-2 disabled:cursor-not-allowed disabled:pointer-events-none ring-light-focus-inset ring-offset-light-focus-border disabled:bg-light-button-disabled theme-dark:ring-dark-focus-inset theme-dark:ring-offset-dark-focus-border theme-dark:disabled:bg-dark-button-disabled text-light-text-on-color bg-light-button-secondary hover:bg-[rgb(51,51,58)] active:bg-light-button-secondary-active disabled:text-light-text-disabled disabled:bg-light-button-disabled theme-dark:text-dark-text-on-color theme-dark:bg-dark-button-secondary theme-dark:hover:bg-dark-button-secondary-hover theme-dark:active:bg-dark-button-secondary-active theme-dark:disabled:text-dark-text-disabled theme-dark:disabled:bg-dark-button-disabled py-[0.9375rem] justify-between w-full theme-dark"
            >
              Инструкция подключения{" "}
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
            </Link>
          </div>
        </li>
        <li
          className="flex h-full flex-col gap-8 rounded-2xl pt-6"
          style={{
            background:
              "linear-gradient(72.94deg, rgba(15, 98, 254, 0.7) 0%, rgba(138, 63, 252, 0.7) 100%)",
          }}
        >
          <div className="px-4">
            <p className="text-utility-label-01 text-dark-text-strong">
              Лучший выбор для индивидуального пользования
            </p>
            <h5 className="mt-2 text-fluid-sm-heading-06 text-dark-text-strong md:text-fluid-md-heading-06 lg:text-fluid-lg-heading-06 xl:text-fluid-xl-heading-06 2xl:text-fluid-2xl-heading-06">
              Individual
            </h5>
          </div>
          <ul className="flex flex-col gap-4 px-4">
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z" />
              </svg>
              Работает в любых сетях
            </li>
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z" />
              </svg>
              Работает на любом устройстве
            </li>
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z" />
              </svg>
              Высокая скорость
            </li>
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z" />
              </svg>
              Ограничение в два устройства для одновременного просмотра
            </li>
          </ul>
          <p className="px-4 text-utility-helper-text-01 text-dark-text-strong">
            Можно подключить с помошью Belet Gift Cards, Банковской карты, а
            также через приложение Saray и Chapar.
          </p>
          <div className="w-full p-4">
            <Link
              href="tel:+99312750208"
              className="inline-flex  items-center px-4  font-sans text-body-compact-01 rounded-lg ring-inset  focus:ring-1 focus:ring-offset-2 normal-case disabled:text-light-text-disabled  gap-2 disabled:cursor-not-allowed disabled:pointer-events-none ring-light-focus-inset ring-offset-light-focus-border disabled:bg-light-button-disabled theme-dark:ring-dark-focus-inset theme-dark:ring-offset-dark-focus-border theme-dark:disabled:bg-dark-button-disabled text-light-text-on-color bg-light-button-primary hover:bg-[rgb(0,79,193)] active:bg-light-button-primary-active disabled:text-light-text-disabled disabled:bg-light-button-disabled theme-dark:text-dark-text-on-color theme-dark:bg-dark-button-primary theme-dark:hover:bg-dark-button-primary-hover theme-dark:active:bg-dark-button-primary-active theme-dark:disabled:text-dark-text-disabled theme-dark:disabled:bg-dark-button-disabled py-[0.9375rem] justify-between w-full theme-dark"
            >
              Узнайте как поключить{" "}
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
            </Link>
          </div>
        </li>
        <li className="flex h-full flex-col gap-8 rounded-2xl bg-dark-layer-01 bg-opacity-70 pt-6">
          <div className="px-4">
            <p className="text-utility-label-01 text-dark-text-strong">
              Лучший выбор для Android TV
            </p>
            <h5 className="mt-2 text-fluid-sm-heading-06 text-dark-text-strong md:text-fluid-md-heading-06 lg:text-fluid-lg-heading-06 xl:text-fluid-xl-heading-06 2xl:text-fluid-2xl-heading-06">
              AGTS
            </h5>
          </div>
          <ul className="flex flex-col gap-4 px-4">
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z" />
              </svg>
              Лучший пользовательский опыт на Android TV
            </li>
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z" />
              </svg>
              Скорость до 100 Mb/s
            </li>
            <li className="flex gap-2 fill-dark-text-strong text-body-compact-01 text-dark-text-strong [&>svg]:mt-px">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={16}
                height={16}
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z" />
              </svg>
              Работает только в сети AGTS IP
            </li>
          </ul>
          <div className="mt-auto w-full p-4">
            <Link
              href={
                "https://belet.com.tm/news/how-to-activate-the-belet-film-service-through-ashts-iptv"
              }
              className="inline-flex  items-center px-4  font-sans text-body-compact-01 rounded-lg ring-inset  focus:ring-1 focus:ring-offset-2 normal-case disabled:text-light-text-disabled  gap-2 disabled:cursor-not-allowed disabled:pointer-events-none ring-light-focus-inset ring-offset-light-focus-border disabled:bg-light-button-disabled theme-dark:ring-dark-focus-inset theme-dark:ring-offset-dark-focus-border theme-dark:disabled:bg-dark-button-disabled text-light-text-on-color bg-light-button-secondary hover:bg-[rgb(51,51,58)] active:bg-light-button-secondary-active disabled:text-light-text-disabled disabled:bg-light-button-disabled theme-dark:text-dark-text-on-color theme-dark:bg-dark-button-secondary theme-dark:hover:bg-dark-button-secondary-hover theme-dark:active:bg-dark-button-secondary-active theme-dark:disabled:text-dark-text-disabled theme-dark:disabled:bg-dark-button-disabled py-[0.9375rem] justify-between w-full theme-dark"
            >
              Инструкция подключения{" "}
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
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SubscriptionBanner;
