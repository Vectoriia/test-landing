import { createTheme, outlinedInputClasses } from '@mui/material';

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
    MuiCircularProgress: {
      styleOverrides: {
        circle: {
          color: '#FF4931',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          [`&.${outlinedInputClasses.root}`]: {
            padding: '1.3rem 1.6rem',
            borderRadius: '1.2rem',
            border: 'none',
            backgroundColor: '#F1F1F1',
            fontFamily: 'Linotte, sans-serif',
            fontSize: '1.8rem',
            fontWeight: 400,
            lineHeight: '120%',
            color: '#000000',
            '&:hover': {
              border: 'none',
              backgroundColor: '#fbfcfc',
            },
            '&.Mui-error': {
              border: 'none',
              backgroundColor: '#FFEEEC',
              color: '#FF4931',
            },
            '&.Mui-focused': {
              padding: '1.2rem 1.5rem',
              border: '0.1rem solid #000000',
              backgroundColor: '#ffffff',
              color: '#000000',
            },
            fieldset: {
              border: 'none',
              top: 0,
              legend: {
                display: 'none',
              },
            },
          },
          '& input::placeholder': {
            fontFamily: 'Linotte, sans-serif',
            color: '#B4B6BB',
            opacity: 1,
            fontSize: '1.8rem',
            fontWeight: 400,
            lineHeight: '120%',
          },
        },
        input: {
          [`&.${outlinedInputClasses.input}`]: {
            padding: 0,
          },
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
    h2: {
      fontFamily: 'Linotte, sans-serif',
      fontSize: '2.4rem',
      fontWeight: 700,
      lineHeight: '120%',
      color: '#000000',
    }, //h2
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
    subtitle1: {
      fontFamily: 'Linotte, sans-serif',
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: '120%',
      color: '#000000',
    },
  },
});

export default theme;
