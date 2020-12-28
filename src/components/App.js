import React from 'react';

import PostList from './PostList';
import PostDetail from './PostDetail';

const App = () => {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column eight wide'>
          <PostList />
        </div>
        <div className='column eight wide'>
          <PostDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
