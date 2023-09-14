import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const videoData = [
  {
    title: "Ajax Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/3Lbegd1EW5I",
  },
  {
    title: "Waterloo Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/hJcwr3su6RU",
  },
  {
    title: "Milton Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/kvxxVf3hktE",
  },
  {
    title: "Etobicoke Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/MsrdEa2jdEM",
  },
  {
    title: "Pickering Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/EhdMP7xEDTo",
  },
  {
    title: "Vancover Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/BpX55-_oUcQ",
  },
  {
    title: "Oshawa Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/EhdMP7xEDTo",
  },
  {
    title: "Hamilton Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/BpX55-_oUcQ",
  },
  {
    title: "Burlington Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/MsrdEa2jdEM",
  },
  {
    title: "Caligary Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/kvxxVf3hktE",
  },
  {
    title: "Edomnton Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/hJcwr3su6RU",
  },
  {
    title: "Brampton Condos For Sale",
    videoUrl: "https://www.youtube.com/embed/3Lbegd1EW5I",
  },
  // Add more video data here...
];

const VideoCard = () => {
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
      Math.min(prevIndex + 1, videoData.length - 1)
    );
  };

  const visibleVideos = videoData.slice(currentIndex, currentIndex + 6);

  return (
    <div>
      <Container  sx={{pb:4}}>
        <Stack flexDirection="row" alignItems="center" sx={{ pt: 3, pb: 3 }}>
          <div style={lineStyle}></div>
          <Typography variant="h5" fontWeight={600}>
            VIDEOS
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {visibleVideos.map((video, index) => (
            <Grid item xs={6} lg={2} key={index}>
              <Card>
                <iframe
                  width="100%"
                  height="200"
                  src={video.videoUrl}
                  title={video.title}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <CardContent>
                  <Typography variant="subtitle1">{video.title}</Typography>
                </CardContent>
              </Card>
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
            disabled={currentIndex + 6 >= videoData.length}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Next
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default VideoCard;
