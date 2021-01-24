import React, { useEffect, useState, useRef } from 'react';
import { Typography } from '@material-ui/core';

import VowelChecker from './VowelChecker';
import './LandingText.css';

const LandingText = ({ skills, fullName, mode, children }) => {
  const [skillCounter, setSkillCounter] = useState(0);

  const skillRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      if (skillRef.current.clientWidth < 10) {
        setSkillCounter(skillCounter + 1);
      }
      //console.log(skillRef.current.clientWidth);
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, [skillCounter]);

  const currentSkillIndex = skillCounter < skills.length ? skillCounter : 0;

  return (
    <div className='centerComponent'>
      <Typography variant='h1' color='initial'>
        {fullName}
      </Typography>

      <div className='flexCenter secondary-margin'>
        <span>
          <Typography variant='h4'>
            I'm&nbsp;
            <VowelChecker string={skills[currentSkillIndex]} />
          </Typography>
        </span>
        &nbsp;&nbsp;
        <span
          className={`componentStyles ${
            mode === 'light' ? 'dark-cursor' : 'light-cursor'
          }`}
          ref={skillRef}
        >
          <Typography variant='h4' display='inline' align='left'>
            {`${
              skillCounter < skills.length
                ? skills[skillCounter]
                : setSkillCounter(0)
            }`}
          </Typography>
        </span>
      </div>
      <div className='centerComponentX secondary-margin'>{children}</div>
    </div>
  );
};

LandingText.defaultProps = {
  skills: ['Engineer', 'Developer', 'Freelancer'],
  fullName: 'Arafat Islam',
  mode: 'dark',
};

export default LandingText;
