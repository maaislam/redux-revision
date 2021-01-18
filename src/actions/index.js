import posts from '../api/posts';

export const selectPost = (post) => {
  return {
    type: 'POST_SELECTED',
    payload: post,
  };
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = [];
  const posts = getState().posts;

  posts.map((post) => {
    return userIds.push(post.userId);
  });

  const uniqueUserId = [...new Set(userIds)];

  uniqueUserId.forEach((userId) => {
    dispatch(fetchUser(userId));
  });
};

export const fetchPosts = () => async (dispatch) => {
  const response = await posts.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await posts.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const setDarkMode = (payload) => ({
  type: 'SET_DARK_MODE',
  payload: payload,
});
export const setStickyHeader = (payload) => ({
  type: 'SET_STICKY_HEADER',
  payload: payload,
});
