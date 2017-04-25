# == Schema Information
#
# Table name: users
#
#  id                           :integer          not null, primary key
#  username                     :string           not null
#  first_name                   :string           not null
#  last_name                    :string           not null
#  password_digest              :string           not null
#  session_token                :string           not null
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  email                        :string           not null
#  gravatar_url                 :string
#  profile_picture_file_name    :string
#  profile_picture_content_type :string
#  profile_picture_file_size    :integer
#  profile_picture_updated_at   :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
