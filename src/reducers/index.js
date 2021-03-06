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

const userReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH_USER':
      return [...state, payload];

    default:
      return state;
  }
};

const darkModeReducer = (state = true, { type, payload }) => {
  switch (type) {
    case 'SET_DARK_MODE':
      return payload;

    default:
      return state;
  }
};
const stickyHeaderReducer = (state = false, { type, payload }) => {
  switch (type) {
    case 'SET_STICKY_HEADER':
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  stickyHeader: stickyHeaderReducer,
  darkMode: darkModeReducer,
  posts: postsReducer,
  users: userReducer,
  selectedPost: selectedPostReducer,
});
