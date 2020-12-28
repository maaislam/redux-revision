import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts, selectPost } from '../actions';
import UserHeader from './UserHeader';

const PostList = ({ posts, fetchPosts, selectPost }) => {
  //const dispatch = useDispatch();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderList = posts.slice(0, 15).map((post, index) => {
    return (
      <div className='item' key={post.title}>
        {post.userId}
        <div className='right floated content'>
          <button
            className='ui button primary'
            onClick={() => selectPost(post)}
          >
            Select{post.userId}
          </button>
        </div>
        <div className='content'>{post.title}</div>
        <div className='header'>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    );
  });

  return <div className='ui relaxed divided list'>{renderList}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, {
  fetchPosts,
  selectPost,
})(PostList);
