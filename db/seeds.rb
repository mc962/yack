User.destroy_all
Chatroom.destroy_all
Message.destroy_all
UserChat.destroy_all

users = []
users << User.new(first_name: 'Bob', last_name: 'Builder', username: 'bob', email: 'bob@builder.gov', password: 'builder')
users << User.new(first_name: 'Michael', last_name: 'Moriarty', username: 'mimori', email: 'mm@supersleuth.net', password: 'passthefirst')
users << User.new(first_name: 'Brian', last_name: 'Wegman', username: 'bman', email: 'bweg@gmail.com', password: 'passthesecond')
users << User.new(first_name: 'Mark', last_name: 'Neilson', username: 'marson', email: 'mark.neilson.gmail.com', password: 'passthethird')
users << User.new(first_name: 'Grover', last_name: 'Cleveland', username: 'theprez', email: 'prez22@whitehouse.gov', password: 'passthfourth')
users << User.new(first_name: 'Iona', last_name: 'Sullivan', username: 'ivan', email: 'iona@yahoo.com', password: 'passfifth')
users << User.new(first_name: 'Ester', last_name: 'Green', username: 'egreen', email: 'greener@yahoo.com', password: 'passthesixth')
users << User.new(first_name: 'Rina', last_name: 'Owens', username: 'rinawen', email: 'ri.na@aol.com', password: 'passtheseventh')
users << User.new(first_name: 'Zackery', last_name: 'Conway', username: 'zackaway', email: 'zconway@gmail.com', password: 'passtheighth')
users << User.new(first_name: 'Kat', last_name: 'Davidson', username: 'katty', email: 'kat.hat@yahoo.com', password: 'passtheninth')

Chatroom.new(room_title: 'general', room_type: 'general', purpose: 'Main Public Chat').save!
general_chat = Chatroom.find_by(room_title: 'general')
users.each do |user|
  user.gravatar_url = Faker::Avatar.image
  user.save!
  ## add them all to main general chat
  # debugger
  UserChat.new(user_id: user.id, chatroom_id: general_chat.id).save!
end

guest_user = User.new(username: 'Guest', first_name: 'Anon', last_name: 'Anonymous', email: 'guest@guestables.com', password: 'wizardhat1')
guest_user.save
test_user = User.new(username: 'test', first_name: 'Tester', last_name: 'Testing', email: 'test@testables.com', password: 'wizardhat2')
test_user.save


Chatroom.new(room_title: 'ruby', room_type: 'general', purpose: 'RubyLang').save!
Chatroom.new(room_title: 'javascript', room_type: 'general', purpose: 'JScripters').save!
Chatroom.new(room_title: 'c++', room_type: 'general', purpose: 'C++ wins!').save!
Chatroom.new(room_title: 'languages', room_type: 'general', purpose: 'Languages of the worl').save!
Chatroom.new(room_title: 'travel', room_type: 'general', purpose: 'Travel the world over').save!
Chatroom.new(room_title: 'food', room_type: 'general', purpose: 'Tasy eats').save!
Chatroom.new(room_title: 'nyc Spots', room_type: 'general', purpose: '').save!
Chatroom.new(room_title: 'trains', room_type: 'general', purpose: 'I like trains').save!
Chatroom.new(room_title: 'weather', room_type: 'general', purpose: 'Cloudy with a chance of meatballs').save!
Chatroom.new(room_title: 'random ', room_type: 'general', purpose: '9').save!
Chatroom.new(room_title: 'dessert', room_type: 'general', purpose: 'Delicious treats').save!
