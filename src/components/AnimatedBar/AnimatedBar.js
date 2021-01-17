import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import './AnimatedBar.css';

const AnimatedBar = ({ barColor }) => {
  const { palette } = useTheme();

  const barBackColor = {
    backgroundColor: barColor || palette.success.main,
  };
  const sliderBackColor = {
    backgroundColor: palette.background.paper,
  };

  return (
    <div className='animated-bar' style={barBackColor}>
      <span className='bar-slider' style={sliderBackColor}></span>
      <span
        className='bar-slider secondSliderPosition'
        style={sliderBackColor}
      ></span>
    </div>
  );
};

export default AnimatedBar;
