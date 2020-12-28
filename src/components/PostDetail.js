import React from 'react';
import { connect } from 'react-redux';

const PostDetail = ({ selectedPost }) => {
  if (!selectedPost) {
    return <div>Please Select a Post</div>;
  }

  return (
    <div style={{ position: 'fixed' }}>
      <h3>Details for:</h3>
      <p>
        Title: {selectedPost.title}
        <br />
        Body: {selectedPost.body}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedPost: state.selectedPost,
  };
};

export default connect(mapStateToProps)(PostDetail);
