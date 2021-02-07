import React, { lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CssBaseline, Paper } from '@material-ui/core';

import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

import { AnimatePresence } from 'framer-motion';

import DarkModeToggle from '../components/Button/DarkModeToggle';
import SocialBtn from '../components/Button/SocialBtn';
import Header from './Header/Header';

import BackgroundDark from '../images/heroimage7-lg.jpg';
import BackgroundLight from '../images/heroimage8-lg.jpg';

import Loader from './Loader';

import { NotificationContainer } from 'react-notifications';
//import 'react-notifications/lib/notifications.css';
import '../helpers/showNotification.css';

const Home = lazy(() => import('../pages/Home'));
const Resume = lazy(() => import('../pages/Resume'));
const About = lazy(() => import('../pages/About'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Contact = lazy(() => import('../pages/Contact'));

const headerItems = ['Home', 'About', 'Resume', 'Portfolio', 'Contact'];

const useStyle = makeStyles({
  root: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflowX: 'hidden',
    height: '100vh',
  },
  rootDark: {
    backgroundImage: `url(${BackgroundDark})`,

    height: '100vh',
  },
  rootLight: {
    backgroundImage: `linear-gradient(to right bottom,
      rgba(220, 233, 218, 0.4),
      rgba(230, 230, 230, 0.4)),url(${BackgroundLight})`,

    height: '100vh',
  },
});

const App = ({ darkMode, stickyHeader }) => {
  const mode = darkMode ? 'dark' : 'light';

  const classes = useStyle();
  const location = useLocation();

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Paper
        square
        variant='outlined'
        className={`${
          location.pathname === '/'
            ? mode === 'dark'
              ? classes.rootDark
              : classes.rootLight
            : 'test'
        } ${classes.root} `}
      >
        <Header headerItems={headerItems} mode={mode} sticky={stickyHeader} />

        <DarkModeToggle mode={mode} />
        <SocialBtn socialSite='github' />
        <SocialBtn socialSite='linkedin' />
        <NotificationContainer />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Suspense fallback={<Loader />}>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/contact' component={Contact} />
            </Suspense>
          </Switch>
        </AnimatePresence>
      </Paper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
    stickyHeader: state.stickyHeader,
  };
};

export default connect(mapStateToProps)(App);
