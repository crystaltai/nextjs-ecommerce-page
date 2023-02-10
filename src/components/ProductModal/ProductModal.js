import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ProductModal({ open, handleClose, type, roast, origin }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <Typography>{type}</Typography>
        <Typography>{roast}</Typography>
        <Typography>{origin}</Typography>
      </Box>
    </Modal>
  );
}

export default ProductModal;
