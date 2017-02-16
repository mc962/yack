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

require 'test_helper'

class ChatroomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
