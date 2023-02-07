import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CoffeeIcon from '@mui/icons-material/CoffeeMaker';
import CartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <AppBar position='static' elevation={0} sx={{ bgcolor: 'grey.700', marginBottom: '30px' }}>
      <Toolbar>
        <CoffeeIcon sx={{ mr: 1 }} />
        <Typography
          variant='h6'
          noWrap
          component='a'
          href='/'
          sx={{
            mr: 2,
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Coffee Beans
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton color='inherit'>
            <Badge badgeContent={1} color='error'>
              <CartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
