import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import './Header.css';
import logo from '../../logo/logo.svg';
import logoBlack from '../../logo/logo-black.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1rem 2rem',
  },
  div: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  anchor: {
    textDecoration: 'none',
  },
}));

const Header = function DenseAppBar({ headerItems, mode }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={12} alignItems='center'>
          <Grid item xs={2}>
            <div>
              <NavLink to='/' exact className={classes.anchor}>
                <img
                  src={mode === 'dark' ? logo : logoBlack}
                  alt='Arafat Islam'
                />
              </NavLink>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.div}></div>
          </Grid>
          <Grid container item xs={6} alignItems='center'>
            <Grid item xs={2}>
              <div className={classes.div}></div>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.div}>
                <NavLink
                  to='/about'
                  exact
                  className={`${classes.anchor} cool-link`}
                >
                  <Typography variant='subtitle1' color='textPrimary'>
                    {headerItems.item1}
                  </Typography>
                </NavLink>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.div}>
                <NavLink
                  to='/resume'
                  exact
                  className={`${classes.anchor} cool-link`}
                >
                  <Typography variant='subtitle1' color='textPrimary'>
                    {headerItems.item2}
                  </Typography>
                </NavLink>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.div}>
                <NavLink
                  to='/portfolio'
                  exact
                  className={`${classes.anchor} cool-link`}
                >
                  <Typography
                    variant='subtitle1'
                    color='textPrimary'
                    align='center'
                  >
                    {headerItems.item3}
                  </Typography>
                </NavLink>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.div}>
                <NavLink
                  to='/blog'
                  exact
                  className={`${classes.anchor} cool-link`}
                >
                  <Typography variant='subtitle1' color='textPrimary'>
                    {headerItems.item4}
                  </Typography>
                </NavLink>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.div}>
                <NavLink
                  to='/contact'
                  exact
                  className={`${classes.anchor} cool-link`}
                >
                  <Typography variant='subtitle1' color='textPrimary'>
                    {headerItems.item5}
                  </Typography>
                </NavLink>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
