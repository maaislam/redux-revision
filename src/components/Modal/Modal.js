import React from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

const Modal = ({ children, clickHandler }) => {
  return ReactDOM.createPortal(
    <div className='root' onClick={() => clickHandler(false)}>
      <div className='close'></div>
      {children}
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
