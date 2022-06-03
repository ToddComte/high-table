import React from "react";
import Grid from "@material-ui/core";

const products = [
  { id: 1, name: "glock", description: "Gun go bang bang." },
  { id: 2, name: "Ammo", description: "The things that go into the Gun." },
];

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <product product={product} />
        </Grid>
      ))}
    </Grid>
  </main>;
};

export default Products;
