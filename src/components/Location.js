import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function Location() {
  const cities = [
    "Ajax",
    "Brampton",
    "Burlington",
    "Caligary",
    "Edomnton",
    "Etobicoke",
    "Hamilton",
    "Milton",
    "Oshawa",
    "Hamilton",
    "Pickering",
    "Tornoto",
    "Vancover",
    "Waterloo",
    "Vaughan",
    "New Market",
  ];

  const cityGroups = [];
  for (let i = 0; i < cities.length; i += 6) {
    cityGroups.push(cities.slice(i, i + 6));
  }

  const lineStyle = {
    width: "100px",
    height: "2px",
    backgroundColor: "#BD0800",
    margin: "20px 0",
  };

  return (
    <Container>
      <Stack flexDirection="row" justifyContent="center" gap={4}>
        <div style={lineStyle}></div>
        <Typography variant="h4">Locations</Typography>
        <div style={lineStyle}></div>
      </Stack>{" "}
      <Grid container spacing={2} sx={{ pt: 5 }}>
        {cityGroups.map((group, index) => (
          <Grid item xs={6} sm={3} key={index}>
            {group.map((city) => (
              <Link href={`location/${city}`} style={{textDecoration:'none'}}>
                <Typography
                  variant="body1"
                  key={city}
                  className="cities"
                >
                  {city}
                </Typography>
              </Link>
            ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Location;
