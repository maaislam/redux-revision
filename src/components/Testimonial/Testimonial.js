import React from 'react';

import { Card, Grid, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { IoMdQuote } from 'react-icons/io';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.cardColor.main,
    padding: '48px 40px',
    position: 'relative',
  },
  quotes: {
    color: theme.palette.success.main,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Testimonial = ({ clientName, clientCompany, comments, clientImage }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container spacing={4} direction='column'>
        <Grid
          item
          container
          spacing={1}
          justify='space-between'
          alignItems='center'
          wrap='nowrap'
          xs={12}
        >
          <Grid
            item
            container
            spacing={2}
            wrap='nowrap'
            xs={10}
            justify='space-between'
            alignItems='center'
          >
            <Grid item>
              <Avatar
                alt='arafat'
                src={clientImage}
                className={classes.avatar}
              />
            </Grid>
            <Grid item container spacing={1} direction='column'>
              <Typography variant='subtitle1' color='initial'>
                {clientName}
              </Typography>
              <Typography variant='subtitle2' color='textSecondary'>
                {clientCompany}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            spacing={1}
            xs={2}
            justify='flex-end'
            className={classes.quotes}
          >
            <IoMdQuote size={64} />
          </Grid>
        </Grid>

        <Grid item container spacing={0}>
          <Typography variant='subtitle1' color='textSecondary'>
            {comments}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Testimonial;
