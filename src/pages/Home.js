import React from 'react';
import { connect } from 'react-redux';

import { motion } from 'framer-motion';
import { PageAnimation3 } from '../animations/AnimationConfig';
import { useHistory } from 'react-router-dom';
import LandingText from '../components/LandingText/LandingText';
import Button from '../components/Button/Button';

const Home = ({ darkMode }) => {
  let history = useHistory();
  const clickHandler = () => {
    history.push('/contact');
  };
  return (
    <motion.div
      initial='out'
      exit='out'
      animate='in'
      variants={PageAnimation3}
      style={{
        marginBottom: '10rem',
      }}
    >
      <LandingText mode={darkMode ? 'dark' : 'light'}>
        <Button
          colorScheme={'green'}
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
