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
        <Box sx={{ flexGrow: 1, padding: '100px' }}>
          <Grid container spacing={8}>
            {coffeeData.map(coffee => (
              <Grid item>
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
