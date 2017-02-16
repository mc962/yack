class Message < ApplicationRecord
  validates :content, :user_id, :chatroom_id, presence: true
  belongs_to :user
  belongs_to :chatroom
end
