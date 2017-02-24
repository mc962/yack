# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#  gravatar_url    :string
#

class User < ApplicationRecord
  validates :username, :first_name, :last_name, :email, :session_token, :gravatar_url, presence: true
  validates :username, uniqueness: true
  validates :password_digest, presence: { message: "Password can't be blank."}
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  before_validation :ensure_gravatar_url

  has_many :messages
  has_many :user_chats, dependent: :destroy

  has_many :chatrooms, through: :user_chats, source: :chatroom

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    if user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def self.gravatar_for(user, options = { size: 35})
    gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
    size = options[:size]
    "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size}"

  end


  attr_reader :password


  def password=(password)
    @password = password
    self.password_digest = digest(password)
  end

  def digest(string)
    string_digest = BCrypt::Password.create(string)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end



  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_gravatar_url
    self.gravatar_url ||= User.gravatar_for(self)
    
  end

end
