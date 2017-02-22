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
