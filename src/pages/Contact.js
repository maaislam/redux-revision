import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import SectionHeaderText from '../components/SectionHeaderText/SectionHeaderText';
import AnimatedBar from '../components/AnimatedBar/AnimatedBar';

import IntersectionCatcher from '../components/IntersectionCatcher';

import { motion } from 'framer-motion';
import { PageAnimation3 } from '../animations/AnimationConfig';

const Contact = () => {
  return (
    <motion.div initial='out' exit='out' animate='in' variants={PageAnimation3}>
      <Grid container spacing={2} direction='column' alignItems='center'>
        <Grid item xs={12} style={{ marginTop: '4rem' }}>
          <IntersectionCatcher />
          <SectionHeaderText
            subheading='Feel free to contact me anytimes'
            headline='Get in Touch'
            headerType='h3'
            alignment='center'
          />
          <AnimatedBar />
        </Grid>
        <Grid container item xs={12} lg={10} spacing={4} justify='center'>
          <Typography variant='h1' color='secondary'>
            Page Undergoing Renovations
          </Typography>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Contact;
