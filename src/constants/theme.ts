import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          backgroundColor: '#FF4931',
          color: '#fff',
          height: '4.8rem',
          padding: '1.25rem 11.65rem',
          borderRadius: '10rem',
          fontFamily: 'Linotte, sans-serif',
          fontSize: '1.8rem',
          fontWeight: 700,
          lineHeight: '120%',
          textTransform: 'none',

          '&:hover': {
            backgroundColor: '#fa6652',
          },
          '&:disabled': {
            backgroundColor: '#B4B6BB',
            color: '#F1F1F1',
          },
        },
        containedSecondary: {
          backgroundColor: '#F1F1F1',
          color: '#000000',
          height: '4.8rem',
          width: '16.55rem',
          paddingTop: '1.3rem',
          paddingBottom: '1.3rem',
          paddingLeft: '0',
          paddingRight: '0',
          borderRadius: '10rem',
          fontFamily: 'Linotte, sans-serif',
          fontSize: '1.8rem',
          fontWeight: 400,
          lineHeight: '120%',

          '&:hover': {
            backgroundColor: '#e8e8e8',
          },
          '&:disabled': {
            color: '#B4B6BB',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#F1F1F1',
        },
        bar: {
          backgroundColor: '#FF4931',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Linotte, sans-serif',
    h1: {
      fontFamily: 'Linotte, sans-serif',
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: '120%',
      color: '#000000',
    }, //h1
    body1: {
      fontFamily: 'Linotte, sans-serif',
      fontSize: '1.8rem',
      fontWeight: 400,
      lineHeight: '120%',
      color: '#000000',
    },
    body2: {
      fontFamily: 'Linotte, sans-serif',
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: '120%',
      color: '#000000',
    },
  },
});

export default theme;
