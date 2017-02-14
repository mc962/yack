User.destroy_all

User.create(username: 'bob', first_name: 'bobby', last_name: 'buildman', email: 'bob@builder.gov', password: 'builder').save!
