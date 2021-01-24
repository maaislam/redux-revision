import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { setStickyHeader } from '../actions';

import useOnScreen from '../Hooks/useOnScreen';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const SectionHeaderTex = ({ setStickyHeader }) => {
  const classes = useStyles();

  const [onScreen, setOnScreen] = useState(null);

  const ref = useRef();

  const observed = useOnScreen(ref);
  useEffect(() => {
    setOnScreen(observed);
    setStickyHeader(onScreen);

    return () => {};
  }, [observed, onScreen, setStickyHeader]);

  return (
    <div ref={ref}>
      <Divider className={classes.root} />
    </div>
  );
};

export default connect(null, { setStickyHeader })(SectionHeaderTex);
