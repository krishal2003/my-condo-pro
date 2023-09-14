import ContactForm from "@/components/ContactForm";
import { Box, Container,Button,Card, Grid, IconButton, Stack, Typography, CardMedia } from "@mui/material";
import Link from "next/link";
import React from "react";

function id() {
  return (
    <>
      <Container>
        <Stack>
          <CardMedia
            component="img"
            height="400"
            image="/house1.jpg"
            alt="Paella dish"
          />
        </Stack>
        <Box>
          <Grid container spacing={5} sx={{ my: 3 }}>
            <Grid item xs={12} md={8}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h4">Ajax</Typography>
                <Typography variant="h4">$ 84888</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1" sx={{ color: "text.disabled" }}>
                  Ottawa, Otanrio
                </Typography>
                <Typography variant="body1" sx={{ color: "text.disabled" }}>
                  est.$ 8540 /mo
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack
                  flexDirection={{ md: "row", sm: "column" }}
                  gap={{ md: "3", sm: "0" }}
                >
                  <Typography variant="body1">8 bed</Typography>
                  <Typography variant="body1">
                    4 bath
                  </Typography>
                  <Typography variant="body1">
                    12021 sq m
                  </Typography>
                </Stack>
                <Typography variant="body1">For Sale</Typography>
              </Box>

              <Box sx={{ mt: 3, p: 1, backgroundColor: "whitesmoke" }}>
                <Stack flexDirection="row" alignItems="center">
                  <IconButton aria-label="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"
                      />
                    </svg>
                  </IconButton>{" "}
                  <Link href="/maintenance">
                    <Typography
                      sx={{ textDecoration: "underline", pr: 3 }}
                      variant="body1"
                    >
                      Join or Sign in
                    </Typography>
                  </Link>
                  <Typography
                    variant="body1"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                      },
                    }}
                  >
                    Real estate boards need a verified account to see photos &
                    sold data.
                  </Typography>
                </Stack>
              </Box>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack flexDirection="row" gap={2} sx={{ pt: 5 }}>
                  <Button variant="outlined">Save</Button>
                  <Button variant="outlined"> Share</Button>
                  <Button variant="outlined">View on Map</Button>
                </Stack>
                <Stack sx={{ pt: 5 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                      },
                    }}
                  >
                    History
                  </Button>
                </Stack>
              </Stack>

              <Stack
                flexDirection={{ md: "row", xs: "column" }}
                gap={{ md: "20", xs: "0" }}
                sx={{ pt: 3 }}
              >
                <Stack>
                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Owner:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      Ajay Devgan
                    </Typography>
                  </Stack>
                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Contact:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      9840058967
                    </Typography>
                  </Stack>
                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Area:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      8547 sq m
                    </Typography>
                  </Stack>
                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Year Built:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      1985 AD
                    </Typography>
                  </Stack>

                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Tax Year:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      1999 AD
                    </Typography>
                  </Stack>
                </Stack>

                <Stack>
                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Owner:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      Ajay Degan
                    </Typography>
                  </Stack>{" "}
                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Owner:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      OccupantName
                    </Typography>
                  </Stack>{" "}
                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Owner:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      OccupantName
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                sx={{ pt: 4 }}
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center"
                gap={3}
              >
                <Link
                  href="/maintenance"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Card
                    sx={{
                      p: 2,
                      border: "1px solid transparent",

                      "&:hover": {
                        border: "1px solid black",
                      },
                    }}
                  >
                    <Typography variant="h4">Afford Score</Typography>
                    <Typography variant="h3">Whats my Score?</Typography>
                  </Card>
                </Link>
                <Link
                  href="/maintenance"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Card
                    sx={{
                      p: 2,
                      border: "1px solid transparent",

                      "&:hover": {
                        border: "1px solid black",
                      },
                    }}
                  >
                    <Typography variant="h4">Need a Mortgage?</Typography>
                    <Typography variant="h3">Rate as low as 4.99%</Typography>
                  </Card>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                Ask About this Home
              </Typography>

              <Stack>
                <ContactForm />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default id;
