import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import {
  Box,
  Container,
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  Typography,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import ImageGrid from "@/components/Images";
import Head from "next/head";
import axios from "axios";

const images = ["/house1.jpg", "/house2.jpg", "/house3.jpg", "/house4.jpg"];

const PropertyDetailPage = () => {
  const router = useRouter();
  const { ListingKey } = router.query;

  const [propertyData, setPropertyData] = useState({}); // State to store property data

  useEffect(() => {
    if (ListingKey) {
      // Fetch property data from the API using the ListingKey from the URL
      axios
        .get(
          `https://api.bridgedataoutput.com/api/v2/OData/itso/Property('${ListingKey}')?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
        )
        .then((response) => {
          // Update the state with the fetched data
          setPropertyData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [ListingKey]);

  return (
    <>
      <Head>
        <title>{propertyData.BuildingName}</title>
      </Head>
      <Stack
        alignItems="center"
        gap={0}
        flexDirection="row"
        sx={{ pt: 9, pb: 1, pl: 3 }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography>Home</Typography>
        </Link>
        <IconButton aria-label="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 20 20"
          >
            <path fill="currentColor" d="m8 6l6 4.03L8 14V6z" />
          </svg>
        </IconButton>{" "}
        <Link
          href="/project"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography>Project</Typography>
        </Link>
        <IconButton aria-label="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 20 20"
          >
            <path fill="currentColor" d="m8 6l6 4.03L8 14V6z" />
          </svg>
        </IconButton>{" "}
        <Link
          href={`{/project/${ListingKey}}`}
          style={{ textDecoration: "none" }}
        >
          <Typography>{propertyData.BuildingName}</Typography>
        </Link>
      </Stack>
      {/* <ImageGrid /> */}
      <Container>
        <Stack>
          <CardMedia
            component="img"
            height="400"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt12dbddde5342ce4c/648866ff21a8556da61fa167/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Paella dish"
          />
        </Stack>
        <Box>
          <Grid container spacing={5} sx={{ my: 0 }}>
            <Grid item xs={12} md={8}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5">
                  {" "}
                  {propertyData.BuildingName}
                </Typography>
                <Typography variant="h5">$ {propertyData.ListPrice}</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1" sx={{ color: "text.disabled" }}>
                  {propertyData.City}, {propertyData.StateOrProvince}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.disabled" }}>
                  est. $ {(propertyData.ListPrice / 12).toFixed(2)} /mo
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack
                  flexDirection={{ md: "row", sm: "column" }}
                  gap={{ md: 3, sm: 0 }}
                >
                  <Typography variant="body1">
                    {propertyData.BedroomsTotal} bed
                  </Typography>
                  <Typography variant="body1">
                    {propertyData.BathroomsTotalInteger} bath
                  </Typography>
                  <Typography variant="body1">
                    {propertyData.BuildingAreaTotal} sq.ft
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
                gap={{ md: 20, xs: 0 }}
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
                      {propertyData.ShowingContactName}
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
                      {propertyData.ListOfficePhone}
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
                      {propertyData.BuildingAreaTotal} sq.ft
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
                      {propertyData.YearBuilt} AD
                    </Typography>
                  </Stack>

                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Assessment Year:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      {propertyData.ITSO_AssessmentYear} AD
                    </Typography>
                  </Stack>
                </Stack>

                <Stack>
                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Agent Name:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      {propertyData.ListAgentFullName}
                    </Typography>
                  </Stack>{" "}
                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Parcel Number:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      {propertyData.ParcelNumber}
                    </Typography>
                  </Stack>{" "}
                  <Stack flexDirection="row">
                    <Typography variant="body1" fontWeight="bold">
                      Market Date:
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ pl: 1, color: "text.disabled" }}
                    >
                      {propertyData.ListingContractDate}
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
      <Container>
        <Box
          gap={5}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          sx={{ pt: 5 }}
        >
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            STATE <br />{" "}
            <Typography color="text.disabled">
              {propertyData.StateOrProvince}
            </Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            CITY <br />{" "}
            <Typography color="text.disabled">{propertyData.City}</Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            UNPARSED ADDRESS <br />{" "}
            <Typography color="text.disabled">
              {propertyData.UnparsedAddress}
            </Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            ASSOCIATION NAME <br />{" "}
            <Typography color="text.disabled">
              {" "}
              {propertyData.AssociationName2}
            </Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            PRICE <br />
            <Typography color="text.disabled">
              {propertyData.ListPrice}
            </Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            AREA (square metre) <br />
            <Typography color="text.disabled">
              {" "}
              {propertyData.BuildingAreaTotal}
            </Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            Agent Email <br />
            <Typography color="text.disabled">
              {" "}
              {propertyData.ListAgentEmail}
            </Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            TOTAL NUMBER OF BEDROOM <br />
            <Typography color="text.disabled">
              {" "}
              {propertyData.BedroomsTotal}
            </Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            TOTAL NUMBER OF BATHROOM <br />
            <Typography color="text.disabled">
              {" "}
              {propertyData.BathroomsTotalInteger}
            </Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            TOTAL STOREY <br />
            <Typography color="text.disabled">
              {" "}
              {propertyData.Stories}
            </Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            Assessment Year:
            <br />
            <Typography color="text.disabled">
              {" "}
              {propertyData.ITSO_AssessmentYear}
            </Typography>
          </Typography>{" "}
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            Property Type <br />
            <Typography color="text.disabled">
              {" "}
              {propertyData.PropertySubType}
            </Typography>
          </Typography>{" "}
        </Box>
        <Typography variant="h2" color="text.secondary" sx={{ pt: 3 }}>
          Public Remarks
        </Typography>
        <Typography variant="body2" color="text.disabled">
          {propertyData.PublicRemarks}
        </Typography>
      </Container>
    </>
  );
};

export default PropertyDetailPage;
