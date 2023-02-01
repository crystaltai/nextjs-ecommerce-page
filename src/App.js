import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Header from './components/Header/Header';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './components/Product/Product';
import coffeeData from './constants';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Header />
        <Box sx={{ flexGrow: 1, padding: '50px' }}>
          <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {coffeeData.map((coffee, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <Product
                  key={coffee.name}
                  name={coffee.name}
                  notes={coffee.notes}
                  price={coffee.price}
                  picture={coffee.picture}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
