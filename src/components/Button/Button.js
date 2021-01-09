import React from 'react';

import './Button.css';

const ButtonTemplate = ({ colorScheme, text, btnType, clickHandler }) => {
  return (
    <span
      onClick={() => clickHandler()}
      className={` btn-${colorScheme} ${
        btnType === 'normal' ? 'btn' : 'round'
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
