import React from 'react';
import { Grid } from '@material-ui/core';

import SectionHeaderTex from '../components/SectionHeaderText/SectionHeaderText';
import AnimatedBar from '../components/AnimatedBar/AnimatedBar';

const Resume = () => {
  return (
    <Grid container spacing={0} direction='column'>
      <Grid item container spacing={0} xs={12}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <SectionHeaderTex
            subheading='Check out my Resume'
            headline='Resume'
            headerType='h4'
            alignment='center'
          />
          <AnimatedBar />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
};

export default Resume;
