import React from 'react';
import { connect } from 'react-redux';

import { FaSun, FaCloudMoon } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';

import { setDarkMode } from '../../actions';
import './Button.css';
const useStyle = makeStyles({
  centerDivY: {
    position: 'fixed',
    left: '1%',
    top: '50%',
    transform: 'translate(-1%, -50%)',

    cursor: 'pointer',
  },
});

const DarkModeToggle = ({ setDarkMode, darkMode }) => {
  const classes = useStyle();
  if (darkMode) {
    return (
      <div onClick={() => setDarkMode(true)}>
        <FaSun size={32} className={classes.centerDivY} />
      </div>
    );
  } else {
    return (
      <div onClick={() => setDarkMode(false)}>
        <FaCloudMoon size={32} color='#101010' className={classes.centerDivY} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, { setDarkMode })(DarkModeToggle);
