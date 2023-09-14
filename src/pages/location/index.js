// CityCard.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
 const city = [
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

const CityCard = ({ city }) => {
  return (
    <Link href={`/location/${city}`}>
        <Card>
          <CardContent>hello
            <Typography variant="h5">{city}</Typography>
          </CardContent>
        </Card>
    </Link>
  );
};

export default CityCard;
