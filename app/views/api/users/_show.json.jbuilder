json.extract! user, :id, :username, :first_name, :last_name


json.channels do
  json.array! user.chatrooms, :id, :room_title, :room_type, :purpose
end
