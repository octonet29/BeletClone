import Download from "@/components/Download/Download";
import Banner from "@/components/Header/Banner";
import Header from "@/components/Header/Header";
import Price from "@/components/Price/Price";
import Accordion from "@/components/accordion/accordion.component";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between `}>
      <Head>
        <title>Home Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Price />
      <Download />
      <Accordion />
    </div>
  );
};

export default Home;
