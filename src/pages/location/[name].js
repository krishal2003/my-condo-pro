import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

function location() {
  const imageOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 0, 0, 0.1)", 
    pointerEvents: "none", 
  };
  return (
    <div className="hero-container">
      <div style={imageOverlayStyle}></div>

      <div className="text-container">
        <Typography variant="h4" fontWeight="600">
          Condos For Sale{" "}
        </Typography>

      
      </div>
    </div>
  );
}

export default location;
