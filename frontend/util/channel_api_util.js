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
