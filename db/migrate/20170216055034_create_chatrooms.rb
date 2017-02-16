class CreateChatrooms < ActiveRecord::Migration[5.0]
  def change
    create_table :chatrooms do |t|
      t.string :room_title, null: false
      t.string :room_type, null: false
      t.string :purpose

      t.timestamps
    end
    add_index :chatrooms, :room_title, unique: true
    add_index :chatrooms, :room_type
  end
end
