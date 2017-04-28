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
#

class Message < ApplicationRecord
  # pdf, doc, ppt, xls, zip, docx, pptx, xlsx, txt
  CONTENT_TYPES = [
                     "application/pdf",
                     "application/zip",
                     "text/plain",
                     "application/msword",
                     "application/vnd.ms-excel",
                     "application/vnd.ms-powerpoint",
                     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                     "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                     /\Aimage\/.*\Z/
                  ]

  validates :content, :user, :chatroom, presence: true
  validates :message_type, inclusion: { in: %w(message attachment) }
  belongs_to :user
  belongs_to :chatroom

# code files appear to be parsed into code snippets
  has_attached_file :message_attachment,
                    styles: lambda { |a| a.instance.check_file_type }


  validates_attachment :message_attachment, content_type: { content_type: CONTENT_TYPES }, size: { in: 0..5.megabytes}
# currently will be limited to static content such as documents and images for simplicity and proof of concept
    # # if: :is_video_type?, purposely excluding video attachments due to resource constraints


# be sure to test this as a production env before pushing to HEROKU?
  def download_url(style = :original)    
    if Rails.env.development?
      self.message_attachment.url
    elsif Rails.env.production?
      message_attachment.s3_bucket.objects[message_attachment.s3_object(style_name).key].url_for(
        :read,
        secure: true,
        expires: 24*3600,
        response_content_disposition: "attachment; filename='#{message_attachment_file_name}'").to_s
    end
  end

  def check_file_type
    if is_image_type?
      {:small => "360x270>", :large => "400x500>"}
    elsif is_document_type?
      {}
    else
      {}
    end
  end

  # private

  def is_image_type?
    message_attachment_content_type =~ %r(image)
  end

  def is_document_type?
    CONTENT_TYPES.include?(message_attachment_content_type)
  end

  # def self.supported_content_extensions
  #   supported_document_types + supported_image_types
  # end
  #
  # def self.supported_document_types
  #   DOCUMENT_TYPES
  # end
  #
  # def self.supported_image_types
  #   [/\Aimage\/.*\Z/]
  # end
end
