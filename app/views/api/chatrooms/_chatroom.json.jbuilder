json.extract! chatroom, :id, :room_title, :created_at

json.num_users chatroom.users.length
