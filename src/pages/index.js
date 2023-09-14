import ComingCard from "@/components/ComingCard";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import PlatinumCard from "@/components/PlatinumCard";
import PromotionalCard from "@/components/PromotionalCard";
import Register from "@/components/Register";
import VideoCard from "@/components/VideoCard";
import Head from "next/head";
import React, {  } from "react";

export default function Home() {
  return (
    <>
      <>
        <Head>
          <title>Home | MyCondoPro</title>
          <link rel="icon" href="https://ibb.co/k3NDQP0" />
        </Head>
        <Hero />
        <Register />
        <PlatinumCard />
        <PromotionalCard />
        <ComingCard />
        <VideoCard />
        <Location />
      </>
    </>
  );
}
