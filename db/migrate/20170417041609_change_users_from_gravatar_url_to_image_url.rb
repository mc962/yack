class ChangeUsersFromGravatarUrlToImageUrl < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :gravatar_url, :image_url
  end
end
