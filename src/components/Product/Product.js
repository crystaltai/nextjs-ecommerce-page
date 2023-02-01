import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Price, RoastName, TastingNotes } from './Product.styles';
import Box from '@mui/system/Box';

function Product({ name, notes, price, picture }) {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={0}>
      <CardActionArea>
        <CardMedia component='img' height='345' src={picture} alt={name} />
        <Box>
          <RoastName>{name}</RoastName>
        </Box>
        <Box>
          {notes.map((note, index) => (
            <TastingNotes>{note} </TastingNotes>
          ))}
        </Box>
        <Box>
          <Price>${price}</Price>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default Product;
