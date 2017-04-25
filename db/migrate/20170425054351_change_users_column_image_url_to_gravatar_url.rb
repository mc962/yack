class ChangeUsersColumnImageUrlToGravatarUrl < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :image_url, :gravatar_url
  end
end
