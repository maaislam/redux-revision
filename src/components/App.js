import React from 'react';
import { CssBaseline, Grid, Switch, Paper } from '@material-ui/core';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { setDarkMode } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import LandingText from './LandingText/LandingText';
import AnimatedBar from './AnimatedBar/AnimatedBar';
import ButtonTemplate from './Button/Button';
import SkillOrEduListItem from './SkillOrEduListItem/SkillOrEduListitem';
import Header from './Header/Header';

const useStyle = makeStyles({
  rootDark: {
    backgroundColor: '#101010',
    height: '100vh',
  },
  rootLight: {
    backgroundColor: '#F5F5F5',
    height: '100vh',
  },
});

const App = ({ setDarkMode, darkMode }) => {
  const mode = 'dark'; //darkMode ? 'dark' : 'light';
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Paper
        square
        variant='outlined'
        className={mode === 'dark' ? classes.rootDark : classes.rootLight}
      >
        <Header />
        <Grid container spacing={1} xs={12}>
          <Grid item xs={2} spacing={1} />
          <Grid item xs={10} spacing={1}>
            <LandingText mode={mode}>
              <AnimatedBar sliderColor='#101010' />
              <ButtonTemplate />
              <SkillOrEduListItem />
            </LandingText>
          </Grid>
          <Grid item xs={2} spacing={1} />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, { setDarkMode })(App);
