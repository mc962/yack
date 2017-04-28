import { merge } from 'lodash';

import { TOGGLE_DM_MODAL, TOGGLE_GM_MODAL, TOGGLE_MESSAGE_ATTACHMENT_MODAL } from '../actions/channel_actions';
import { TOGGLE_USER_INFO_MODAL } from '../actions/session_actions';

const initialState = {
  'dmModal': false,
  'gmModal': false,
  'userInfoModal': false,
  'messageAttachmentModal': false
}

let nextState;
const ModalsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_GM_MODAL:
      nextState = Object.assign({}, state);
      nextState['gmModal'] = !nextState['gmModal']
      return merge({}, state, nextState)
    case TOGGLE_DM_MODAL:
      nextState = Object.assign({}, state);
      nextState['dmModal'] = !nextState['dmModal']
      return merge({}, state, nextState)
    case TOGGLE_USER_INFO_MODAL:
      nextState = Object.assign({}, state);
      nextState['userInfoModal'] = !nextState['userInfoModal']
      return merge({}, state, nextState)
    case TOGGLE_MESSAGE_ATTACHMENT_MODAL:
    nextState = Object.assign({}, state);
    nextState['messageAttachmentModal'] = !nextState['messageAttachmentModal']
    return merge({}, state, nextState)
    default:
      return state
  }
}

export default ModalsReducer;
