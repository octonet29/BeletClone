import React from "react";
import PriceBanner from "./PriceBanner";
import PriceTopText from "./PriceTopText";

const Price = () => {
  return (
    <div className="relative w-full bg-dark-background-default pb-14 before:absolute before:right-0 before:left-0 before:top-0 before:z-10 before:h-1/4 before:bg-gradient-to-b before:from-dark-background-default md:pb-20">
      <PriceTopText />
      <PriceBanner />
    </div>
  );
};

export default Price;
