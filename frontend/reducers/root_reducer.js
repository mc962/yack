import { combineReducers } from 'redux';
import ChannelsReducer from './channels_reducer';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import MessageReducer from './message_reducer';
import LoadingReducer from './loading_reducer';
import AllChannelsReducer from './all_channels_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  currentChannel: ChannelsReducer,
  allChannels: AllChannelsReducer,
  message: MessageReducer,
  loading: LoadingReducer
});

export default rootReducer;
