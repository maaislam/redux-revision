import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    maxWidth: '400px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PostDetail = ({ selectedPost }) => {
  const classes = useStyles();

  if (!selectedPost) {
    return <div> Please Select a Post </div>;
  }

  return (
    <Card className={classes.root} raised>
      <CardContent>
        <Typography
          variant='h2'
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Details for:
        </Typography>
        <Typography variant='body2' component='p'>
          Title: {selectedPost.title}
        </Typography>
        <Typography variant='body2' component='p'>
          Body: {selectedPost.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedPost: state.selectedPost,
  };
};

export default connect(mapStateToProps)(PostDetail);
