# Schema Information

## users
column name     | data type | details
----------------|-----------|---------------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## messages
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
content         | text      | not null
user_id         | integer   | not null, indexed
chatroom_id     | integer   | not null, indexed

## chatrooms
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
room_title      | string    | not null, indexed, unique
room_type       | text      | not null
purpose         | text      |

<hr/>

## user_chatrooms
column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
chatroom_id     | integer   | not null, indexed
