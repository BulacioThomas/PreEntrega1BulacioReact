import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardProductos = ({ img, name, precio, backgroundColor }) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor }}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="TV" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProductos;
