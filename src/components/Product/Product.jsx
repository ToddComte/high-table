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

const Product = (product) => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="" title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
            <Typography variant="h5">{product.price}</Typography>
          </Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing classes={classes.cardActions}>
        <IconBotton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconBotton>
      </CardActions>
    </Card>
  );
};

export default Product;
