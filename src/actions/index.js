import posts from '../api/posts';

export const selectPost = (post) => {
  return {
    type: 'POST_SELECTED',
    payload: post,
  };
};

export const fetchPosts = () => async (dispatch) => {
  const response = await posts.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await posts.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
