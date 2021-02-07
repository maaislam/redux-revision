import React from 'react';

import './Button.css';

const ButtonTemplate = ({
  colorScheme,
  text,
  btnType,
  clickHandler,
  type,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type || 'submit'}
      onClick={() => clickHandler()}
      className={` btn-${colorScheme} ${
        btnType === 'normal' ? 'btn' : 'round'
      }`}
    >
      {props.disabled ? 'Sending...' : text}
    </button>
  );
};
ButtonTemplate.defaultProps = {
  colorScheme: 'white',
  text: 'Click Me',
  btnType: 'normal',
};

export default ButtonTemplate;
