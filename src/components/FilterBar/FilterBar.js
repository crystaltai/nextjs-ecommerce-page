import Box from '@mui/system/Box';
import { FilterHeader } from './FilterBar.styles';

function FilterBar() {
  return (
    <Box sx={{ minWidth: '300px' }}>
      <FilterHeader>Find your bag</FilterHeader>
    </Box>
  );
}

export default FilterBar;
