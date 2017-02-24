import * as APIUtil from '../util/channel_api_util';


export const FETCH_CURRENT_CHANNEL = "FETCH_CURRENT_CHANNEL";
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CURRENT_CHANNEL = "RECEIVE_CURRENT_CHANNEL";

export const START_LOADING_CURRENT_CHANNEL = "START_LOADING_CURRENT_CHANNEL";
export const START_LOADING_ALL_CHANNELS = "START_LOADING_ALL_CHANNELS";

export const CREATE_CHANNEL = "CREATE_CHANNEL";

export const fetchCurrentChannel = (channelId) => (dispatch) => {
  dispatch(startLoadingCurrentChannel());

    return APIUtil.fetchCurrentChannel(channelId).then((fetchedChannel) => {
      return dispatch(receiveCurrentChannel(fetchedChannel));
    });
};

export const fetchAllChannels = () => {
  return (dispatch) => {
    return APIUtil.fetchAllChannels().then((receivedChannels) => {
      return dispatch(receiveAllChannels(receivedChannels));
    });
  };
};

export const createChannel = (chatroom) => {
  return (dispatch) => {
    return APIUtil.createChannel(chatroom).then((receivedChannel) => {
      return dispatch(receiveCurrentChannel(receivedChannel));
    });
  };
};

export const joinChannel = (chatroom) => {
  return (dispatch) => {
    return APIUtil.joinChannel(chatroom).then((receivedChannel) => {
      return dispatch(receiveCurrentChannel(receivedChannel));
    });
  };
};

export const startLoadingCurrentChannel = () => ({
  type: START_LOADING_CURRENT_CHANNEL
});


export const receiveCurrentChannel = (currentChannel) => {
  return {
    type: RECEIVE_CURRENT_CHANNEL,
    currentChannel
  };
};

export const receiveAllChannels = (channels) => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channels
  };
};
