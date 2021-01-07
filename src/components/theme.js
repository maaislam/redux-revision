import { createMuiTheme } from '@material-ui/core/styles';

const theme = (mode) => {
  return createMuiTheme({
    palette: {
      type: mode,
      background: {
        paper: mode === 'dark' ? '#161616' : '#fff',
      },
    },

    typography: {
      fontFamily: ['Poppins'].join(','),
      h1: {
        fontSize: '4.2rem',
        fontWeight: '700',
      },
    },
  });
};

export default theme;
