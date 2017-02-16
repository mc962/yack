User.destroy_all

User.create(username: 'bob', first_name: 'bobby', last_name: 'buildman', password: 'builder').save!
