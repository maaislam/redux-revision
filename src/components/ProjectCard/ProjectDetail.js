import React from 'react';

import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Grid,
  Chip,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import defImg from '../../images/heroimage7-lg.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    backgroundColor: theme.palette.cardColor.main,
  },
  spacing: {
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  chipRoots: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  chipSpacing: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(0),
  },
}));

const ProjectDetail = ({
  projectImage,
  title,
  excerpt,
  detail,
  sourceCodeLink,
  liveDemoLink,
  techStacks,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const screenMedium = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='450'
          image={projectImage || defImg}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Grid
            container
            spacing={1}
            justify={screenMedium ? 'flex-start' : 'space-between'}
            alignItems={screenMedium ? 'flex-start' : 'center'}
            direction={screenMedium ? 'column' : 'row'}
          >
            <Grid item xs={10} md={techStacks.length >= 3 ? 4 : 8}>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
            </Grid>
            <Grid item xs={10} md={techStacks.length > 3 ? 8 : 4} lg={6}>
              <span className={classes.chipRoots}>
                {techStacks.map((item) => {
                  return (
                    <Chip
                      label={item}
                      key={item}
                      size='small'
                      className={classes.chipSpacing}
                    />
                  );
                })}
              </span>
            </Grid>
          </Grid>

          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            gutterBottom
          >
            {excerpt}
          </Typography>
          <Typography variant='h6' color='initial' component='p' gutterBottom>
            Details:
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {detail || ''}
          </Typography>
        </CardContent>
        <CardActions className={classes.spacing}>
          <Button variant='contained' color='primary' href={sourceCodeLink}>
            View on Github
          </Button>
          <Button variant='contained' color='secondary' href={liveDemoLink}>
            View Live Demo
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

ProjectDetail.defaultProps = {
  techStacks: [],
};

export default ProjectDetail;
