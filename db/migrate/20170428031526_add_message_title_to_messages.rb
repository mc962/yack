class AddMessageTitleToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :message_title, :string, default: ''
    add_index :messages, :message_title
  end
end
