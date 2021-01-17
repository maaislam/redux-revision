import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AnimatedBar from '../components/AnimatedBar/AnimatedBar';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} direction='column' className={classes.root}>
      <Grid item container spacing={0} xs={12}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography
            variant='subtitle1'
            color='textSecondary'
            align='center'
            gutterBottom
          >
            Get to know me
          </Typography>
          <Typography
            variant='h3'
            color='textPrimary'
            align='center'
            gutterBottom
          >
            <b>About Me</b>
          </Typography>
          <AnimatedBar />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
};

export default About;
