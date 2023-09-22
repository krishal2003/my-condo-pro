import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";
import CondoCard from "@/components/CondoCard";

function location() {

  
  const router = useRouter();
  const { city } = router.query;

  const imageOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 0, 0, 0.1)",
    pointerEvents: "none",
  };
    const lineStyle = {
      width: "100px",
      height: "2px",
      backgroundColor: "#BD0800",
      margin: "20px 0",
    };
  return (
    <>
      <Head>
        <title>{city} | MyCondosPro</title>
        <link rel="icon" href="logoo.png" />
      </Head>
      <div className="hero-container">
        <div style={imageOverlayStyle}></div>
        <div className="text-container">
          <Typography variant="h4" fontWeight="600">
            {city} Condos For Sale{" "}
          </Typography>
        </div>
      </div>
      <Stack flexDirection="row" justifyContent="center" gap={4} sx={{pt:5}}>
        <div style={lineStyle}></div>
        <Typography variant="h4" textAlign='center'>New Condos in {city}</Typography>
        <div style={lineStyle}></div>
      </Stack>{" "}
      <CondoCard />
    </>
  );
}

export default location;
