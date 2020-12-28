import { combineReducers } from 'redux';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH_POSTS':
      return [...state, ...payload];

    default:
      return state;
  }
};

const initialState = {
  selectedPost: null,
};

const selectedPostReducer = (
  state = initialState.selectedPost,
  { type, payload }
) => {
  switch (type) {
    case 'POST_SELECTED':
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
  selectedPost: selectedPostReducer,
});
