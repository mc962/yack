json.extract! @chatroom, :id, :room_title, :room_type, :purpose, :created_at

messages_hash = {}

@chatroom.messages.each do |message|
  messages_hash[message.id] = {
                                id: message.id,
                                content: message.content,
                                user_id: message.user.id,
                                user_url: message.user.image_url.to_s,
                                username: message.user.username,
                                created_at: message.created_at,
                                updated_at: message.updated_at,
                                chatroom_id: message.chatroom_id
                              }
end

json.users_count @chatroom.users.count
json.channel_messages messages_hash
