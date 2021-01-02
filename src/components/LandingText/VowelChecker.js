import React from 'react';

const VowelChecker = ({ string }) => {
  const checker = (str = '') => {
    if (
      str.charAt(0) === 'A' ||
      str.charAt(0) === 'E' ||
      str.charAt(0) === 'I' ||
      str.charAt(0) === 'O' ||
      str.charAt(0) === 'U'
    ) {
      return 'an ';
    }
    return 'a ';
  };

  return <>{checker(string)}</>;
};

export default VowelChecker;
