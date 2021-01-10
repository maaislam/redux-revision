import React from 'react';

import './Header.css';

const MobileHeader = ({ toggleHandler, status, mode }) => {
  const menuColor = mode === 'dark' ? 'light-mobile-menu' : 'dark-mobile-menu';

  return (
    <div
      className={`menu-icon ${status ? 'active' : ''}`}
      onClick={() => toggleHandler()}
    >
      <span className={`line-1 ${menuColor}`}></span>
      <span className={`line-2 ${menuColor}`}></span>
      <span className={`line-3 ${menuColor}`}></span>
    </div>
  );
};

export default MobileHeader;
