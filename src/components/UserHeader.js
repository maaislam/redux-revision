import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
//import { fetchUser } from '../actions';

const UserHeader = ({ userId, users }) => {
  /*useEffect(() => {
    fetchUser(userId);
    console.log(
      '🚀 ~ file: UserHeader.js ~ line 9 ~ useEffect ~ userId',
      userId
    );
  }, [userId, fetchUser]);*/

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return null;
  }
  return <Typography variant='subtitle1'>{user.name}</Typography>;
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(UserHeader);
