class CreateUserChats < ActiveRecord::Migration[5.0]
  def change
    create_table :user_chats do |t|
      t.integer :user_id, null: false
      t.integer :chatroom_id, null: false

      t.timestamps
    end
    add_index :user_chats, :user_id
    add_index :user_chats, :chatroom_id
  end
end
