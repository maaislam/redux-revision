import React from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

const Modal = ({ children, clickHandler }) => {
  return ReactDOM.createPortal(
    <div className='root' onClick={() => clickHandler(false)}>
      <div className='close'></div>
      <div className='modal-children' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
