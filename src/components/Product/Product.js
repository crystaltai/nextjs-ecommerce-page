// import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Price, RoastName, TastingNotes } from './Product.styles';
import Box from '@mui/system/Box';
import ProductModal from './ProductModal';

function Product({ name, notes, price, picture, type, roast, origin }) {
  // Modal open/close state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }} elevation={0}>
      <CardActionArea onClick={handleOpen}>
        <ProductModal
          open={open}
          handleClose={handleClose}
          name={name}
          notes={notes}
          price={price}
          picture={picture}
          type={type}
          roast={roast}
          origin={origin}
        />
        <CardMedia component='img' height='100%' src={picture} alt={name} />
        <Box sx={{ padding: '5px' }}>
          <RoastName>{name}</RoastName>
          <Box>
            {notes.map((note, index) => (
              <TastingNotes key={index}>{note} </TastingNotes>
            ))}
          </Box>
          <Price>${((price * 100) / 100).toFixed(2)}</Price>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default Product;
