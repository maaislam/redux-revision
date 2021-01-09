import React from 'react';
import { connect } from 'react-redux';
import { FaCloudMoon } from 'react-icons/fa';
import { CgSun } from 'react-icons/cg';
import Button from './Button';
import { setDarkMode } from '../../actions';
import './Button.css';

const DarkModeToggle = ({ setDarkMode, darkMode }) => {
  const clickHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='btn-dark-mode'>
      <Button
        colorScheme={darkMode ? 'white' : 'black'}
        text={
          !darkMode ? (
            <FaCloudMoon size={32} style={{ paddingTop: '5px' }} />
          ) : (
            <CgSun color='#101010' size={32} style={{ paddingTop: '5px' }} />
          )
        }
        clickHandler={clickHandler}
        btnType='round'
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, { setDarkMode })(DarkModeToggle);
