import { Autocomplete, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import Box from '@mui/system/Box';
import { FilterCategory, FilterHeader } from './FilterBar.styles';
import coffeeData from '../../constants';

// Filter bags for all unique values - Roast Types
let uniqueRoastTypes = coffeeData.map(bag => bag.details.type);
uniqueRoastTypes = uniqueRoastTypes.filter((type, index) => uniqueRoastTypes.indexOf(type) === index);

// Filter bags for all unique values - Roast Level
let uniqueRoastLevels = coffeeData.map(bag => bag.details.roast);
uniqueRoastLevels = uniqueRoastLevels.filter((type, index) => uniqueRoastLevels.indexOf(type) === index);

// Filter bags for all unique values - Roast Origin
let uniqueRoastOrigins = coffeeData.map(bag => bag.details.origin);
uniqueRoastOrigins = uniqueRoastOrigins.filter((type, index) => uniqueRoastOrigins.indexOf(type) === index);

function FilterBar() {
  return (
    <Box sx={{ minWidth: '250px', marginLeft: '30px' }}>
      <FilterHeader>Find your roast</FilterHeader>
      {/* Search Bar */}
      <Autocomplete
        freeSolo
        id='search-bar'
        options={coffeeData.map(option => option.name)}
        renderInput={params => <TextField {...params} label='Search' />}
      />
      {/* Roast Type */}
      <FilterCategory>Type</FilterCategory>
      <FormGroup>
        {uniqueRoastTypes.map(type => (
          <FormControlLabel label={type} control={<Checkbox name={type} />} />
        ))}
      </FormGroup>
      {/* Roast Level */}
      <FilterCategory>Roast Level</FilterCategory>
      <FormGroup>
        {uniqueRoastLevels.map(level => (
          <FormControlLabel label={level} control={<Checkbox name={level} />} />
        ))}
      </FormGroup>
      {/* Roast Origin */}
      <FilterCategory>Origin</FilterCategory>
      <FormGroup>
        {uniqueRoastOrigins.map(origin => (
          <FormControlLabel label={origin} control={<Checkbox name={origin} />} />
        ))}
      </FormGroup>
    </Box>
  );
}

export default FilterBar;
