import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import SectionHeaderText from '../components/SectionHeaderText/SectionHeaderText';
import AnimatedBar from '../components/AnimatedBar/AnimatedBar';

import IntersectionCatcher from '../components/IntersectionCatcher';

import { motion } from 'framer-motion';
import { PageAnimation3 } from '../animations/AnimationConfig';

import Project from '../components/ProjectCard/Project';
import projects from '../data/MyProjects';

import Modal from '../components/Modal/Modal';

const Portfolio = () => {
  const [modal, setModal] = useState(false);

  const modalClickHandler = (modalStatus) => {
    setModal(modalStatus);
  };

  const renderProjects = projects.map((item, i) => {
    const { projectImage, title, excerpt } = item;

    return (
      <Grid
        item
        key={i}
        onClick={() => setModal(true)}
        xs={12}
        md={6}
        lg={4}
        xl={3}
      >
        <Project
          imgSource={item.projectImage}
          projectImage={projectImage}
          title={title}
          excerpt={excerpt}
        />
      </Grid>
    );
  });

  return (
    <motion.div initial='out' exit='out' animate='in' variants={PageAnimation3}>
      <Grid container spacing={2} direction='column' alignItems='center'>
        <Grid item xs={12} style={{ marginTop: '4rem' }}>
          <IntersectionCatcher />
          <SectionHeaderText
            subheading='Showcasing some of my best work'
            headline='Portfolio'
            headerType='h3'
            alignment='center'
          />
          <AnimatedBar />
        </Grid>
        <Grid
          style={{ marginTop: '4rem' }}
          container
          item
          xs={10}
          justify='space-between'
          spacing={4}
        >
          {renderProjects}
          {modal ? <Modal clickHandler={modalClickHandler} /> : null}
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Portfolio;
