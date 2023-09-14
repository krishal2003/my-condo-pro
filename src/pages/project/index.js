import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const cardData = [
  {
    imageSrc: "house1.jpg",
    title: "Newtown ",
    owner: "Rajesh Brothers",
    occupancy: "2026",
    subtitle: "$48000",
    anotherSubtitle: "Ontroio, Canada",
  },
  {
    imageSrc: "house2.jpg",
    title: "Reach ",
    subtitle: "$48000",
    anotherSubtitle: "Vancover, Canada",
    owner: "Jonas brother",
    occupancy: "2028",
  },
  {
    imageSrc: "house3.jpg",
    title: "Casterly ",
    subtitle: "$156544",
    anotherSubtitle: "Quebec, Canada",
    owner: "Ambani Group",
    occupancy: "2030",
  },
  {
    imageSrc: "house4.jpg",
    title: "Pentos ",
    subtitle: "$125000",
    anotherSubtitle: "Ontroio, Canada",
    owner: "Saudi Royal",
    occupancy: "2026",
  },
  {
    imageSrc: "house5.jpg",
    title: "Bravos ",
    subtitle: "$99999",
    anotherSubtitle: "Vancover, Canada",
    owner: "Jagdesh Corporation",
    occupancy: "2024",
  },
  {
    imageSrc: "house6.jpg",
    title: "Pyke ",
    subtitle: "$21600",
    anotherSubtitle: "Quebec, Canada",
    owner: "JD Developement",
    occupancy: "2029",
  },
  {
    imageSrc: "house7.jpg",
    title: "Vale ",
    subtitle: "$48000",
    anotherSubtitle: "Vancover, Canada",
    owner: "Rosavelt Homes",
    occupancy: "2026",
  },
  {
    imageSrc: "house8.jpg",
    title: "Landing ",
    subtitle: "$78000",
    anotherSubtitle: "Ontroio, Canada",
    owner: "Capital Developments",
    occupancy: "2032",
  },
  {
    imageSrc: "house9.jpg",
    title: "Winterfell ",
    subtitle: "$26000",
    anotherSubtitle: "Quebec, Canada",
    owner: "Originate Developments",
    occupancy: "2025",
  },
  {
    imageSrc: "house10.jpg",
    title: "Oldtown ",
    subtitle: "$78000",
    anotherSubtitle: "Vancover, Canada",
    owner: "Rajesh",
    occupancy: "2026",
  },
  {
    imageSrc: "house11.jpg",
    title: "Hardhome ",
    subtitle: "$82000",
    anotherSubtitle: "Ontroio, Canada",
    owner: "Caivan Communities",
    occupancy: "2026",
  },
  {
    imageSrc: "house12.jpg",
    title: "Valyria ",
    subtitle: "$950000",
    anotherSubtitle: "Quebec, Canada",
    owner: "Astro Houses",
    occupancy: "2027",
  },
];

const CondoPage = () => {
  const lineStyle = {
    width: "100px",
    height: "2px",
    backgroundColor: "#BD0800",
    margin: "20px 0",
  };

  return (
    <div>
      <Container sx={{ pt: 6 }}>
        <Grid container spacing={2} sx={{ pt: 6 }}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Link
                href={`/project/${card.title}`}
                style={{ textDecoration: "none" }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    alt={card.title}
                    height="140"
                    image={card.imageSrc}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="subtitle1">{card.owner}</Typography>
                    <Typography variant="subtitle1">{card.subtitle}</Typography>
                    <Typography variant="subtitle2" sx={{ pt: 2 }}>
                      {card.anotherSubtitle}
                    </Typography>
                    <Typography variant="subtitle2">
                      {card.occupancy}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CondoPage;
