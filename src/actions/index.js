import posts from '../api/posts';

export const selectPost = (post) => {
  return {
    type: 'POST_SELECTED',
    payload: post,
  };
};

export const fetchPosts = () => async (dispatch) => {
  const response = await posts.get('/posts');
  console.log(
    '🚀 ~ file: index.js ~ line 12 ~ fetchPosts ~ response',
    response.data
  );

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
