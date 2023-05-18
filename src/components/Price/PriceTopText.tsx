import React from "react";

const PriceTopText = () => {
  return (
    <div>
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 pt-20 md:px-8 lg:px-10">
        <h3 className="w-full max-w-[24ch] text-fluid-sm-heading-06 text-dark-text-strong sm:text-fluid-sm-display-02 md:text-fluid-md-display-02 lg:text-fluid-lg-display-02 xl:text-fluid-xl-display-02 2xl:text-fluid-2xl-display-02">
          Всего{" "}
          <span className="text-dark-text-interactive">30 манат в месяц</span>{" "}
          за неограниченное развлечение
        </h3>
      </div>
    </div>
  );
};

export default PriceTopText;
