import React from 'react';
import { connect } from 'react-redux';

import { motion } from 'framer-motion';
import { PageAnimation3 } from '../animations/AnimationConfig';

import LandingText from '../components/LandingText/LandingText';
import Button from '../components/Button/Button';

const Home = ({ darkMode }) => {
  const clickHandler = () => {
    return;
  };
  return (
    <motion.div initial='out' exit='out' animate='in' variants={PageAnimation3}>
      <LandingText mode={darkMode ? 'dark' : 'light'}>
        <Button
          colorScheme={darkMode ? 'green' : 'black'}
          text='Contact Me'
          clickHandler={clickHandler}
        />
      </LandingText>
    </motion.div>
  );
};
const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};
export default connect(mapStateToProps)(Home);
