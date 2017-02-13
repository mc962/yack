# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

_Users_
- `POST /api/users` - creates new User on success
- `GET /api/user/:id` - gets user information for a particular user through id,
might be needed for certain user info requirements
<!-- - PATCH /api/users Bonus - allows for editing of user information-->

_Session_
- `POST /api/session` - creates new session to log use in
- `DELETE /api/session` - deletes session to log user out

_Channels_
- `GET  /api/channels` - gets a list of channels
- `POST /api/channels` - creates a new channel

_Messages_
- `GET /api/channels/channelId/messages` - gets a list of messages in a particular channel
- `POST /api/channels/channelId/messages` - posts a message to the messages in a particular channel
- `PATCH /api/messages/:messageId` - edits a particular message by messageId
- `DELETE /api/messages/:messageId` deletes a particular message by messageId
