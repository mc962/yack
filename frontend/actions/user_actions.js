import * as APIUtil from '../util/users_api_util';

export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const FETCH_USER = "FETCH_USER";
export const RECEIVE_USER = "RECEIVE_USER";
// export const START_RECEIVING_ALL_USERS = "START_RECEIVING_ALL_USERS";

export const fetchAllUsers = () => {

  return (dispatch) => {
    return APIUtil.fetchAllUsers().then((fetchedUsers) => {
      return dispatch(receiveAllUsers(fetchedUsers));
    });
  };
};

export const fetchUser = (userId) => {
  return (dispatch) => {
    return APIUtil.fetchUser(userId).then((receivedUser) => {
      return dispatch(receiveUser(receivedUser));
    });
  };
};

export const receiveAllUsers = (allUsers) => {
  return {
    type: RECEIVE_ALL_USERS,
    allUsers
  };
};

export const receiveUser = (receivedUser) => {
  return {
    type: RECEIVE_USER,
    receivedUser
  }
}
