import { useCallback, useEffect, useState } from "react";
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
import axios from "axios";
import Head from "next/head";

const CondoPage = () => {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.bridgedataoutput.com/api/v2/OData/itso/Property?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}&$top=10`
      )
      .then((response) => {
        setPropertyData(response.data.value);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const lineStyle = {
    width: "100px",
    height: "2px",
    backgroundColor: "#BD0800",
    margin: "20px 0",
  };

  return (
    <div>
      <Head>
        <title>Projects | MyCondoPro</title>
      </Head>
      <Container sx={{ pt: 6 }}>
        <Grid container spacing={2} sx={{ pt: 6 }}>
          {propertyData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Link
                href={`/project/${card.ListingKey}`}
                style={{ textDecoration: "none" }}
              >
                <Card>
                  {card.Media && card.Media.length > 0 && (
                    <CardMedia
                      component="img"
                      alt={card.title}
                      height="140"
                      src={card.Media[0].MediaURL} 
                    />
                  )}

                  <CardContent>
                    <Typography variant="h6" component="div">
                      {card.BuildingName}
                    </Typography>
                    <Typography variant="subtitle1">
                      {card.AssociationName2}
                    </Typography>
                    <Typography variant="subtitle1">
                      $ {card.ListPrice}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ pt: 2 }}>
                      {card.City},{card.StateOrProvince}
                    </Typography>
                    <Typography variant="subtitle2">
                      {card.ListAgentFullName}
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
