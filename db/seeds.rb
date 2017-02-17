User.destroy_all
Chatroom.destroy_all
Message.destroy_all
UserChat.destroy_all

User.new(username: 'bob', first_name: 'bobby', last_name: 'buildman', password: 'builder').save!
User.new(username: 'bill', first_name: 'billy', last_name: 'buildman', password: 'builder').save!

Chatroom.new(room_title: 'general', room_type: 'general', purpose: 'main public chat').save!
Chatroom.new(room_title: 'builders', room_type: 'general', purpose: "Bob's domain").save!
Chatroom.new(room_title: 'destroyers', room_type: 'general', purpose: "Bill's domain").save!
Chatroom.new(room_title: 'joiners', room_type: 'direct_message', purpose: "Bob's domain").save!
Chatroom.new(room_title: 'sleepers', room_type: 'direct_message', purpose: "Sleeping, of course!").save!

Message.new(content: 'A pretty butterfly', user_id: 1, chatroom_id: 1).save!
Message.new(content: 'A dangerous dragon', user_id: 2, chatroom_id: 2).save!
Message.new(content: 'A pretty butterfly', user_id: 1, chatroom_id: 1).save!
Message.new(content: 'A super star', user_id: 1, chatroom_id: 1).save!
Message.new(content: 'A big brownie', user_id: 2, chatroom_id: 1).save!

UserChat.new(user_id: 1, chatroom_id: 1).save!
UserChat.new(user_id: 2, chatroom_id: 2).save!
UserChat.new(user_id: 1, chatroom_id: 3).save!
UserChat.new(user_id: 1, chatroom_id: 4).save!
UserChat.new(user_id: 2, chatroom_id: 5).save!
