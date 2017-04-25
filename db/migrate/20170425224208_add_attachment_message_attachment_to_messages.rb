class AddAttachmentMessageAttachmentToMessages < ActiveRecord::Migration
  def self.up
    change_table :messages do |t|
      t.attachment :message_attachment
    end
  end

  def self.down
    remove_attachment :messages, :message_attachment
  end
end
