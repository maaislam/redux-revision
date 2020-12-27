import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' },
  ];
};

const initialState = {
  selectedSong: null,
};

const selectedSongReducer = (
  state = initialState.selectedSong,
  { type, payload }
) => {
  switch (type) {
    case 'SONG_SELECTED':
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
