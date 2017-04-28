class AddColumnMessageCommentToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :message_comment, :string, default: ''
  end
end
