import React from 'react';
import { Grid } from '@material-ui/core';

import SectionHeaderTex from '../components/SectionHeaderText/SectionHeaderText';
import AnimatedBar from '../components/AnimatedBar/AnimatedBar';

import IntersectionCatcher from '../components/IntersectionCatcher';
import Aboutme from '../components/AboutMe/Aboutme';

const About = () => {
  return (
    <Grid container spacing={0} direction='column'>
      <Grid item xs={12}>
        <IntersectionCatcher />
        <SectionHeaderTex
          subheading='Get to know me'
          headline='About Me'
          headerType='h3'
          alignment='center'
        />
        <AnimatedBar />
      </Grid>
      <Grid item xs={12}>
        <Aboutme />
      </Grid>
      <Grid item container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <SectionHeaderTex
            subheading='Skills I offer to my clients'
            headline='My Skills'
            headerType='h4'
            alignment='left'
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
};

export default About;
