import React from "react";

const PriceTopText = () => {
  return (
    <div>
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 pt-20 md:px-8 lg:px-10">
        <h3 className="w-full font-bold max-w-[24ch] text-[1.75rem] leading-[4.375rem] text-white sm:text-[2rem] md:text-[2.75rem] lg:text-[3.75rem] xl:text-[3.75rem] 2xl:text-[4.75rem]">
          Всего <span className="text-[#3783f9]">30 манат в месяц</span> за
          неограниченное развлечение
        </h3>
      </div>
    </div>
  );
};

export default PriceTopText;
