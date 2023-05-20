import Download from "@/components/Download/Download";
import Navbar from "@/components/Navbar/Navbar";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "@/components/Header/Header";
import Subscription from "@/components/Subscription/Subscription";
import Accordion from "@/components/Accordion/Accordion";

const Home: NextPage = () => {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between `}>
      <Head>
        <title>Belet</title>
        <meta name="description" content="Belet Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Subscription />
      <Download />
      <Accordion />
    </div>
  );
};

export default Home;
