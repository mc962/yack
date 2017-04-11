json.extract! @chatroom, :id, :room_title, :room_type, :purpose#, :messages

# users_hash = {}
#
# @chatroom.users.each do |user|
#   users_hash[user.id] = {id: user.id, username: user.username, first_name: user.first_name, last_name: user.last_name, gravatar_url: user.gravatar_url}
# end


messages_hash = {}

@chatroom.messages.each do |message|
  messages_hash[message.id] = {
                                id: message.id,
                                content: message.content,
                                user_id: message.user.id,
                                user_url: message.user.gravatar_url.to_s,
                                username: message.user.username,
                                created_at: message.created_at,
                                updated_at: message.updated_at,
                                chatroom_id: message.chatroom_id
                              }
end

json.users_count @chatroom.users.count
json.channel_messages messages_hash
