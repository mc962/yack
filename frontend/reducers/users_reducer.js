import {
  receiveAllUsers
} from '../actions/user_actions';

import { merge } from 'lodash';
import {RECEIVE_ALL_USERS} from '../actions/user_actions';

const initialState = {users: []}

const UsersReducer = (state = initialState, action ) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:

      return Object.assign({}, state, {users: action.users})

    default:
      return state;
  }
}

export default UsersReducer
