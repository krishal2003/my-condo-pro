import React from "react";
import { Grid, Paper } from "@mui/material";

const ImageGrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <img src="/house1.jpg" alt="House 1" style={{ width: "100%" }} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <img src="/house2.jpg" alt="House 2" style={{ width: "100%" }} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <img src="/house3.jpg" alt="House 3" style={{ width: "100%" }} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>
          <img src="/house4.jpg" alt="House 4" style={{ width: "100%" }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ImageGrid;
