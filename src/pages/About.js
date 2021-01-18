import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PageHeaderText from '../components/PageHeaderText/PageHeaderText';
import AnimatedBar from '../components/AnimatedBar/AnimatedBar';

import Aboutme from '../components/AboutMe/Aboutme';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '8rem',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} direction='column' className={classes.root}>
      <Grid item container spacing={0} xs={12}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <PageHeaderText subheading='Get to know me' headline='About Me' />
          <AnimatedBar />
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Aboutme />
    </Grid>
  );
};

export default About;
