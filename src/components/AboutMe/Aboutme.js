import React from 'react';

import { Grid, Typography, Divider, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MyImage from '../../images/my-image-grey2.jpg';

import Button from '../Button/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
  overflow: {
    overflowX: 'hidden',
  },
  img: {
    maxWidth: '80%',
    height: 'auto',
  },
  headline: {
    color: theme.palette.success.main,
  },
  gutterBottom: {
    marginBottom: theme.spacing(4),
  },
  gutterTop: {
    marginTop: theme.spacing(4),
  },
  gutterLeft: {
    marginLeft: theme.spacing(4),
  },
  linkColor: {
    color: theme.palette.success.main,
  },
}));

const Aboutme = () => {
  const classes = useStyles();

  const clickHandler = () => {
    return;
  };

  return (
    <Grid
      container
      spacing={2}
      justify='center'
      alignItems='flex-start'
      className={classes.root}
    >
      <Grid
        item
        container
        spacing={1}
        xs={10}
        sm={6}
        md={5}
        lg={4}
        justify='center'
        className={classes.gutterBottom}
      >
        <img
          className={classes.img}
          src={MyImage}
          alt='arafat islam react developer javascript css web'
        />
      </Grid>
      <Grid
        item
        container
        spacing={2}
        xs={10}
        sm={8}
        md={6}
        lg={5}
        justify='center'
        direction='column'
      >
        <Typography variant='h4' className={classes.headline} paragraph>
          Who am I?
        </Typography>
        <Typography variant='h4' color='initial' gutterBottom>
          <b>I'm Arafat Islam, a web developer, an Engineer and a Freelancer</b>
        </Typography>
        <Typography variant='subtitle1' color='textSecondary' gutterBottom>
          Progress has driven a self-taught front-end developer. I have always
          found coding intuitive and have pushed me to learn the most effective
          ways to achieve a positive result. I love working with new
          technologies and collaborating with other developers. I am always
          willing to learn new technology stacks and embark on my next journey
          as a web developer and bring value to your company while working on
          building bigger ideas.
        </Typography>
        <Divider className={`${classes.gutterBottom} ${classes.gutterTop}`} />
        <Grid container item spacing={1} xs={12} justify='space-between'>
          <Grid
            container
            alignItems='center'
            item
            sm={12}
            md={5}
            justify='flex-start'
            wrap='nowrap'
          >
            <Typography variant='subtitle2' color='initial'>
              Name:
            </Typography>
            <Typography
              variant='subtitle1'
              color='textSecondary'
              className={classes.gutterLeft}
            >
              Arafat Islam
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems='center'
            justify='flex-start'
            sm={12}
            md={7}
            wrap='nowrap'
          >
            <Typography variant='subtitle2' color='initial'>
              Email:
            </Typography>

            <Link
              underline='hover'
              className={`${classes.linkColor} ${classes.gutterLeft}`}
              href='mailto:maaislam@outlook.com'
            >
              maaislam@outlook.com
            </Link>
          </Grid>
        </Grid>
        <Grid container item spacing={1} xs={12} justify='space-between'>
          <Grid
            container
            alignItems='center'
            item
            sm={12}
            md={5}
            justify='flex-start'
            wrap='nowrap'
          >
            <Typography variant='subtitle2' color='initial'>
              Age:
            </Typography>
            <Typography
              variant='subtitle1'
              color='textSecondary'
              className={classes.gutterLeft}
            >
              30
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems='center'
            justify='flex-start'
            sm={12}
            md={7}
            wrap='nowrap'
          >
            <Typography variant='subtitle2' color='initial'>
              From:
            </Typography>
            <Typography
              variant='subtitle1'
              color='textSecondary'
              className={classes.gutterLeft}
            >
              Dhaka, Bangladesh
            </Typography>
          </Grid>
        </Grid>
        <Divider className={`${classes.gutterBottom} ${classes.gutterTop}`} />
        <Grid item xs={12} md={6}>
          <Button
            colorScheme='green'
            text='Download CV'
            clickHandler={clickHandler}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Aboutme;
