import React, { lazy, Suspense } from 'react';
import { Grid } from '@material-ui/core';

import SectionHeaderText from '../components/SectionHeaderText/SectionHeaderText';
import AnimatedBar from '../components/AnimatedBar/AnimatedBar';

import { motion } from 'framer-motion';
import { PageAnimation3 } from '../animations/AnimationConfig';
//import IntersectionCatcher from '../components/IntersectionCatcher';

import Aboutme from '../components/AboutMe/Aboutme';

import Skills from '../sections/Skills';
const IntersectionCatcher = lazy(() =>
  import('../components/IntersectionCatcher')
);

const About = () => {
  return (
    <motion.div initial='out' exit='out' animate='in' variants={PageAnimation3}>
      <Grid container spacing={2} direction='column' alignItems='center'>
        <Grid item xs={12} style={{ marginTop: '4rem' }}>
          <Suspense>
            <IntersectionCatcher />
          </Suspense>
          <SectionHeaderText
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
        <Grid item xs={12}>
          <SectionHeaderText
            subheading='Skills I offer to my clients'
            headline='My Skills'
            headerType='h3'
            alignment='center'
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          alignItems='center'
          justify='space-between'
          alignContent='center'
        >
          <Skills />
        </Grid>
        <Grid item xs={12}>
          <SectionHeaderText
            subheading='What my clients think about me'
            headline='Testimonials'
            headerType='h3'
            alignment='center'
          />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default About;
