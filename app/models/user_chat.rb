# == Schema Information
#
# Table name: user_chats
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  chatroom_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class UserChat < ApplicationRecord
  validates :user, :chatroom, presence: true
  validates :user, uniqueness: {scope: :chatroom, message: "Only join a chatroom once"}
  belongs_to :user
  belongs_to :chatroom

  def self.find_subscription(subscription)

    UserChat.where(user_id: subscription[:user_id])
    .where(chatroom_id: subscription[:chatroom_id])
  end
end
