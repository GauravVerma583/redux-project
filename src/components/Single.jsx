import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Single() {
  const [single, setSingle] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingle(data);
      });
  });
  return (
    <>
      <Card sx={{ display: "flex", marginTop: "100px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {single.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {single.description}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              price: {single.price}$
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              rating: {single.rating && single.rating.rate}/5
            </Typography>
            <Button variant="contained">Add to cart</Button>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={single.image}
          alt="Live from space album cover"
        />
      </Card>
    </>
  );
}
