User.destroy_all
Chatroom.destroy_all
Message.destroy_all
UserChat.destroy_all


20.times do
  begin
    randNum = rand(7)

    case randNum
    when 0
      username = Faker::StarWars.character
      first_name = Faker::StarWars.droid
      last_name = Faker::StarWars.droid
      email= Faker::Internet.safe_email
      password = Faker::Internet.password(6)
    when 1
      username = Faker::Pokemon.name
      first_name = Faker::Pokemon.name
      last_name = Faker::Pokemon.name
      email= Faker::Internet.safe_email
      password = Faker::Internet.password(6)
    when 2
      username= Faker::LordOfTheRings.character
      first_name= Faker::LordOfTheRings.character
      last_name= Faker::LordOfTheRings.character
      email= Faker::Internet.safe_email
      password= Faker::Internet.password(6)
    when 3
      username= Faker::Cat.name
      first_name= Faker::Cat.name
      last_name= Faker::Cat.name
      email= Faker::Internet.safe_email
      password= Faker::Internet.password(6)
    when 4
      username= Faker::Ancient.god
      first_name= Faker::Ancient.god
      last_name= Faker::Ancient.god
      email= Faker::Internet.safe_email
      password= Faker::Internet.password(6)
    when 5
      username= Faker::Ancient.primordial
      first_name= Faker::Ancient.primordial
      last_name= Faker::Ancient.primordial
      email= Faker::Internet.safe_email
      password= Faker::Internet.password(6)
    when 6
      username= Faker::Ancient::titan
      first_name= Faker::Ancient::titan
      last_name= Faker::Ancient::titan
      email= Faker::Internet.safe_email
      password= Faker::Internet.password(6)
    end

    User.new(username: username, first_name: first_name, last_name: last_name, email: email, password: password).save!

  rescue
    retry
  end
end
guest_user = User.new(username: 'Guest', first_name: 'Anon', last_name: 'Anonymous', email: 'guest@guestables.com', password: 'wizardhat1')
guest_user.save!
test_user = User.new(username: 'Test', first_name: 'Tester', last_name: 'Testing', email: 'test@testables.com', password: 'wizardhat2')
test_user.save!

test_user = User.new(username: 'Test', first_name: 'Tester', last_name: 'Testing', email: 'test@tester.com', password: 'wizardhat2')
test_user.save!


general_chat = Chatroom.new(room_title: 'general', room_type: 'general', purpose: 'main public chat').save!
9.times do
  begin
    randNum = rand(3)
    case randNum
    when 0
      room_title = Faker::StarWars.planet.downcase.delete(' ')
    when 1
      room_title = Faker::LordOfTheRings.location.downcase.delete(' ')
    when 2
      room_title = Faker::GameOfThrones.city.downcase.delete(' ')
    end
    room_type = ['general', 'direct_message'].sample
    purpose = Faker::Hipster.sentence(5)

    Chatroom.new(room_title: room_title, room_type: room_type, purpose: purpose).save!
  rescue
    retry
  end

end


gen_chat_id = Chatroom.find_by(room_title: 'general').id

  Chatroom.all.each do |chatroom|
    UserChat.new(user_id: guest_user.id, chatroom_id: chatroom.id).save!
    UserChat.new(user_id: test_user.id, chatroom_id: chatroom.id).save!
    User.all.each do |user|
      unless user.id == guest_user.id || user.id == test_user.id
        UserChat.new(user_id: user.id, chatroom_id: chatroom.id).save!
      end
    end
  end


User.all.each do |user|
  5.times do
    randNum = rand(5)
    case randNum
    when 0
      content = Faker::StarWars.quote
    when 1
      content = Faker::StarWars.wookie_sentence
    when 2
      content = Faker::ChuckNorris.fact
    when 3
      content = Faker::TwinPeaks.quote
    when 4
      content = Faker::Company.bs
    end


    chatroom_id = user.chatrooms.sample.id

    Message.new(content: content, user_id: user.id, chatroom_id: chatroom_id).save!
  end

end
