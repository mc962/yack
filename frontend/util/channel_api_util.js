export const fetchChannels = () => {
  return $.ajax({
    method: 'GET',
    url: '/channels'
  })
}

export const fetchCurrentChannel = (channelId) => {
  return $.ajax({
    method: "GET",
    url: `/channels/${channelId}`
  })
}
