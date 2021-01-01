import React from 'react';

import './Button.css';

const ButtonTemplate = ({ colorScheme, text }) => {
  return <span className={`btn btn-${colorScheme}`}>{text}</span>;
};
ButtonTemplate.defaultProps = {
  colorScheme: 'white',
  text: 'Click Me',
};

export default ButtonTemplate;
