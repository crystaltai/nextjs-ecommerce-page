import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const FilterHeader = styled(Typography)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(4)};
    color: ${theme.text.primary};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: 600;
  `
);

const FilterCategory = styled(Typography)(
  ({ theme }) => `
    margin-top: ${theme.spacing(4)};
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.text.primary};
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-weight: 500;
  `
);

export { FilterCategory, FilterHeader };
