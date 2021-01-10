import React from 'react';
import { CssBaseline, Paper } from '@material-ui/core';

import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import DarkModeToggle from '../components/Button/DarkModeToggle';
import SocialBtn from '../components/Button/SocialBtn';
import Header from './Header/Header';

import BackgroundDark from '../images/heroimage7-lg.jpg';
import BackgroundLight from '../images/heroimage8-lg.jpg';

import Home from '../pages/Home';

const headerItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

const useStyle = makeStyles({
  root: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  rootDark: {
    backgroundImage: `url(${BackgroundDark})`,
    backgroundColor: '#101010',
    height: '100vh',
  },
  rootLight: {
    backgroundImage: `linear-gradient(to right bottom,
      rgba(220, 233, 218, 0.4),
      rgba(230, 230, 230, 0.4)),url(${BackgroundLight})`,
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
        className={`${mode === 'dark' ? classes.rootDark : classes.rootLight} ${
          classes.root
        } `}
      >
        <Header headerItems={headerItems} mode={mode} />

        <DarkModeToggle mode={mode} />
        <SocialBtn socialSite='github' />
        <SocialBtn socialSite='linkedin' />
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
