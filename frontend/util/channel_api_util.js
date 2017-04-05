export const fetchAllChannels = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/chatrooms'
  });
};

export const fetchCurrentChannel = (chatroomId) => {
  return $.ajax({
    method: "GET",
    url: `/api/chatrooms/${chatroomId}`
  });
};

export const createChannel = (chatroom) => {
  return $.ajax({
    method: 'POST',
    url: "/api/chatrooms",
    data: { chatroom }
  });
};

export const joinChannel = (user_chat) => {

  return $.ajax({
    method: 'POST',
    url: `/api/chatrooms/join-channel/${user_chat.chatroom_id}`,
    data: { user_chat }
  });
};

export const leaveChannel = (user_chat) => {

  return $.ajax({
    method: 'DELETE',
    url: `/api/chatrooms/leave-channel/${user_chat.chatroom_id}`,
    data: { user_chat }
  });
};

///
export const fetchChannelMessages = (chatroomId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/chatrooms/channel-messages/${chatroomId}`
  })
}

export const fetchChannelMessage = (messageId, channelId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/chatrooms/${channelId}/messages/${messageId}`
  })
}


export const createChannelMessage = (message) =>  {
  return $.ajax({
    method: 'POST',
    url: `/api/chatrooms/${message.chatroom_id}/messages`,
    data: { message }
  });
};

export const updateChannelMessage = (message) => {
  
  return $.ajax({
    method: 'PATCH',
    url: `/api/chatrooms/${message.chatroom_id}/messages/${message.id}`,
    data: { message }
  });
};

export const deleteChannelMessage = (message) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/chatrooms/${message.chatroom_id}/messages/${message.id}`
  });
};
