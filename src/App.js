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
import { useEffect, useState } from 'react';

// Filters object
const filters = {};

// Filter bags for all unique values + assign false active - Roast Types
let uniqueRoastTypes = coffeeData.map(bag => bag.details.type);
uniqueRoastTypes = uniqueRoastTypes.filter((type, index) => uniqueRoastTypes.indexOf(type) === index);
// const uniqueRoastTypesActive = {};
uniqueRoastTypes.forEach(e => {
  filters[e] = false;
});

// Filter bags for all unique values + assign false active - Roast Level
let uniqueRoastLevels = coffeeData.map(bag => bag.details.roast);
uniqueRoastLevels = uniqueRoastLevels.filter((type, index) => uniqueRoastLevels.indexOf(type) === index);
// const uniqueRoastLevelsActive = {};
uniqueRoastLevels.forEach(e => {
  filters[e] = false;
});

// Filter bags for all unique values + assign false active - Roast Origin
let uniqueRoastOrigins = coffeeData.map(bag => bag.details.origin);
uniqueRoastOrigins = uniqueRoastOrigins.filter((type, index) => uniqueRoastOrigins.indexOf(type) === index);
// const uniqueRoastOriginsActive = {};
uniqueRoastOrigins.forEach(e => {
  filters[e] = false;
});

function App() {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredCoffeeData, setFilteredCoffeeData] = useState(coffeeData);
  console.log(activeFilters);

  // Toggle filter Active - Roast Types
  const toggleFilter = e => {
    const { name, checked } = e.target;
    if (checked === true) {
      setSelectedFilters(prevObj => ({ ...prevObj, [name]: true }));
    } else {
      setSelectedFilters(prevObj => ({ ...prevObj, [name]: false }));
    }
  };

  // Everytime there's a change in state for selectedFilters, update activeFilters
  useEffect(() => {
    //TODO: Add keys of active filters to array
    const addActiveFilters = () => {
      let selectedFiltersKeys = [];
      for (let prop in selectedFilters) {
        if (selectedFilters[prop] === true) {
          selectedFiltersKeys.push(prop);
        }
      }
      console.log(selectedFiltersKeys);
      return selectedFiltersKeys;
    };

    let activeFiltersList = addActiveFilters();
    setActiveFilters(activeFiltersList);
  }, [selectedFilters]);

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
              toggleFilter={toggleFilter}
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
