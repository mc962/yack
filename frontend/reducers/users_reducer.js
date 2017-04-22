import {
  receiveAllUsers
} from '../actions/user_actions';

import { merge } from 'lodash';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from '../actions/user_actions';

const initialState = {}

const UsersReducer = (state = initialState, action ) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, {allUsers: action.allUsers.all_users})
    case RECEIVE_USER:
      return merge({}, state, {allUsers: {[action.receivedUser.id]: action.receivedUser}})
    default:
      return state;
  }
}

export default UsersReducer
