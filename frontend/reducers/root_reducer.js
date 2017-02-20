import { combineReducers } from 'redux';
import ChannelsReducer from './channels_reducer';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import MessageReducer from './message_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  currentChannel: ChannelsReducer,
  message: MessageReducer
})

export default rootReducer;
