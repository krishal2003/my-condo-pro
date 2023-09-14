// components/HeroSection.js
import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";


const HeroSection = () => {
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
            MyCondoPro
          </Typography>
          <Typography variant="h5">
            {" "}
            Your search for the perfect Condo start here
          </Typography>
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <div className="searchContainer">
              <TextField
                className="searchInput"
                variant="outlined"
                placeholder="Search"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <Button color="error" variant="contained" sx={{p:1.5,}}  className="searchButton">Search</Button>
                  ),
                }}
              />
            </div>
          </Stack>
        </div>
      </div>
    );
};

export default HeroSection;
