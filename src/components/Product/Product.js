import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';

function Product({ name, notes, price, picture }) {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={0}>
      <CardActionArea>
        <CardMedia component='img' height='345' src={picture} alt={name} />
        <Typography variant='h6'>{name}</Typography>
      </CardActionArea>
    </Card>
  );
}

export default Product;
