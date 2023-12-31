import type { NextPage } from "next";
import Head from "next/head";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { TopNavbar } from "../components/TopNavbar";
import { WorkSection } from "../components/WorkSection";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Sourabh Mandal - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopNavbar />
        <HeroSection />
        <WorkSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Home;
