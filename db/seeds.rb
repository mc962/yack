User.destroy_all
Chatroom.destroy_all
Message.destroy_all
UserChat.destroy_all

User.new(username: 'bob', first_name: 'bobby', last_name: 'buildman', password: 'builder').save!
User.new(username: 'bill', first_name: 'billy', last_name: 'buildman', password: 'builder').save!

Chatroom.new(room_title: 'General', room_type: 'general', purpose: 'main public chat').save!
Chatroom.new(room_title: 'Builders', room_type: 'general', purpose: "Bob's domain").save!

Message.new(content: 'A pretty butterfly', user_id: User.first.id, chatroom_id: Chatroom.first.id).save!
Message.new(content: 'A dangerous dragon', user_id: User.last.id, chatroom_id: Chatroom.last.id).save!

UserChat.new(user_id: User.first.id, chatroom_id: Chatroom.first.id).save!
UserChat.new(user_id: User.last.id, chatroom_id: Chatroom.last.id).save!
