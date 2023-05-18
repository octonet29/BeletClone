import React from "react";
import Image from "next/image";

const DownloadTopText = () => {
  return (
    <div>
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 pt-20 md:px-8 lg:px-10">
        {/* <Image
          height={48}
          width={48}
          src="https://belet.me/uploads/images/belet-film-icon.png"
          alt=""
        /> */}
        <h3 className="mt-6 w-full max-w-[24ch] text-fluid-sm-heading-06 text-dark-text-strong sm:text-fluid-sm-display-02 md:text-fluid-md-display-02 lg:text-fluid-lg-display-02 xl:text-fluid-xl-display-02 2xl:text-[4.75rem] leading-[5.375rem] font-bold">
          Установите Belet Film на ваше любимое устройство
        </h3>
      </div>
    </div>
  );
};

export default DownloadTopText;
