import React from 'react';
import { Grid } from '@material-ui/core';

import MySkills from '../components/MySkill/MySkill';

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGithubSquare,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiRedux, SiJquery, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <>
      <Grid item xs={1} md={2}></Grid>
      <Grid item container xs={10} md={8} spacing={4} justify='center'>
        <Grid item xs={12} sm={6} md={4}>
          <MySkills skill='HTML5' skillColor='#e34f26'>
            <FaHtml5 size={64} />
          </MySkills>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MySkills skill='CSS3' skillColor='#254BDD'>
            <FaCss3Alt size={64} />
          </MySkills>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MySkills skill='SASS' skillColor='#CD669A'>
            <FaSass size={64} />
          </MySkills>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MySkills skill='Tailwind' skillColor='#06B6D4'>
            <SiTailwindcss size={64} />
          </MySkills>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MySkills skill='Javascript' skillColor='#f7df1e'>
            <IoLogoJavascript size={64} />
          </MySkills>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MySkills skill='Jquery' skillColor='#0769ad'>
            <SiJquery size={64} />
          </MySkills>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MySkills skill='React' skillColor='#00d8ff'>
            <FaReact size={64} />
          </MySkills>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MySkills skill='Redux' skillColor='#764ABC'>
            <SiRedux size={64} />
          </MySkills>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MySkills skill='Github' skillColor='#000'>
            <FaGithubSquare size={64} />
          </MySkills>
        </Grid>
      </Grid>
      <Grid item xs={1} md={2}></Grid>
    </>
  );
};

export default Skills;
