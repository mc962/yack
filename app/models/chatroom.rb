# == Schema Information
#
# Table name: chatrooms
#
#  id         :integer          not null, primary key
#  room_title :string           not null
#  room_type  :string           not null
#  purpose    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chatroom < ApplicationRecord
  validates :room_title, :room_type, presence: true
  validates :room_title, uniqueness: true
  validates :room_type, inclusion: { in: %w(general direct_message) }

  has_many :messages, -> {order(created_at: :asc)} ### -> is shorthand for lambda creation, like proc for making a Proc
  has_many :user_chats
  has_many :users, through: :user_chats, source: :user

  def find_by_chatroom_name(name)
    Chatroom.find_by(room_title: name)
  end

  def find_by_chatroom_type(type)
    Chatroom.find_by(room_type: type)
  end

  def rebuild_room_title(currentUserUsername)
    old_room_title_users = self.room_title.split(', ')
    new_room_title_users = old_room_title_users.select{|username| username != currentUserUsername }
    self.room_title = new_room_title_users.sort.join(', ')
  end
end
