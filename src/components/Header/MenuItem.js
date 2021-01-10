import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import './Header.css';

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

const MenuItem = ({ items }) => {
  const classes = useStyles();

  const adjustedItems = items.length % 2 !== 0 ? ['', ...items] : items;
  const renderItems = adjustedItems.map((item) => {
    return (
      <Grid item xs={2}>
        <div className={classes.div}>
          <NavLink
            to={`/${item}`.toLowerCase()}
            exact
            className={`${classes.anchor} cool-link`}
          >
            <Typography variant='subtitle1' color='textPrimary'>
              {item}
            </Typography>
          </NavLink>
        </div>
      </Grid>
    );
  });

  return <>{renderItems}</>;
};

export default MenuItem;
