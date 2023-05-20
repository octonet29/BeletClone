"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] p-4">
      <nav className="group relative flex justify-center max-sm:w-full max-sm:[&amp;>div]:w-full">
        <div className="relative">
          <div className="flex flex-col gap-0.5 rounded-xl bg-navigation-layer1 p-0.5 backdrop-blur-md max-sm:w-full">
            <div className="flex gap-0.5 max-sm:flex-col">
              <div className="flex items-center  gap-0.5 rounded-[0.625rem] bg-navigation-layer2 p-0.5 pl-3.5 group-data-[menu-open='true']:w-full group-data-[menu-open='true']:justify-between  max-sm:w-full max-sm:justify-between [&amp;>span]:hidden">
                <Link href={"#"}>
                  <svg
                    width="42"
                    height="14"
                    viewBox="0 0 146 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M41.9118 9.64577C44.1337 9.64577 45.9349 7.84456 45.9349 5.62266C45.9349 3.40076 44.1337 1.59955 41.9118 1.59955C39.6899 1.59955 37.8887 3.40076 37.8887 5.62266C37.8887 7.84456 39.6899 9.64577 41.9118 9.64577Z"
                            fill="#EC1846"
                          ></path>
                          <path
                            d="M54.3348 9.64577C56.5567 9.64577 58.3579 7.84456 58.3579 5.62266C58.3579 3.40076 56.5567 1.59955 54.3348 1.59955C52.1129 1.59955 50.3116 3.40076 50.3116 5.62266C50.3116 7.84456 52.1129 9.64577 54.3348 9.64577Z"
                            fill="#00B8F1"
                          ></path>
                          <path
                            d="M66.7609 9.64577C68.9828 9.64577 70.784 7.84456 70.784 5.62266C70.784 3.40076 68.9828 1.59955 66.7609 1.59955C64.539 1.59955 62.7378 3.40076 62.7378 5.62266C62.7378 7.84456 64.539 9.64577 66.7609 9.64577Z"
                            fill="#F89C1C"
                          ></path>
                        </g>
                        <path
                          d="M109.309 14.4787C108.102 14.1899 106.82 14.0407 105.503 14.0407C99.598 14.0407 93.0409 17.0937 89.8062 24.6435C88.025 28.9684 88.1126 34.007 90.0431 38.4649C91.8145 42.5561 94.9357 45.6221 98.8225 47.0951C106.96 50.4498 116.673 47.2378 120.69 39.9346L114.065 36.6512C111.924 40.6581 107.462 41.8196 103.897 41.161C100.575 40.551 96.8726 38.1599 96.4573 33.2835L96.4216 32.865H121.248C121.261 32.7157 121.281 32.5697 121.307 32.4367C121.3 32.2615 121.323 31.9922 121.371 31.7099C122.027 21.2758 115.282 15.8997 109.309 14.4754V14.4787ZM96.8304 27.3948L96.9343 26.9276C97.966 22.3692 102.304 20.3998 105.902 20.562C110.013 20.7113 113.036 23.2192 113.604 26.9568L113.672 27.3981H96.8337L96.8304 27.3948ZM58.6823 14.4787C57.4753 14.1899 56.1938 14.0407 54.8765 14.0407C48.9716 14.0407 42.4146 17.0937 39.1799 24.6435C37.3987 28.9684 37.4863 34.007 39.4168 38.4649C41.1882 42.5561 44.3094 45.6221 48.1962 47.0951C56.3333 50.4498 66.0472 47.2378 70.0638 39.9346L63.4386 36.6512C61.2973 40.6581 56.8362 41.8196 53.2705 41.161C49.9482 40.551 46.2463 38.1599 45.831 33.2835L45.7953 32.865H70.6218C70.6348 32.7157 70.6543 32.5697 70.6802 32.4367C70.6737 32.2615 70.6964 31.9922 70.7451 31.7099C71.4005 21.2758 64.6553 15.8997 58.6823 14.4754V14.4787ZM46.2041 27.3948L46.308 26.9276C47.3397 22.3692 51.6678 20.3998 55.2756 20.562C59.3863 20.7113 62.4101 23.2192 62.9779 26.9568L63.046 27.3981H46.2074L46.2041 27.3948ZM75.8064 47.306H83.8332V-0.00127216H75.8064V47.306ZM26.5493 23.4106L26.2897 23.3198V22.2653L26.5071 22.1615C30.6957 20.1467 33.0025 16.2372 32.678 11.7014C32.3212 6.70499 28.9437 2.48722 24.0738 0.94935C22.3153 0.313439 20.4173 -0.0045166 18.4155 -0.0045166H0V47.2865C0.5256 47.267 1.168 47.2573 1.90124 47.2573C3.19578 47.2573 4.77907 47.2833 6.49538 47.3092C13.1757 47.413 22.3218 47.5558 25.0828 46.3943C31.403 44.6131 34.3392 39.1494 34.469 34.5164C34.6085 29.3804 31.5749 25.1237 26.5525 23.4106H26.5493ZM8.29604 7.35388H18.0132C20.0799 7.35388 21.728 7.95735 22.9155 9.14482C24.7519 10.952 25.2223 13.541 24.1452 15.8965C23.0842 18.2065 20.8228 19.6276 18.2857 19.6276C18.104 19.6276 17.9158 19.6211 17.7276 19.6049H8.29604V7.35388ZM25.6246 35.9115C24.5053 38.3286 22.1336 39.7691 19.3466 39.7691C19.1455 39.7691 18.9443 39.7626 18.7367 39.7464H8.29604V26.6226H18.4836C20.9916 26.6226 22.922 27.2585 24.2198 28.5109C26.2508 30.5679 26.7861 33.4035 25.6246 35.9147V35.9115ZM143.771 40.152C141.993 41.1383 139.183 41.1318 137.915 39.5712C136.841 38.4746 136.718 36.9367 136.685 35.4605V21.9214H144.744V15.1697H136.685V5.10224H128.658V15.173H122.883V21.9247H128.658V37.0438C128.658 40.71 129.68 43.5716 131.698 45.541C135.209 49.1261 141.474 49.0223 146 47.0756L143.771 40.1552V40.152Z"
                          fill="#FFFFFF"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </Link>
                <div>
                  <button
                    onClick={toggleOpen}
                    className="inline-flex border-none font-sans text-body-compact-01 shadow-none rounded-lg ring-inset ring-light-focus-inset ring-offset-light-focus-border disabled:bg-light-button-disabled theme-dark:ring-dark-focus-inset theme-dark:ring-offset-dark-focus-border theme-dark:disabled:bg-dark-button-disabled focus:ring-1 focus:ring-offset-2  normal-case [&amp;.disabled:text-light-text-disabled [&amp;.disabled:bg-light-button-disabled disabled:cursor-not-allowed text-light-text-subtle hover:text-light-text-strong active:text-light-text-strong bg-transparent hover:bg-[rgb(51,51,58)] active:bg-light-button-ghost-active disabled:bg-transparent disabled:text-light-text-disabled theme-dark:text-slate-400   theme-dark:hover:bg-dark-button-ghost-hover theme-dark:active:bg-dark-button-ghost-active theme-dark:hover:text-slate-200 theme-dark:active:text-slate-200 theme-dark:disabled:bg-transparent theme-dark:disabled:text-dark-text-disabled p-3 theme-dark group"
                  >
                    <span className="pointer-events-none flex h-4 w-4 flex-col items-center justify-center gap-0.5  transition  duration-300 group-data-[state=open]:rotate-180">
                      <span className="h-0.5 w-3.5 bg-dark-text-subtle  transition duration-200 group-data-[state=open]:translate-y-[4px] group-data-[state=open]:rotate-45"></span>
                      <span className="h-0.5 w-3.5 bg-dark-text-subtle transition duration-200 group-data-[state=open]:opacity-0"></span>
                      <span className="h-0.5 w-3.5 bg-dark-text-subtle transition duration-200 group-data-[state=open]:-translate-y-[4px] group-data-[state=open]:-rotate-45"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex gap-0.5 rounded-[0.625rem] bg-navigation-layer2 p-0.5 group-data-[menu-open='true']:hidden max-sm:justify-between max-sm:[&amp;:has(>div:only-child)]:hidden">
                <div className="relative">
                  <ul
                    data-orientation="horizontal"
                    className="flex overflow-hidden rounded-lg bg-navigation-layer3 max-sm:hidden"
                  >
                    <li className="group/list-item">
                      <Link
                        href={""}
                        className="flex py-[0.6875rem] px-4 text-utility-label-02 focus:ring-dark-focus-border group-last/list-item:rounded-[0rem_0.5rem_0.5rem_0rem] group-first/list-item:rounded-[0.5rem_0rem_0rem_0.5rem] bg-transparent border-r  group-last/list-item:border-none border-dark-border-subtle-02 active:bg-[rgb(83,83,91)] text-slate-400 hover:bg-[rgb(83,83,91)] hover:text-slate-200"
                        data-radix-collection-item=""
                      >
                        Подписки
                      </Link>
                    </li>
                    <li className="group/list-item">
                      <Link
                        href={""}
                        className="flex py-[0.6875rem] px-4 text-utility-label-02 focus:ring-dark-focus-border group-last/list-item:rounded-[0rem_0.5rem_0.5rem_0rem] group-first/list-item:rounded-[0.5rem_0rem_0rem_0.5rem] bg-transparent border-r  group-last/list-item:border-none border-dark-border-subtle-02 active:bg-[rgb(83,83,91)] text-slate-400 hover:bg-[rgb(83,83,91)] hover:text-slate-200"
                        data-radix-collection-item=""
                      >
                        Способы установки
                      </Link>
                    </li>
                    <li className="group/list-item">
                      <Link
                        href={""}
                        className="flex py-[0.6875rem] px-4 text-utility-label-02 focus:ring-dark-focus-border group-last/list-item:rounded-[0rem_0.5rem_0.5rem_0rem] group-first/list-item:rounded-[0.5rem_0rem_0rem_0.5rem] bg-transparent border-r  group-last/list-item:border-none border-dark-border-subtle-02 active:bg-[rgb(83,83,91)] text-slate-400 hover:bg-[rgb(83,83,91)] hover:text-slate-200"
                        data-radix-collection-item=""
                      >
                        Вопросы и ответы
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="flex justify-center w-full">
          <div className="gap-0.5 rounded-xl bg-navigation-layer1 p-0.5 backdrop-blur-md cursor-pointer">
            <>
              <div
                className={
                  "NavigationMenuViewport group relative w-full overflow-hidden"
                }
              >
                <div className="grid w-full grid-cols-1 gap-6 rounded-[0.625rem] bg-navigation-layer2 px-4 py-8 md:grid-cols-2 lg:grid-cols-3 lg:px-6">
                  <div className="flex flex-1 flex-col gap-3">
                    <span className="text-slate-600 text-sm">Products</span>
                    <ul className="relative ml-px flex flex-col gap-2 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-dark-border-subtle-02">
                      <li className="relative">
                        <Link
                          href={""}
                          className="flex px-2 py-[0.1875rem] text-utility-label-02 border-gray-400 border-l hover:border-blue-600  text-slate-400 hover:text-slate-200"
                        >
                          Belet Film
                        </Link>
                      </li>
                      <li className="relative">
                        <Link
                          href={""}
                          className="flex px-2 py-[0.1875rem] text-utility-label-02 border-gray-400 border-l hover:border-blue-600  text-slate-400 hover:text-slate-200"
                        >
                          Belet Box
                        </Link>
                      </li>
                      <li className="relative">
                        <Link
                          href={""}
                          className="flex px-2 py-[0.1875rem] text-utility-label-02 border-gray-400 border-l hover:border-blue-600  text-slate-400 hover:text-slate-200"
                        >
                          Start
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <span className="text-slate-600 text-sm">
                      For customers
                    </span>
                    <ul
                      data-orientation="horizontal"
                      className="relative ml-px flex flex-col gap-2 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-dark-border-subtle-02"
                    >
                      <li className="relative">
                        <Link
                          href={""}
                          className="flex px-2 py-[0.1875rem] text-utility-label-02 border-gray-400 border-l hover:border-blue-600  text-slate-400 hover:text-slate-200"
                        >
                          Support
                        </Link>
                      </li>
                      <li className="relative">
                        <Link
                          href={""}
                          className="flex px-2 py-[0.1875rem] text-utility-label-02 border-gray-400 border-l hover:border-blue-600  text-slate-400 hover:text-slate-200"
                        >
                          Legal Informations
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <span className="text-slate-600 text-sm">Company</span>
                    <ul
                      data-orientation="horizontal"
                      className="relative ml-px flex flex-col gap-2 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-px before:bg-dark-border-subtle-02"
                    >
                      <li className="relative">
                        <Link
                          href={""}
                          className="flex px-2 py-[0.1875rem] text-utility-label-02 border-gray-400 border-l hover:border-blue-600  text-slate-400 hover:text-slate-200"
                        >
                          Contacts
                        </Link>
                      </li>
                      <li className="relative">
                        <Link
                          href={""}
                          className="flex px-2 py-[0.1875rem] text-utility-label-02 border-gray-400 border-l hover:border-blue-600  text-slate-400 hover:text-slate-200"
                        >
                          Careers
                        </Link>
                      </li>
                      <li className="relative">
                        <Link
                          href={""}
                          className="flex px-2 py-[0.1875rem] text-utility-label-02 border-gray-400 border-l hover:border-blue-600  text-slate-400 hover:text-slate-200"
                        >
                          Newsroom
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      )}
      ;
    </header>
  );
};

export default Navbar;
