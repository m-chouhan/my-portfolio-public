import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        title: {
            fontFamily: 'Cursive, sans-serif',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#3f51b5',
        },
        // Define other typography variants if needed
    },
});

export default theme;