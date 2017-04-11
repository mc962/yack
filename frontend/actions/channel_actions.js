import * as APIUtil from '../util/channel_api_util';


export const FETCH_CURRENT_CHANNEL = "FETCH_CURRENT_CHANNEL";
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CURRENT_CHANNEL = "RECEIVE_CURRENT_CHANNEL";

export const START_LOADING_CURRENT_CHANNEL = "START_LOADING_CURRENT_CHANNEL";
export const START_LOADING_ALL_CHANNELS = "START_LOADING_ALL_CHANNELS";

export const CREATE_CHANNEL = "CREATE_CHANNEL";

export const JOIN_CHANNEL = 'JOIN_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const FETCH_CHANNEL_MESSAGES = 'FETCH_CHANNEL_MESSAGES';
export const FETCH_CHANNEL_MESSAGE = 'FETCH_CHANNEL_MESSAGE';

export const CREATE_CHANNEL_MESSAGE = 'CREATE_CHANNEL_MESSAGE';
export const UPDATE_CHANNEL_MESSAGE = 'UPDATE_CHANNEL_MESSAGE';
export const DELETE_CHANNEL_MESSAGE = 'DELETE_CHANNEL_MESSAGE';

export const RECEIVE_CHANNEL_MESSAGES = 'RECEIVE_CHANNEL_MESSAGES';
export const RECEIVE_CHANNEL_MESSAGE = 'RECEIVE_CHANNEL_MESSAGE';
export const REMOVE_CHANNEL_MESSAGE = 'REMOVE_CHANNEL_MESSAGE';

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

export const leaveChannel = (chatroom) => {

  return (dispatch) => {
    return APIUtil.leaveChannel(chatroom).then((receivedChannel) => {
      return dispatch(removeChannel(receivedChannel));
    });
  };
};

export const fetchChannelMessages = (channelId) => {
  return (dispatch) => {
    return APIUtil.fetchChannelMessages(channelId).then(
      (fetchedMessages) => {
        return dispatch(receiveChannelMessages(fetchedMessages))
      }
    );
  };
};

export const fetchChannelMessage = (messageId, channelId) => {
  return (dispatch) => {
    return APIUtil.fetchChannelMessage(messageId, channelId).then(
      (fetchedMessage) => {
        return dispatch(receiveChannelMessage(fetchedMessage))
      }
    );
  };
};

export const createChannelMessage = (message) => {
  return (dispatch) => {
    return APIUtil.createChannelMessage(message).then(
      (createdMessage) => {
        return dispatch(receiveChannelMessage(createdMessage))
      }
    );
  };
};

export const updateChannelMessage = (message) => {
  return (dispatch) => {
    return APIUtil.updateChannelMessage(message).then(
      (updatedMessage) => {

        return dispatch(receiveChannelMessage(updatedMessage))
      }
    );
  };
};

export const deleteChannelMessage = (message) => {
  return (dispatch) => {
    return APIUtil.deleteChannelMessage(message).then(
      (deletedMessage) => {

        return dispatch(removeChannelMessage(deletedMessage));
      }
    )
  }
}





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

export const removeChannel = (channel) => {
  return {
    type: REMOVE_CHANNEL,
    channel
  };
};





export const receiveChannelMessages = (receivedChannelMessages) => {
  return {
    type: RECEIVE_CHANNEL_MESSAGES,
    receivedChannelMessages
  }
}

export const receiveChannelMessage = (receivedChannelMessage) => {
  return {
    type: RECEIVE_CHANNEL_MESSAGE,
    receivedChannelMessage
  }
}

export const removeChannelMessage =  (removedChannelMessageData) => {
  return {
    type: REMOVE_CHANNEL_MESSAGE,
    removedChannelMessageData
  }
}
