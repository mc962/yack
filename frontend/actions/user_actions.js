import * as APIUtil from '../util/users_api_util';

export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

// export const START_RECEIVING_ALL_USERS = "START_RECEIVING_ALL_USERS";

export const fetchAllUsers = () => {

  return (dispatch) => {
    return APIUtil.fetchAllUsers().then((fetchedUsers) => {
      return dispatch(receiveAllUsers(fetchedUsers));
    });
  };
};

export const receiveAllUsers = (allUsers) => {
  return {
    type: RECEIVE_ALL_USERS,
    allUsers
  };
};
