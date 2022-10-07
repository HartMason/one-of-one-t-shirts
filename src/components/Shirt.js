import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import midWest from "../image/midWest.jpg"

export default function Shirt({ shirt }) {
  // let { id } = useParams();
  // console.log(id);
  // let foundShirt = shirts.find((shirt) => shirt.shirt_id == shirt_id)
  // let shirtDescription = Object.values(foundShirt)

  console.log("shirt", shirt);
  return (
    <div
    style={{
      backgroundImage: `url(${midWest})`,
      maxWidth: "100%",
      height: "1000px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      margin: "0%",
    }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {/* {shirt.shirt_name} */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* <h1>{shirt.shirt_name}</h1>
            <h1>{shirt.shirt_price}</h1>
            <h1>{shirt.shirt_quantity}</h1> */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
