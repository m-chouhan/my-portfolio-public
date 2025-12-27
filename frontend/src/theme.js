import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f8f9fa', // Very light gray for cards/sections
    },
    primary: {
      main: '#000000', // Black primary for strong contrast
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3d5afe', // Vibrant Blue for accents
      contrastText: '#ffffff',
    },
    text: {
      primary: '#1a1a1a', // Nearly black
      secondary: '#666666',
    },
    divider: '#eaeaea',
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 900,
      letterSpacing: '-0.03em',
      fontSize: '3.5rem',
      color: '#000000',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 600,
      fontFamily: "'Inter', sans-serif",
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '0.875rem',
      color: '#666666',
    },
    body1: {
      lineHeight: 1.8,
      fontSize: '1.05rem',
      color: '#333333',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      borderRadius: 0, // Sharp edges for modern brutalist/minimalist feel
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4, // Slight rounding
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#000000',
            color: '#ffffff',
          },
        },
        outlined: {
          borderWidth: '1px',
          borderColor: '#000000',
          color: '#000000',
          '&:hover': {
            borderWidth: '1px',
            backgroundColor: '#000000',
            color: '#ffffff',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #eaeaea',
        },
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 4,
          backgroundColor: '#f0f0f0',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
