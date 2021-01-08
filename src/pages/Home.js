import React from 'react';
import { connect } from 'react-redux';

import LandingText from '../components/LandingText/LandingText';
import Button from '../components/Button/Button';

const Home = ({ darkMode }) => {
  return (
    <div>
      <LandingText mode={darkMode ? 'dark' : 'light'}>
        <Button colorScheme={darkMode ? 'white' : 'blue'} text='Contact Me' />
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
