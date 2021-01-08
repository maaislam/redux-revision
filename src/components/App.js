import React from 'react';
import { CssBaseline, Paper } from '@material-ui/core';

import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import DarkModeToggle from '../components/Button/DarkModeToggle';
import Header from './Header/Header';
import Background from '../images/heroimage7-lg.jpg';

import Home from '../pages/Home';

const headerItems = {
  item1: 'About',
  item2: 'Resume',
  item3: 'Portfolio',
  item4: 'Blog',
  item5: 'Contact',
};

const useStyle = makeStyles({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  rootDark: {
    backgroundColor: '#101010',
    height: '100vh',
  },
  rootLight: {
    backgroundColor: '#F5F5F5',
    height: '100vh',
  },
});

const App = ({ darkMode }) => {
  const mode = darkMode ? 'dark' : 'light';
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Paper
        square
        variant='outlined'
        className={`${mode === 'dark' ? classes.rootDark : classes.rootLight} `}
      >
        <Header headerItems={headerItems} mode={mode} />
        <DarkModeToggle mode={mode} />
        <Home />
      </Paper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps)(App);
