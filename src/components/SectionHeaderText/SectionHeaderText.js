import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '8rem',
  },
}));

const SectionHeaderTex = ({ subheading, headline, alignment, headerType }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant='subtitle1'
        color='textSecondary'
        align={alignment}
        gutterBottom
      >
        {subheading}
      </Typography>
      <Typography
        variant={headerType}
        color='textPrimary'
        align={alignment}
        gutterBottom
      >
        <b>{headline}</b>
      </Typography>
    </div>
  );
};

export default SectionHeaderTex;
