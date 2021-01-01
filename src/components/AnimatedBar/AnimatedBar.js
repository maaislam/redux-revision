import React from 'react';
import './AnimatedBar.css';

const AnimatedBar = ({ barColor, sliderColor }) => {
  const barBackColor = {
    backgroundColor: barColor || ' #009e66',
  };
  const sliderBackColor = {
    backgroundColor: sliderColor || '#303030',
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
