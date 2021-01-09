import React from 'react';

import './Button.css';

const ButtonTemplate = ({ colorScheme, text, btnType, clickHandler }) => {
  return (
    <span
      onClick={() => clickHandler()}
      className={`btn btn-${colorScheme} ${
        btnType === 'normal' ? '' : 'round'
      }`}
    >
      {text}
    </span>
  );
};
ButtonTemplate.defaultProps = {
  colorScheme: 'white',
  text: 'Click Me',
  btnType: 'normal',
};

export default ButtonTemplate;
