import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import { selectPost, fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

const useStyle = makeStyles({
  componentStyles: {
    fontStyle: 'italic',
  },
  cardStyles: {
    backgroundColor: '#424242',
  },
});

const PostList = ({ posts, fetchPostsAndUsers, selectPost, darkMode }) => {
  const classes = useStyle();
  //const dispatch = useDispatch();
  useEffect(() => {
    fetchPostsAndUsers();
  }, [fetchPostsAndUsers]);

  const renderList = posts.map((post, index) => {
    return (
      <Grid item xs={12} sm={6} key={index}>
        <Card className={darkMode ? classes.cardStyles : ''}>
          <CardContent>
            <Typography className={classes.componentStyles} variant='h6'>
              {post.title}
            </Typography>

            <UserHeader userId={post.userId} />

            <Button
              variant='contained'
              color='secondary'
              className=''
              onClick={() => selectPost(post)}
            >
              Select
            </Button>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid item container xs={12} spacing={5} alignContent='space-between'>
      {renderList}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers,
  selectPost,
})(PostList);
