import React from 'react';
import {
  Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';

interface Props {
  products: Array<{id: number, name: string, price: number, image: string}>,
  addToOrder: Function
}

const ProductsList = function ({ products = [], addToOrder }: Props) {
  return (
    <Grid container spacing={2} sx={{ mt: '20px', mb: '20px' }}>
      {products.length ? products.map((product) => (
        <Grid key={product.id} item xs={12} sm={4}>
          <Card>
            <CardMedia alt={product.name} component="img" height="140" image={product.image} />
            <CardContent>
              <Typography component="div" variant="h5">
                {product.name}
              </Typography>
              <Typography component="div" variant="body2">
                {product.price}
                {' '}
                руб.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={addToOrder(product)}>Купить</Button>
            </CardActions>
          </Card>
        </Grid>
      )) : <Typography component="h2">Товара нет :С</Typography>}
    </Grid>
  );
};

export default ProductsList;
