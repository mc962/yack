import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  SIGNUP,
  START_LOADING_CURRENT_USER
} from '../actions/session_actions';

import {
  RECEIVE_ALL_CHANNELS,
  RECEIVE_CURRENT_CHANNEL,
  START_LOADING_ALL_CHANNELS,
  START_LOADING_CURRENT_CHANNEL
} from '../actions/channel_actions';

import {
  RECEIVE_MESSAGE,
  START_RECEIVING_MESSAGE
} from '../actions/message_actions';

import {
  FETCH_ALL_USERS,
  RECEIVE_ALL_USERS,
  START_RECEIVING_ALL_USERS
} from '../actions/user_actions';

const initialState = {
   currentUserLoading: false,
   currentChannelLoading: false,
   allChannelsLoading: false,
   messageLoading: false,
   allUsersLoading: false,
};

export default (state = initialState, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ERRORS:
    case RECEIVE_ALL_CHANNELS:
    case RECEIVE_CURRENT_CHANNEL:
    case RECEIVE_MESSAGE:
    case RECEIVE_ALL_USERS:
      return initialState;


    case START_LOADING_CURRENT_USER:
      return Object.assign({}, state, {currentUserLoading: true});
    case START_LOADING_ALL_CHANNELS:
      return Object.assign({}, state, {allChannelsLoading: true});
    case START_LOADING_CURRENT_CHANNEL:

      return Object.assign({}, state, {currentChannelLoading: true});
    case START_RECEIVING_MESSAGE:
      return Object.assign({}, state, {messageLoading: true});
    case START_RECEIVING_ALL_USERS:
      return Object.assign({}, state, {allUsersLoading: true});
    default:
      return state;
  }
};
