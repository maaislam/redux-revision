import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, selectPost } from '../actions';

const PostList = ({ posts, fetchPosts, selectPost }) => {
  //const dispatch = useDispatch();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderList = posts.map((post) => {
    return (
      <div className='item' key={post.title}>
        <div className='right floated content'>
          <button
            className='ui button primary'
            onClick={() => selectPost(post)}
          >
            Select
          </button>
        </div>
        <div className='content'>{post.title}</div>
      </div>
    );
  });

  return <div className='ui divided list'>{renderList}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts, selectPost })(PostList);
