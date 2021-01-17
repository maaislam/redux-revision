import { createMuiTheme } from '@material-ui/core/styles';

const theme = (mode) => {
  return createMuiTheme({
    palette: {
      type: mode,
      success: {
        main: '#009E66',
      },
      background: {
        paper: mode === 'dark' ? '#101010' : '#cccccc',
      },
    },

    typography: {
      fontFamily: ['Poppins'].join(','),
      h1: {
        fontSize: '4.2rem',
        fontWeight: '700',
        '@media (max-width:600px)': {
          fontSize: '3.2rem',
        },
      },
      h6: {
        fontSize: '1rem',
        '@media (max-width:960px)': {
          fontSize: '1.6rem',
        },
      },
    },
  });
};

export default theme;
