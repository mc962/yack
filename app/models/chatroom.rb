class Chatroom < ApplicationRecord
  validates :room_title, :room_type, presence: true
  validates :room_title, unique: true
end
