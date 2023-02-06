import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const FilterHeader = styled(Typography)(
  ({ theme }) => `
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.text.primary};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: 600;
  `
);

export { FilterHeader };
