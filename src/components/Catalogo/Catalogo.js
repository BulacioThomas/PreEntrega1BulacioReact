import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const Catalogo = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100px"
          height="300px"
          image={data.thumbnail}
          alt="pruducts"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Catalogo;
