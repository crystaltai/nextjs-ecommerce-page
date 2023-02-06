import { Autocomplete, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import Box from '@mui/system/Box';
import { FilterCategory, FilterHeader } from './FilterBar.styles';

function FilterBar({ coffeeData, uniqueRoastTypes, uniqueRoastLevels, uniqueRoastOrigins }) {
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
