class CreateEmoticons < ActiveRecord::Migration[5.0]
  def change
    create_table :emoticons do |t|
      t.string :icon, null: false
      t.integer :user_id, null: false
      t.integer :message_id, null: false

      t.timestamps
    end
    add_index :emoticons, :user_id
    add_index :emoticons, :message_id
  end
end
