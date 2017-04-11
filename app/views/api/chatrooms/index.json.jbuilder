# json.partial! 'chatroom', collection: @chatrooms, as: :chatroom

json.extract! @chatrooms

chatrooms_hash = {}

@chatrooms.each do |chatroom|
  next unless chatroom.room_type == 'general'
  chatrooms_hash[chatroom.id] = {id: chatroom.id, room_title: chatroom.room_title, created_at: chatroom.created_at, num_users: chatroom.users.length}
end


json.chatrooms chatrooms_hash
