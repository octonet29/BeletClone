import React from "react";

const DownloadBanner = () => {
  return <div><ul className="relative z-10 mx-auto mt-10 grid max-w-screen-2xl grid-cols-1 gap-4 px-4 max-lg:grid-rows-4 sm:mt-16 lg:grid-cols-2 lg:px-6">
  <li className="flex h-full flex-col gap-10 rounded-2xl bg-dark-layer-01 bg-opacity-70 p-4">
    <div>
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.9983 21.0017C43.1528 25.1563 45.5248 30.7602 45.6219 36.625L0.378104 36.625C0.475209 30.7602 2.84717 25.1562 7.00171 21.0017C11.2447 16.7587 16.9995 14.375 23 14.375C29.0005 14.375 34.7553 16.7587 38.9983 21.0017Z"
          stroke="#FEFBFF"
          strokeWidth="0.75"
        />
        <circle cx={12} cy={28} r="2.625" stroke="#FEFBFF" strokeWidth="0.75" />
        <circle cx={34} cy={28} r="2.625" stroke="#FEFBFF" strokeWidth="0.75" />
        <g>
          <path d="M34 17.0622L37.5 11" stroke="white" strokeLinecap="round" />
          <path d="M8 11L11.5 17.0622" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
      <h5 className="mb-2 mt-6 text-fluid-sm-heading-06 text-dark-text-strong md:text-fluid-md-heading-04 lg:text-fluid-lg-heading-04 xl:text-fluid-xl-heading-04 2xl:text-fluid-2xl-heading-04">
        Android OS
      </h5>
      <p className="text-body-compact-01 text-dark-text-strong">
        Все устройства на Android OS версии 5.1 или выше.
      </p>
    </div>
    <div className="mt-auto flex w-full gap-2 max-[500px]:flex-col">
      <a
        href="https://belet.me/uploads/beletfilm-mobile.apk"
        className="inline-flex  items-center px-4  font-sans text-body-compact-01 rounded-lg ring-inset  focus:ring-1 focus:ring-offset-2 normal-case disabled:text-light-text-disabled  gap-2 disabled:cursor-not-allowed disabled:pointer-events-none ring-light-focus-inset ring-offset-light-focus-border disabled:bg-light-button-disabled theme-dark:ring-dark-focus-inset theme-dark:ring-offset-dark-focus-border theme-dark:disabled:bg-dark-button-disabled text-light-text-on-color bg-light-button-secondary hover:bg-light-button-secondary-hover active:bg-light-button-secondary-active disabled:text-light-text-disabled disabled:bg-light-button-disabled theme-dark:text-dark-text-on-color theme-dark:bg-dark-button-secondary theme-dark:hover:bg-dark-button-secondary-hover theme-dark:active:bg-dark-button-secondary-active theme-dark:disabled:text-dark-text-disabled theme-dark:disabled:bg-dark-button-disabled py-[0.6875rem] justify-between w-full theme-dark"
      >
        Скачать последнюю версию
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
          <path d="M13 7L12.3 6.3 8.5 10.1 8.5 1 7.5 1 7.5 10.1 3.7 6.3 3 7 8 12zM13 12v2H3v-2H2v2l0 0c0 .6.4 1 1 1h10c.6 0 1-.4 1-1l0 0v-2H13z" />
        </svg>
      </a>
      <a
        className="inline-flex  items-center px-4  font-sans text-body-compact-01 rounded-lg ring-inset  focus:ring-1 focus:ring-offset-2 normal-case disabled:text-light-text-disabled  gap-2 disabled:cursor-not-allowed disabled:pointer-events-none ring-light-focus-inset ring-offset-light-focus-border disabled:bg-light-button-disabled theme-dark:ring-dark-focus-inset theme-dark:ring-offset-dark-focus-border theme-dark:disabled:bg-dark-button-disabled text-light-text-on-color bg-light-button-primary hover:bg-light-button-primary-hover active:bg-light-button-primary-active disabled:text-light-text-disabled disabled:bg-light-button-disabled theme-dark:text-dark-text-on-color theme-dark:bg-dark-button-primary theme-dark:hover:bg-dark-button-primary-hover theme-dark:active:bg-dark-button-primary-active theme-dark:disabled:text-dark-text-disabled theme-dark:disabled:bg-dark-button-disabled py-[0.6875rem] justify-between w-full theme-dark"
        href="https://play.google.com/store/apps/details?id=tm.belet.films"
      >
        Скачать с Google Play
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
          <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z" />
        </svg>
      </a>
    </div>
  </li>
  <li className="flex h-full flex-col gap-10 rounded-2xl bg-dark-layer-01 bg-opacity-70 p-4">
    <div>
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.9983 21.0017C43.1528 25.1563 45.5248 30.7602 45.6219 36.625L0.378104 36.625C0.475209 30.7602 2.84717 25.1562 7.00171 21.0017C11.2447 16.7587 16.9995 14.375 23 14.375C29.0005 14.375 34.7553 16.7587 38.9983 21.0017Z"
          stroke="#FEFBFF"
          strokeWidth="0.75"
        />
        <circle cx={12} cy={28} r="2.625" stroke="#FEFBFF" strokeWidth="0.75" />
        <circle cx={34} cy={28} r="2.625" stroke="#FEFBFF" strokeWidth="0.75" />
        <g>
          <path d="M34 17.0622L37.5 11" stroke="white" strokeLinecap="round" />
          <path d="M8 11L11.5 17.0622" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
      <h5 className="mb-2 mt-6 text-fluid-sm-heading-06 text-dark-text-strong md:text-fluid-md-heading-04 lg:text-fluid-lg-heading-04 xl:text-fluid-xl-heading-04 2xl:text-fluid-2xl-heading-04">
        Android TV OS
      </h5>
      <p className="text-body-compact-01 text-dark-text-strong">
        Все устройства на Android TV OS
      </p>
    </div>
    <div className="mt-auto flex w-full max-[500px]:flex-col">
      <a
        href="https://belet.me/uploads/beletfilm-tv.apk"
        className="inline-flex  items-center px-4  font-sans text-body-compact-01 rounded-lg ring-inset  focus:ring-1 focus:ring-offset-2 normal-case disabled:text-light-text-disabled  gap-2 disabled:cursor-not-allowed disabled:pointer-events-none ring-light-focus-inset ring-offset-light-focus-border disabled:bg-light-button-disabled theme-dark:ring-dark-focus-inset theme-dark:ring-offset-dark-focus-border theme-dark:disabled:bg-dark-button-disabled text-light-text-on-color bg-light-button-primary hover:bg-light-button-primary-hover active:bg-light-button-primary-active disabled:text-light-text-disabled disabled:bg-light-button-disabled theme-dark:text-dark-text-on-color theme-dark:bg-dark-button-primary theme-dark:hover:bg-dark-button-primary-hover theme-dark:active:bg-dark-button-primary-active theme-dark:disabled:text-dark-text-disabled theme-dark:disabled:bg-dark-button-disabled py-[0.6875rem] justify-between w-full theme-dark"
      >
        Скачать последнюю версию
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
          <path d="M13 7L12.3 6.3 8.5 10.1 8.5 1 7.5 1 7.5 10.1 3.7 6.3 3 7 8 12zM13 12v2H3v-2H2v2l0 0c0 .6.4 1 1 1h10c.6 0 1-.4 1-1l0 0v-2H13z" />
        </svg>
      </a>
    </div>
  </li>
  <li className="flex h-full flex-col gap-10 rounded-2xl bg-dark-layer-01 bg-opacity-70 p-4">
    <div>
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.92163 32.0231L1.94331 32.375H2.29592H6.85592H7.18452L7.22767 32.0493L8.19992 24.7098L9.17216 32.0493L9.21532 32.375H9.54392H14.1039H14.4565L14.4782 32.0231L15.5102 15.2711L15.5347 14.873H15.1359H12.1599H11.8022L11.7853 15.2303L11.2891 25.7279L10.2507 18.8401L10.2026 18.521H9.87992H6.63992H6.31721L6.26911 18.8401L5.23452 25.7029L5.21453 25.263L5.21449 25.2621L4.73449 15.2301L4.7174 14.873H4.35992H1.26392H0.865103L0.889626 15.2711L1.92163 32.0231ZM18.3355 32V32.375H18.7105H29.4145H29.7895V32V29.048V28.673H29.4145H22.6855V25.367H29.1745H29.5495V24.992V22.04V21.665H29.1745H22.6855V18.575H29.4145H29.7895V18.2V15.248V14.873H29.4145H18.7105H18.3355V15.248V32ZM33.7092 14.873H33.3342V15.248V32V32.375H33.7092H40.1412C41.8047 32.375 43.148 31.9416 44.1176 31.0257C45.101 30.1119 45.5802 28.8864 45.5802 27.392C45.5802 26.1946 45.276 25.2073 44.6216 24.4791C44.1694 23.963 43.5843 23.5688 42.8784 23.2884C43.4299 23.0282 43.8888 22.686 44.2453 22.2561C44.7956 21.5957 45.0522 20.7347 45.0522 19.712C45.0522 18.2493 44.5806 17.0541 43.6107 16.1717C42.6539 15.2866 41.293 14.873 39.5892 14.873H33.7092ZM40.7141 28.7437C40.4102 28.9625 39.875 29.105 39.0372 29.105H37.5882V25.127H39.0372C39.875 25.127 40.4102 25.2696 40.7141 25.4884C40.971 25.6734 41.1582 26.0515 41.1582 26.768V27.464C41.1582 28.1806 40.971 28.5587 40.7141 28.7437ZM40.2082 21.641C39.92 21.8429 39.4019 21.977 38.5812 21.977H37.5882V18.143H38.5812C39.4059 18.143 39.9251 18.2785 40.2124 18.4821C40.4509 18.651 40.6302 19.0031 40.6302 19.688V20.408C40.6302 21.087 40.4538 21.4543 40.2082 21.641Z"
          stroke="#FEFBFF"
          strokeWidth="0.75"
        />
      </svg>
      <h5 className="mb-2 mt-6 text-fluid-sm-heading-06 text-dark-text-strong md:text-fluid-md-heading-04 lg:text-fluid-lg-heading-04 xl:text-fluid-xl-heading-04 2xl:text-fluid-2xl-heading-04">
        WEB
      </h5>
      <p className="text-body-compact-01 text-dark-text-strong">
        Все устройства поддерживающие современные браузеры
      </p>
    </div>
    <div className="mt-auto flex w-full max-[500px]:flex-col">
      <a
        href="https://film.belet.me/"
        className="inline-flex  items-center px-4  font-sans text-body-compact-01 rounded-lg ring-inset  focus:ring-1 focus:ring-offset-2 normal-case disabled:text-light-text-disabled  gap-2 disabled:cursor-not-allowed disabled:pointer-events-none ring-light-focus-inset ring-offset-light-focus-border disabled:bg-light-button-disabled theme-dark:ring-dark-focus-inset theme-dark:ring-offset-dark-focus-border theme-dark:disabled:bg-dark-button-disabled text-light-text-on-color bg-light-button-primary hover:bg-light-button-primary-hover active:bg-light-button-primary-active disabled:text-light-text-disabled disabled:bg-light-button-disabled theme-dark:text-dark-text-on-color theme-dark:bg-dark-button-primary theme-dark:hover:bg-dark-button-primary-hover theme-dark:active:bg-dark-button-primary-active theme-dark:disabled:text-dark-text-disabled theme-dark:disabled:bg-dark-button-disabled py-[0.6875rem] justify-between w-full theme-dark"
      >
        Перейти на сайт
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
          <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z" />
        </svg>
      </a>
    </div>
  </li>
  <li className="flex h-full flex-col gap-10 rounded-2xl bg-dark-layer-01 bg-opacity-70 p-4">
    <div>
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4.375"
          y="4.375"
          width="39.25"
          height="39.25"
          rx="7.625"
          stroke="#FEFBFF"
          strokeWidth="0.75"
        />
        <g>
          <path
            d="M11.2418 30.7812V20.5994H12.0119V30.7812H11.2418ZM11.63 18.7964C11.4603 18.7964 11.3118 18.7345 11.1846 18.6108C11.0615 18.4871 11 18.3368 11 18.16C11 17.9833 11.0615 17.833 11.1846 17.7093C11.3076 17.5855 11.4561 17.5237 11.63 17.5237C11.7997 17.5237 11.9461 17.5855 12.0691 17.7093C12.1964 17.833 12.2601 17.9833 12.2601 18.16C12.2601 18.3368 12.1985 18.4871 12.0755 18.6108C11.9525 18.7345 11.804 18.7964 11.63 18.7964Z"
            fill="white"
          />
          <path
            d="M25.9044 23.9934C25.9044 25.3943 25.6711 26.6184 25.2044 27.6657C24.7377 28.7086 24.0886 29.5196 23.257 30.0985C22.4297 30.6774 21.4751 30.9669 20.3932 30.9669C19.3071 30.9669 18.3483 30.6774 17.5167 30.0985C16.6894 29.5152 16.0424 28.702 15.5757 27.6591C15.109 26.6117 14.8757 25.3898 14.8757 23.9934C14.8757 22.5925 15.109 21.3706 15.5757 20.3277C16.0466 19.2847 16.6958 18.4738 17.5231 17.8949C18.3504 17.3116 19.3071 17.0199 20.3932 17.0199C21.4751 17.0199 22.4297 17.3093 23.257 17.8883C24.0886 18.4672 24.7377 19.2803 25.2044 20.3277C25.6711 21.3706 25.9044 22.5925 25.9044 23.9934ZM25.128 23.9934C25.128 22.7339 24.9244 21.6424 24.5171 20.7187C24.114 19.7951 23.5561 19.0814 22.8433 18.5777C22.1306 18.0694 21.3139 17.8153 20.3932 17.8153C19.4726 17.8153 18.6559 18.0672 17.9431 18.571C17.2303 19.0704 16.6703 19.7841 16.263 20.7121C15.86 21.6357 15.6584 22.7295 15.6584 23.9934C15.6584 25.244 15.8578 26.3333 16.2566 27.2614C16.6597 28.185 17.2176 28.9009 17.9304 29.4091C18.6431 29.9173 19.4641 30.1714 20.3932 30.1714C21.3139 30.1714 22.1306 29.9195 22.8433 29.4157C23.5561 28.9075 24.114 28.1916 24.5171 27.268C24.9244 26.3444 25.128 25.2528 25.128 23.9934Z"
            fill="white"
          />
          <path
            d="M36.039 20.5994C35.9712 19.7554 35.6402 19.0726 35.0463 18.5511C34.4565 18.0297 33.6929 17.7689 32.7552 17.7689C32.1231 17.7689 31.5609 17.8905 31.0688 18.1335C30.5766 18.3766 30.1906 18.708 29.9105 19.1278C29.6305 19.5477 29.4905 20.0294 29.4905 20.5729C29.4905 20.922 29.5542 21.238 29.6814 21.5208C29.813 21.7992 29.9975 22.0489 30.2351 22.2699C30.4727 22.4864 30.7548 22.6765 31.0815 22.84C31.4082 23.0035 31.7688 23.1471 32.1634 23.2708L33.5889 23.7083C34.0768 23.863 34.5265 24.042 34.9381 24.2453C35.3539 24.4485 35.7145 24.6916 36.0199 24.9744C36.3297 25.2528 36.5694 25.5799 36.7391 25.9555C36.913 26.3311 37 26.7642 37 27.2547C37 27.9706 36.8218 28.6114 36.4654 29.1771C36.1133 29.7427 35.6105 30.1891 34.9572 30.5161C34.308 30.8387 33.5422 31 32.6598 31C31.8197 31 31.0879 30.852 30.4642 30.5559C29.8448 30.2598 29.3547 29.8488 28.9941 29.3229C28.6335 28.7926 28.4299 28.1828 28.3832 27.4934H29.1978C29.2402 28.0546 29.412 28.5407 29.7133 28.9517C30.0187 29.3583 30.4239 29.672 30.9288 29.893C31.4336 30.114 32.0106 30.2244 32.6598 30.2244C33.3598 30.2244 33.9771 30.1007 34.5117 29.8532C35.0463 29.6013 35.4642 29.2522 35.7654 28.8059C36.0666 28.3595 36.2172 27.8403 36.2172 27.2481C36.2172 26.7708 36.109 26.3621 35.8927 26.0218C35.6763 25.6815 35.356 25.3876 34.9317 25.1402C34.5117 24.8927 33.9898 24.6717 33.3662 24.4773L31.8452 24C30.8269 23.6774 30.0484 23.2377 29.5096 22.6809C28.975 22.1241 28.7077 21.4302 28.7077 20.5994C28.7077 19.9012 28.8859 19.2825 29.2423 18.7434C29.5987 18.1998 30.0824 17.7734 30.6933 17.464C31.3085 17.1547 32.0022 17 32.7743 17C33.5507 17 34.2359 17.1569 34.8299 17.4706C35.4239 17.78 35.8948 18.2064 36.2427 18.75C36.5906 19.2891 36.7836 19.9056 36.8218 20.5994H36.039Z"
            fill="white"
          />
        </g>
      </svg>
      <h5 className="mb-2 mt-6 text-fluid-sm-heading-06 text-dark-text-strong md:text-fluid-md-heading-04 lg:text-fluid-lg-heading-04 xl:text-fluid-xl-heading-04 2xl:text-fluid-2xl-heading-04">
        iOS
      </h5>
      <p className="text-body-compact-01 text-dark-text-strong">
        Для iPhone и iPad с версией iOS 11 или выше.
      </p>
    </div>
    <div className="mt-auto flex w-full max-[500px]:flex-col">
      <a
        href="https://apps.apple.com/us/app/belet-film/id1551618663"
        className="inline-flex  items-center px-4  font-sans text-body-compact-01 rounded-lg ring-inset  focus:ring-1 focus:ring-offset-2 normal-case disabled:text-light-text-disabled  gap-2 disabled:cursor-not-allowed disabled:pointer-events-none ring-light-focus-inset ring-offset-light-focus-border disabled:bg-light-button-disabled theme-dark:ring-dark-focus-inset theme-dark:ring-offset-dark-focus-border theme-dark:disabled:bg-dark-button-disabled text-light-text-on-color bg-light-button-primary hover:bg-light-button-primary-hover active:bg-light-button-primary-active disabled:text-light-text-disabled disabled:bg-light-button-disabled theme-dark:text-dark-text-on-color theme-dark:bg-dark-button-primary theme-dark:hover:bg-dark-button-primary-hover theme-dark:active:bg-dark-button-primary-active theme-dark:disabled:text-dark-text-disabled theme-dark:disabled:bg-dark-button-disabled py-[0.6875rem] justify-between w-full theme-dark"
      >
        Скачать с App Store
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
          <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z" />
        </svg>
      </a>
    </div>
  </li>
</ul>
</div>;
};

export default DownloadBanner;
