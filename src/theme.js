import { createTheme } from '@mui/material/styles';

// custom theme for this app
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5E81AC',
    },
    secondary: {
      main: '#8FBCBB',
      contrastText: '#ECEFF4',
    },
    background: {
      default: '#ECEFF4',
    },
    text: {
      primary: '#2E3440',
      secondary: '#3B4252',
    },
    error: {
      main: '#BF616A',
    },
    warning: {
      main: '#EBCB8B',
    },
    info: {
      main: '#88C0D0',
    },
    success: {
      main: '#A3BE8C',
    },
    grey: {
      200: '#E5E9F0',
      300: '#D8DEE9',
      400: '#4C566A',
      500: '#434C5E',
      600: '#3B4252',
      700: '#2E3440',
    },
    divider: '#3B4252',
  },
  text: {
    primary: '#2E3440',
    secondary: '#434C5E',
  },
  components: {
    // Buttons
    MuiButton: {
      defaultProps: {
        disableElevation: true, // Disable button shadow
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // Disable ripple effect when clicked
      },
    },
  },
});

export default theme;
