import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SongList = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  const renderList = songs.map((song) => {
    return (
      <div className='item' key={song.title}>
        <div className='right floated content'>
          <button
            className='ui button primary'
            onClick={() =>
              dispatch({
                type: 'SONG_SELECTED',
                payload: song,
              })
            }
          >
            Select
          </button>
        </div>
        <div className='content'>{song.title}</div>
      </div>
    );
  });

  return <div className='ui divided list'>{renderList}</div>;
};

export default SongList;
