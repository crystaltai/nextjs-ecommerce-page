import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Price, RoastName, TastingNotes } from './Product.styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  padding: 4,
  display: 'flex',
  gap: '20px',
};

// TODO: FINISH STYLING
function ProductModal({ open, handleClose, name, notes, price, picture, type, roast, origin }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <CardMedia
          component='img'
          height='100%'
          src={picture}
          alt={name}
          sx={{ maxWidth: '450px', borderRadius: '5px' }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <RoastName>{name}</RoastName>
          <Box>
            {notes.map((note, index) => (
              <TastingNotes key={index}>{note} </TastingNotes>
            ))}
          </Box>
          <Box>
            <Typography>Type: {type}</Typography>
            <Typography>Roast Level: {roast}</Typography>
            <Typography>Origin: {origin}</Typography>
          </Box>
          <Box>
            <Price>${((price * 100) / 100).toFixed(2)}</Price>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ProductModal;
