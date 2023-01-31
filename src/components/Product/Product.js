import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function Product() {
  return (
    <Card variant='outlined' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          src='https://cdn.shopify.com/s/files/1/0035/9372/products/bellavistagesha_750x.png?v=1671229082'
          alt='coffee-bag-1'
        />
      </CardActionArea>
    </Card>
  );
}

export default Product;
