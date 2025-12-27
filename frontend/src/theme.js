import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0a192f', // Deep Navy
      light: '#303f60',
      dark: '#000005',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#64ffda', // Teal accent
      light: '#9effff',
      dark: '#14cba8',
      contrastText: '#000000',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    title: {
      fontFamily: "'Montserrat', 'Roboto', sans-serif",
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#0a192f',
    },
    h1: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
      color: '#0a192f',
    },
    body1: {
      lineHeight: 1.7,
      color: '#334155', // Slate 700
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
