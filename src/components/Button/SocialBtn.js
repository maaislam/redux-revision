import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';

import Button from './Button';
import { setDarkMode } from '../../actions';
import './Button.css';

const SocialBtn = ({ darkMode, socialSite }) => {
  const [icon, setIcon] = useState({});

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      if (socialSite === 'github') {
        setIcon(icons.githubIcon);
      } else if (socialSite === 'linkedin') {
        setIcon(icons.linkedinIcon);
      }
    }

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, [darkMode]);

  const icons = {
    githubIcon: {
      link: 'https://github.com/maaislam',
      image: (
        <FaGithubAlt
          color={darkMode ? '#333' : ''}
          size={32}
          style={{ paddingTop: '5px' }}
        />
      ),
    },

    linkedinIcon: {
      link: 'https://www.linkedin.com/in/arafat-i-24689236/',
      image: (
        <FaLinkedinIn
          color={darkMode ? '#0077B5' : ''}
          size={32}
          style={{ paddingTop: '5px' }}
        />
      ),
    },
  };

  const clickHandler = () => {
    window.open(icon.link, '_blank');
  };

  return (
    <div className={`pos-${socialSite === 'github' ? 'github' : 'linkedin'}`}>
      <Button
        colorScheme={darkMode ? 'white' : 'black'}
        text={icon.image}
        clickHandler={clickHandler}
        btnType='round'
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, { setDarkMode })(SocialBtn);
