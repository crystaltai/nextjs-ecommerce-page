import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Header from './components/Header/Header';
import Button from '@mui/material/Button';
import Product from './components/Product/Product';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Header />
        <Button variant='contained'>test</Button>
        <Product />
      </div>
    </ThemeProvider>
  );
}

export default App;
