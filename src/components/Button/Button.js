import React from 'react';

import './Button.css';

const ButtonTemplate = ({ colorScheme, text, btnType, clickHandler, type }) => {
  return (
    <button
      type={type || 'submit'}
      onClick={() => clickHandler()}
      className={` btn-${colorScheme} ${
        btnType === 'normal' ? 'btn' : 'round'
      }`}
    >
      {text}
    </button>
  );
};
ButtonTemplate.defaultProps = {
  colorScheme: 'white',
  text: 'Click Me',
  btnType: 'normal',
};

export default ButtonTemplate;
