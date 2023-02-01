import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const RoastName = styled(Typography)(
  ({ theme }) => `
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.text.primary};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  `
);

const TastingNotes = styled(Typography)(
  ({ theme }) => `
    margin-top: ${theme.spacing(1)};  
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.text.secondary};
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 500;
    display: inline;
  `
);

const Price = styled(Typography)(
  ({ theme }) => `
    margin-top: ${theme.spacing(1)};  
    color: ${theme.text.primary};
    letter-spacing: 0.2rem;
    font-weight: 500;
  `
);

export { Price, RoastName, TastingNotes };
