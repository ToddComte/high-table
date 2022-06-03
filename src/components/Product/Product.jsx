import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconBotton,
} from "@material-ui/core";
import { AddShoppingCart, CallMissedSharp } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";

const Product = () => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="" title={Product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {Product.name}
            <Typography variant="h5">{Product.price}</Typography>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
