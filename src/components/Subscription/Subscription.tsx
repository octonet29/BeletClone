"use client";
import React from "react";
import SubscriptionBanner from "./SubscriptionBanner";
import SubscriptionTopText from "./SubscriptionTopText";

const Subscription: React.FC = (): JSX.Element => {
  return (
    <div className="relative w-full bg-dark-background-default pb-14 before:absolute before:right-0 before:left-0 before:top-0 before:z-10 before:h-1/4 before:bg-gradient-to-b before:from-dark-background-default md:pb-20">
      <div className="absolute left-0 top-0 right-0 bottom-0 z-[0] overflow-hidden">
        <div className="gradient_dot absolute will-change-transform -mt-[calc(var(--gradient-cursor-height)/2)] -ml-[calc(var(--gradient-cursor-width)/2)] h-[var(--gradient-cursor-height)] w-[var(--gradient-cursor-width)] origin-center translate-x-0 translate-y-0 rounded-full blur-[130px] [--gradient-cursor-width:360px] [--gradient-cursor-height:216px]"></div>
      </div>
      <SubscriptionTopText />
      <SubscriptionBanner />
    </div>
  );
};

export default Subscription;
