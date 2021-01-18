import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './Header.css';
import MobileHeader from './MobileHeader';
import MenuItem from './MenuItem';
import logoWhite from '../../logo/logo-white.svg';
import logoBlack from '../../logo/logo-black.svg';

import { menuToggleVariant } from '../../animations/AnimationConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    padding: '1rem 2rem',
    zIndex: 100,
    transition: 'all 0.3s',
  },
  lockHeader: {
    backgroundColor: theme.palette.success.main,
    padding: '0.5rem 2rem',
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

const Header = ({ headerItems, mode, sticky }) => {
  const classes = useStyles();
  const theme = useTheme();
  const screenMedium = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef();

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      setMenu(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  });

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
      return <MenuItem items={headerItems} toggleHandler={toggleHandler} />;
    }
  };

  const renderMenu = () => {
    if (menu && screenMedium) {
      return (
        <motion.span
          initial='out'
          exit='out'
          animate='in'
          variants={menuToggleVariant}
          className='menu-mobile'
        >
          <MenuItem
            items={headerItems}
            screenMed={screenMedium}
            toggleHandler={toggleHandler}
          />
        </motion.span>
      );
    }
  };

  return (
    <div
      ref={ref}
      className={`${!sticky ? classes.lockHeader : ''} ${classes.root}`}
    >
      <Grid container spacing={3}>
        <Grid
          container
          item
          xs={12}
          alignItems='center'
          justify='space-between'
        >
          <Grid item xs={6} sm={4} md={2}>
            <div>
              <NavLink to='/' exact className={classes.anchor}>
                <img
                  src={mode === 'dark' ? logoWhite : logoBlack}
                  alt='arafat islam'
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
      <AnimatePresence>{renderMenu()}</AnimatePresence>
    </div>
  );
};

export default Header;
