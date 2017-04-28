# == Schema Information
#
# Table name: messages
#
#  id                              :integer          not null, primary key
#  content                         :text             not null
#  user_id                         :integer          not null
#  chatroom_id                     :integer          not null
#  created_at                      :datetime         not null
#  updated_at                      :datetime         not null
#  message_type                    :string
#  message_attachment_file_name    :string
#  message_attachment_content_type :string
#  message_attachment_file_size    :integer
#  message_attachment_updated_at   :datetime
#  message_title                   :string           default("")
#  message_comment                 :string           default("")
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
