class AddGravatarUrlToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :gravatar_url, :string
  end
end
