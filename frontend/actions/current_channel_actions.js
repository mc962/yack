import * as APIUtil from '../util/channel_api_util';


export const FETCH_CURRENT_CHANNEL = "FETCH_CURRENT_CHANNEL";
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CURRENT_CHANNEL = "RECEIVE_CURRENT_CHANNEL";

export const fetchCurrentChannel = (channelId) => {
  return (dispatch) => {
    return APIUtil.fetchCurrentChannel(channelId).then((fetchedChannel) => {
      return dispatch(receiveCurrentChannel(fetchedChannel))
    })
  }
}

export const fetchAllChannels = () => {
  return (dispatch) => {
    return APIUtil.fetchAllChannels().then((receivedChannels) => {
      return dispatch(receiveAllChannels(receivedChannels))
    })
  }
}


export const receiveCurrentChannel = (channel) => {
  return {
    type: RECEIVE_CURRENT_CHANNEL,
    channel
  }
}

export const receiveAllChannels = (channels) => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channels
  }
}
