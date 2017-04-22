# == Schema Information
#
# Table name: pictures
#
#  id             :integer          not null, primary key
#  name           :string
#  imageable_type :string
#  imageable_id   :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Picture < ApplicationRecord
  belongs_to :imageable, polymorphic: true, optional: true
  mount_uploader :picture, PictureUploader
end

# it looks like, all messages only can have 1 file attachment per message
# users only get 1 profile picture
