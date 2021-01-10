import React from 'react';
import { connect } from 'react-redux';

import LandingText from '../components/LandingText/LandingText';
import Button from '../components/Button/Button';

const Home = ({ darkMode }) => {
  const clickHandler = () => {
    return;
  };
  return (
    <div>
      <LandingText mode={darkMode ? 'dark' : 'light'}>
        <Button
          colorScheme={darkMode ? 'white' : 'black'}
          text='Contact Me'
          clickHandler={clickHandler}
        />
      </LandingText>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};
export default connect(mapStateToProps)(Home);
