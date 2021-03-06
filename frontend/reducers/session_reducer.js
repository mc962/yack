import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

import { merge } from 'lodash';

const initialState = {currentUser: null, errors: []};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser, errors: []});
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    case CLEAR_ERRORS:    
      return Object.assign({}, state, {errors: []});
    default:
      return state;
  }
};

export default SessionReducer;
