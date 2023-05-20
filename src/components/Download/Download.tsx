"use client";
import React from "react";
import DownloadTopText from "./DownloadTopText";
import DownloadBanner from "./DownloadBanner";

const Download: React.FC = (): JSX.Element => {
  return (
    <div className="relative w-full bg-dark-background-default pb-14 after:absolute  after:right-0 after:left-0 after:bottom-0 after:z-0 after:h-1/4 after:bg-gradient-to-t after:from-dark-background-default md:pb-20">
      <DownloadTopText />
      <DownloadBanner />
    </div>
  );
};

export default Download;
