User.destroy_all
Chatroom.destroy_all
Message.destroy_all
UserChat.destroy_all

u1 = User.new(username: 'bob', first_name: 'bobby', last_name: 'buildman', password: 'builder')
u1.save!
u2 = User.new(username: 'bill', first_name: 'billy', last_name: 'buildman', password: 'builder')
u2.save!

guest_user = User.new(username: 'Guest', first_name: 'Anon', last_name: 'Anonymous', password: 'wizardhat1')
guest_user.save!

c1 = Chatroom.new(room_title: 'general', room_type: 'general', purpose: 'main public chat')
c1.save!
c2 = Chatroom.new(room_title: 'builders', room_type: 'general', purpose: "Bob's domain")
c2.save!
c3 = Chatroom.new(room_title: 'destroyers', room_type: 'general', purpose: "Bill's domain")
c3.save!
c4 = Chatroom.new(room_title: 'joiners', room_type: 'direct_message', purpose: "Bob's domain")
c4.save!
c5 = Chatroom.new(room_title: 'sleepers', room_type: 'direct_message', purpose: "Sleeping, of course!")
c5.save!

Message.new(content: 'A pretty butterfly', user_id: u1.id, chatroom_id: c1.id).save!
Message.new(content: 'A dangerous dragon', user_id: u2.id, chatroom_id: c2.id).save!
Message.new(content: 'A pretty butterfly', user_id: u1.id, chatroom_id: c1.id).save!
Message.new(content: 'A super star', user_id: u1.id, chatroom_id: c1.id).save!
Message.new(content: 'A big brownie', user_id: u2.id, chatroom_id: c2.id).save!

UserChat.new(user_id: u1.id, chatroom_id: c1.id).save!
UserChat.new(user_id: u2.id, chatroom_id: c2.id).save!
UserChat.new(user_id: u1.id, chatroom_id: c3.id).save!
UserChat.new(user_id: u1.id, chatroom_id: c4.id).save!
UserChat.new(user_id: u2.id, chatroom_id: c5.id).save!
