import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { setStickyHeader } from '../../actions';
import { Typography } from '@material-ui/core';

import useOnScreen from '../../Hooks/useOnScreen';

const PageHeaderText = ({ subheading, headline, setStickyHeader }) => {
  const [onScreen, setOnScreen] = useState(null);

  const ref = useRef();

  const observed = useOnScreen(ref);
  useEffect(() => {
    setOnScreen(observed);
    setStickyHeader(onScreen);
  }, [observed, onScreen, setStickyHeader]);

  return (
    <div ref={ref}>
      <Typography
        variant='subtitle1'
        color='textSecondary'
        align='center'
        gutterBottom
      >
        {subheading}
      </Typography>
      <Typography variant='h3' color='textPrimary' align='center' gutterBottom>
        <b>{headline}</b>
      </Typography>
    </div>
  );
};

export default connect(null, { setStickyHeader })(PageHeaderText);
