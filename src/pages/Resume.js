import React from 'react';
import { Grid } from '@material-ui/core';

import SectionHeaderText from '../components/SectionHeaderText/SectionHeaderText';
import AnimatedBar from '../components/AnimatedBar/AnimatedBar';

import IntersectionCatcher from '../components/IntersectionCatcher';

import { motion } from 'framer-motion';
import { PageAnimation3 } from '../animations/AnimationConfig';

import { eduDetails, expDetails } from '../data/MyData';
import Education from '../sections/Education';

//import Carousels from '../components/Carousels/Carousels';
import Testimonial from '../components/Testimonial/Testimonial';

const Resume = () => {
  return (
    <motion.div initial='out' exit='out' animate='in' variants={PageAnimation3}>
      <Grid container spacing={2} direction='column' alignItems='center'>
        <Grid item xs={12} style={{ marginTop: '4rem' }}>
          <IntersectionCatcher />
          <SectionHeaderText
            subheading='Check out my Resume'
            headline='Resume'
            headerType='h3'
            alignment='center'
          />
          <AnimatedBar />
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={10}
          spacing={4}
          justify='space-between'
        >
          <Grid item xs={12} md={6}>
            <Education headline='Education' data={eduDetails} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Education headline='Experience' data={expDetails}></Education>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid item xs={5}>
            <Testimonial />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Resume;
