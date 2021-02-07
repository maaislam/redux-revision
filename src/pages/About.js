import React from 'react';
import { Grid } from '@material-ui/core';

import SectionHeaderText from '../components/SectionHeaderText/SectionHeaderText';
import AnimatedBar from '../components/AnimatedBar/AnimatedBar';

import { motion } from 'framer-motion';
import { PageAnimation3 } from '../animations/AnimationConfig';

import Aboutme from '../components/AboutMe/Aboutme';

import Skills from '../sections/Skills';
import IntersectionCatcher from '../components/IntersectionCatcher';
import Carousels from '../components/Carousels/Carousels';

const About = () => {
  return (
    <motion.div
      initial='out'
      exit='out'
      animate='in'
      variants={PageAnimation3}
      style={{
        marginBottom: '10rem',
      }}
    >
      <Grid container spacing={2} direction='column' alignItems='center'>
        <Grid item xs={12} style={{ marginTop: '4rem' }}>
          <IntersectionCatcher />
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
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid item xs={10} style={{ paddingBottom: '100px' }}>
            <Carousels />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default About;
