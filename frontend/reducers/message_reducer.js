import {
  CREATE_MESSAGE,
  RECEIVE_MESSAGE
} from '../actions/message_actions';

import { merge } from 'lodash';

const initialState = {}; // this part might not work right

const MessageReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.receivedMessage );
    default:
      return state;
  }
};

export default MessageReducer;
