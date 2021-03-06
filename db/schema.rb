# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170428181832) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chatrooms", force: :cascade do |t|
    t.string   "room_title", null: false
    t.string   "room_type",  null: false
    t.string   "purpose"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["room_title"], name: "index_chatrooms_on_room_title", unique: true, using: :btree
    t.index ["room_type"], name: "index_chatrooms_on_room_type", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.text     "content",                                      null: false
    t.integer  "user_id",                                      null: false
    t.integer  "chatroom_id",                                  null: false
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.string   "message_type"
    t.string   "message_attachment_file_name"
    t.string   "message_attachment_content_type"
    t.integer  "message_attachment_file_size"
    t.datetime "message_attachment_updated_at"
    t.string   "message_title",                   default: ""
    t.string   "message_comment",                 default: ""
    t.index ["chatroom_id"], name: "index_messages_on_chatroom_id", using: :btree
    t.index ["message_title"], name: "index_messages_on_message_title", using: :btree
    t.index ["user_id"], name: "index_messages_on_user_id", using: :btree
  end

  create_table "user_chats", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "chatroom_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["chatroom_id"], name: "index_user_chats_on_chatroom_id", using: :btree
    t.index ["user_id"], name: "index_user_chats_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                     null: false
    t.string   "first_name",                   null: false
    t.string   "last_name",                    null: false
    t.string   "password_digest",              null: false
    t.string   "session_token",                null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "email",                        null: false
    t.string   "gravatar_url"
    t.string   "profile_picture_file_name"
    t.string   "profile_picture_content_type"
    t.integer  "profile_picture_file_size"
    t.datetime "profile_picture_updated_at"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
