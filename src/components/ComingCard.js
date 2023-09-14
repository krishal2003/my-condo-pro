import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";

const cardData = [
  {
    imageSrc: "house1.jpg",
    title: "Newtown ",
    subtitle: "$48000",
    anotherSubtitle: "Ontroio, Canada",
  },
  {
    imageSrc: "house2.jpg",
    title: "Reach ",
    subtitle: "$48000",
    anotherSubtitle: "Vancover, Canada",
  },
  {
    imageSrc: "house3.jpg",
    title: "Casterly ",
    subtitle: "$156544",
    anotherSubtitle: "Quebec, Canada",
  },
  {
    imageSrc: "house4.jpg",
    title: "Pentos ",
    subtitle: "$125000",
    anotherSubtitle: "Ontroio, Canada",
  },
  {
    imageSrc: "house5.jpg",
    title: "Bravos ",
    subtitle: "$99999",
    anotherSubtitle: "Vancover, Canada",
  },
  {
    imageSrc: "house6.jpg",
    title: "Pyke ",
    subtitle: "$21600",
    anotherSubtitle: "Quebec, Canada",
  },
  {
    imageSrc: "house7.jpg",
    title: "Vale ",
    subtitle: "$48000",
    anotherSubtitle: "Vancover, Canada",
  },
  {
    imageSrc: "house8.jpg",
    title: "Landing ",
    subtitle: "$78000",
    anotherSubtitle: "Ontroio, Canada",
  },
  {
    imageSrc: "house9.jpg",
    title: "Winterfell ",
    subtitle: "$26000",
    anotherSubtitle: "Quebec, Canada",
  },
  {
    imageSrc: "house10.jpg",
    title: "Oldtown ",
    subtitle: "$78000",
    anotherSubtitle: "Vancover, Canada",
  },
  {
    imageSrc: "house11.jpg",
    title: "Hardhome ",
    subtitle: "$82000",
    anotherSubtitle: "Ontroio, Canada",
  },
  {
    imageSrc: "house12.jpg",
    title: "Valyria ",
    subtitle: "$950000",
    anotherSubtitle: "Quebec, Canada",
  },
];

const ComingCard = () => {
  const lineStyle = {
    height: "40px",
    width: "10px",
    backgroundColor: "#BD0800",
    margin: "0 5px ",
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, cardData.length - 1)
    );
  };

  const visibleCards = cardData.slice(currentIndex, currentIndex + 6);

  return (
    <div>
      <Container>
        <Stack flexDirection="row" alignItems="center" sx={{ pt: 3, pb: 3 }}>
          <div style={lineStyle}></div>
          <Typography variant="h5" fontWeight={600}>
            COMING SOON 
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {visibleCards.map((card, index) => (
            <Grid item xs={6} lg={2} key={index}>
              <Link
                href={`/project/${visibleCards.title}`}
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
                    <Typography variant="subtitle1">{card.subtitle}</Typography>
                    <Typography variant="subtitle2">
                      {card.anotherSubtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Stack
          flexDirection="row"
          justifyContent="center"
          sx={{ pt: 2, pb: 2 }}
        >
          <Button
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            startIcon={<KeyboardArrowLeftIcon />}
          >
            Prev
          </Button>
          <Button
            onClick={handleNextClick}
            disabled={currentIndex + 6 >= cardData.length}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Next
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default ComingCard;
