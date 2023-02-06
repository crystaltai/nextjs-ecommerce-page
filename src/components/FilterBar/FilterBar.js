import Box from '@mui/system/Box';
import { FilterCategory, FilterHeader } from './FilterBar.styles';

function FilterBar() {
  return (
    <Box sx={{ minWidth: '300px' }}>
      <FilterHeader>Find your roast</FilterHeader>
      {/* Search Bar */}
      <FilterCategory>Search</FilterCategory>
      {/* Roast Type */}
      <FilterCategory>Type</FilterCategory>
      {/* Roast Level */}
      <FilterCategory>Roast Level</FilterCategory>
      {/* Roast Origin */}
      <FilterCategory>Origin</FilterCategory>
    </Box>
  );
}

export default FilterBar;
