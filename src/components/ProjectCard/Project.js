import React from 'react';

import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import defImg from '../../images/heroimage7-lg.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.cardColor.main,
  },
}));

const Project = ({ imgSource, title, excerpt }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='250'
          image={imgSource || defImg}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Project;
