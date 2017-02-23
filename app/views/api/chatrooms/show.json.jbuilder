json.extract! @chatroom, :id, :room_title, :room_type, :purpose, :messages

  users_hash = {}

  @chatroom.users.each do |user|
    users_hash[user.id] = {id: user.id, username: user.username, first_name: user.first_name, last_name: user.last_name}
  end

  json.users users_hash
