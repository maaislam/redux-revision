import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import './Header.css';
import MobileHeader from './MobileHeader';
import MenuItem from './MenuItem';
import logoWhite from '../../logo/logo-white.svg';
import logoBlack from '../../logo/logo-black.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',

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
  const theme = useTheme();
  const screenMedium = useMediaQuery(theme.breakpoints.down('sm'));
  const [menu, setMenu] = useState(false);

  const toggleHandler = () => {
    setMenu(!menu);
  };

  const renderHeader = () => {
    if (screenMedium) {
      return (
        <MobileHeader
          items={headerItems}
          toggleHandler={toggleHandler}
          status={menu}
          mode={mode}
        />
      );
    } else {
      return <MenuItem items={headerItems} />;
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid
          container
          item
          xs={12}
          alignItems='center'
          justify='space-between'
        >
          <Grid item xs={6} sm={4} md={3}>
            <div>
              <NavLink to='/' exact className={classes.anchor}>
                <img
                  src={mode === 'dark' ? logoWhite : logoBlack}
                  alt='Arafat Islam'
                />
              </NavLink>
            </div>
          </Grid>

          <Grid
            container
            item
            xs={6}
            md={8}
            alignItems='center'
            justify='flex-end'
          >
            {renderHeader()}
          </Grid>
        </Grid>
      </Grid>
      <span className={`menu-mobile slide-${menu === false ? 'out' : 'in'}`}>
        <MenuItem items={headerItems} />
      </span>
    </div>
  );
};

export default Header;
