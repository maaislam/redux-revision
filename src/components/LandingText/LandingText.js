import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@material-ui/core';

import './LandingText.css';

const LandingText = ({ skills, fullName, mode, children }) => {
  const [skillCounter, setSkillCounter] = useState(0);

  const skillRef = useRef();

  useEffect(() => {
    const trial = setInterval(() => {
      if (skillRef.current.clientWidth < 100) {
        setSkillCounter(skillCounter + 1);
      }
      //console.log(skillRef.current.clientWidth);
    }, 1200);

    return () => {
      clearInterval(trial);
    };
  }, [skillCounter]);

  const vowelChecker = (str) => {
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

  return (
    <div className='centerComponent'>
      <Typography variant='h1' color='initial' display='inline' gutterBottom>
        {fullName}
      </Typography>

      <div className='flexCenter secondary-margin'>
        <span>
          <Typography variant='h4'>
            I'm&nbsp;
            {vowelChecker(
              skills[skillCounter < skills.length ? skillCounter : 0]
            )}
          </Typography>
        </span>
        &nbsp;&nbsp;
        <span
          className={`componentStyles ${
            mode === 'light' ? 'dark-cursor' : 'light-cursor'
          }`}
          ref={skillRef}
        >
          <Typography variant='h4'>
            {` ${
              skillCounter < skills.length
                ? skills[skillCounter]
                : setSkillCounter(0)
            }`}
          </Typography>
        </span>
      </div>
      {children}
    </div>
  );
};

LandingText.defaultProps = {
  skills: ['Engineer', 'Developer', 'Freelancer'],
  fullName: 'Arafat Islam',
  mode: 'light',
};

export default LandingText;
