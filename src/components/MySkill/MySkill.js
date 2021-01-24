import React, { useState } from 'react';

import { Card, Typography, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import './MySkill.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.cardColor.main,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width: '100%',
    maxWidth: '100%',
  },
}));

const MySkills = ({ children, skill, skillColor }) => {
  const theme = useTheme();
  const [color, setColor] = useState(theme.palette.success.main);

  const classes = useStyles();
  const handleHoverIn = () => {
    setColor(skillColor);
  };
  const handleHoverOut = () => {
    setColor(theme.palette.success.main);
  };
  return (
    <Card
      className={`${classes.root} skill`}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      <Grid
        container
        alignItems='center'
        spacing={1}
        justify='space-between'
        alignContent='center'
      >
        <Grid
          item
          container
          xs={4}
          justify='center'
          alignItems='center'
          style={{ color: color }}
        >
          {children}
        </Grid>
        <Grid item xs={8}>
          <Typography variant='h5' color='initial' align='center'>
            {skill}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MySkills;
