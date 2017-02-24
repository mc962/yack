import {
  CREATE_MESSAGE,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from '../actions/message_actions';

import { merge } from 'lodash';

const initialState = {}; // this part might not work right

const MessageReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.receivedMessage );
    case REMOVE_MESSAGE:
      let nextState = Object.assign({}, state);
      delete nextState[action.receivedMessage.id];
      return nextState;
    default:
      return state;
  }
};

export default MessageReducer;
