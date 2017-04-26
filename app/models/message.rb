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
#

class Message < ApplicationRecord
  # pdf, doc, ppt, xls, zip, docx, pptx, xlsx, txt
  DOCUMENT_TYPES = %w(application/pdf
                     application/zip
                     text/plain
                     application/msword
                     application/vnd.ms-excel
                     application/vnd.ms-powerpoint
                     application/vnd.openxmlformats-officedocument.wordprocessingml.document
                     application/vnd.openxmlformats-officedocument.presentationml.presentation
                     application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
                     )
  validates :content, :user, :chatroom, presence: true
  validates :message_type, inclusion: { in: %w(message attachment) }
  belongs_to :user
  belongs_to :chatroom

# code files appear to be parsed into code snippets
  has_attached_file :message_attachment,
                    styles: lambda { |a| a.instance.check_file_type }
# currently will be limited to static content such as documents and images for simplicity and proof of concept
    # if: :is_image_type?, content_type: { content_type: /\Aimage\/.*\Z/ }, size: { in: 0..5.megabytes}
    # # if: :is_video_type?, purposely excluding video attachments due to resource constraints
    # if: :is_document_type?, content_type: { in: DOCUMENT_TYPES }, size: { in: 0..5.megabytes}

# should use > to keep proportion


  def check_file_type
    if is_image_type?
      validates_attachment :message_attachment,
        content_type: { content_type: /\Aimage\/.*\Z/ },
        size: { in: 0..5.megabytes}

      return {small: '360x270>', large: '400x500>'}
    elsif is_document_type?
      validates_attachment :message_attachment,
        content_type: { in: DOCUMENT_TYPES },
        size: { in: 0..5.megabytes}
    else
      {}
    end
  end

  def is_image_type?
    file_content_type =~ %r(image)
  end

  def is_document_type?
    DOCUMENT_TYPES.include?(file_content_type)
  end
end
