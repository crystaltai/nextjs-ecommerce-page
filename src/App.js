import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Header from './components/Header/Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Product from './components/Product/Product';
import coffeeData from './constants';
import './App.css';
import FilterBar from './components/FilterBar/FilterBar';

// Filters object
const filters = { type: {}, roast: {}, origin: {} };

// Filter bags for all unique values + assign false active - Roast Types
let uniqueRoastTypes = coffeeData.map(bag => bag.details.type);
uniqueRoastTypes = uniqueRoastTypes.filter((type, index) => uniqueRoastTypes.indexOf(type) === index);
uniqueRoastTypes.forEach(e => {
  filters.type[e] = false;
});

// Filter bags for all unique values + assign false active - Roast Level
let uniqueRoastLevels = coffeeData.map(bag => bag.details.roast);
uniqueRoastLevels = uniqueRoastLevels.filter((type, index) => uniqueRoastLevels.indexOf(type) === index);
uniqueRoastLevels.forEach(e => {
  filters.roast[e] = false;
});

// Filter bags for all unique values + assign false active - Roast Origin
let uniqueRoastOrigins = coffeeData.map(bag => bag.details.origin);
uniqueRoastOrigins = uniqueRoastOrigins.filter((type, index) => uniqueRoastOrigins.indexOf(type) === index);
uniqueRoastOrigins.forEach(e => {
  filters.origin[e] = false;
});

function App() {
  // Manage state for checked filters by category: Type, Roast, Origin ------------
  const [checkedTypes, setCheckedTypes] = useState(filters.type);
  const [checkedRoasts, setCheckedRoasts] = useState(filters.roast);
  const [checkedOrigins, setCheckedOrigins] = useState(filters.origin);

  // Toggle check/uncheck filters -------------------------------------------------
  // Type
  const handleToggleType = e => {
    const { name, checked } = e.target;
    setCheckedTypes({ ...checkedTypes, [name]: checked });
  };

  // Roast
  const handleToggleRoast = e => {
    const { name, checked } = e.target;
    setCheckedRoasts({ ...checkedRoasts, [name]: checked });
  };

  // Origin
  const handleToggleOrigin = e => {
    const { name, checked } = e.target;
    setCheckedOrigins({ ...checkedOrigins, [name]: checked });
  };

  // Apply filters ----------------------------------------------------------------
  const handleFilter = () => {
    // Create an array for filtered items and set to coffeeData
    let filteredItems = coffeeData;

    // If any Type filters are checked, apply filter to filteredItems
    if (Object.values(checkedTypes).includes(true)) {
      filteredItems = filteredItems.filter(item => {
        return Object.keys(checkedTypes).some(filter => {
          return checkedTypes[filter] && item.details.type === filter;
        });
      });
    }

    // If any Roast filters are checked, apply filter to filteredItems
    if (Object.values(checkedRoasts).includes(true)) {
      filteredItems = filteredItems.filter(item => {
        return Object.keys(checkedRoasts).some(filter => {
          return checkedRoasts[filter] && item.details.roast === filter;
        });
      });
    }

    // If any Origin filters are checked, apply filter to filteredItems
    if (Object.values(checkedOrigins).includes(true)) {
      filteredItems = filteredItems.filter(item => {
        return Object.keys(checkedOrigins).some(filter => {
          return checkedOrigins[filter] && item.details.origin === filter;
        });
      });
    }

    // Return final array of filtered items
    return filteredItems;
  };

  const filteredCoffeeData = handleFilter();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        {/* Header */}
        <Header />
        {/* Main */}
        <Box sx={{ display: 'flex' }}>
          {/* Filter Section */}
          <Box sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
            <FilterBar
              coffeeData={coffeeData}
              uniqueRoastTypes={uniqueRoastTypes}
              uniqueRoastLevels={uniqueRoastLevels}
              uniqueRoastOrigins={uniqueRoastOrigins}
              handleToggleType={handleToggleType}
              handleToggleRoast={handleToggleRoast}
              handleToggleOrigin={handleToggleOrigin}
            />
          </Box>
          {/* Product Listings */}
          <Box sx={{ flexGrow: 2 }}>
            <Container maxWidth='lg'>
              <Grid container sx={{}} spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {filteredCoffeeData.map((coffee, index) => (
                  <Grid item xs={8} sm={4} md={4} key={index} sx={{ padding: '0' }}>
                    <Product
                      key={coffee.name}
                      name={coffee.name}
                      notes={coffee.notes}
                      price={coffee.price}
                      picture={coffee.picture}
                      type={coffee.details.type}
                      roast={coffee.details.roast}
                      origin={coffee.details.origin}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
