import {
  receiveAllUsers
} from '../actions/user_actions';

import { merge } from 'lodash';
import {RECEIVE_ALL_USERS} from '../actions/user_actions';

const initialState = {}

const UsersReducer = (state = initialState, action ) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, {allUsers: action.allUsers.all_users})

    default:
      return state;
  }
}

export default UsersReducer
