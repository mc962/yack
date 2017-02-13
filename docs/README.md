# Yack

## A Slack Clone

**Heroku Link**: '#'

**Trello Link**: '#'

### Minimum Viable Product:
Yack is a Slack-based real-time messaging application for communication
between teams. It is built on Ruby on Rails and React/Redux.
By February 24, 2017 this application will at minimum implement the following
required features with smooth, bug-free navigation, sufficient CSS styling,
and seed data.

<hr>

### Features
#### Required
1. Hosting on Heroku
2. New account creation, login, and guest/demo login
3. Live chat
4. Channels
5. Direct Message
6. Teams or multi-person DM
7. Production README

#### Bonus
8. Emojis
9. Password Recovery
10. Attachments
11. Color Picker
12. Search Messages
13. Notifications

<hr>

### Design Documents
- [Wireframes](/wireframes/)
- [Component Hierarchy](component-hierarchy.md)
- [Sample State](sample-state.md)
- [Schema](schema.md)
- [Api Endpoints](api-endpoints.md)

<hr>

### Implementation Timeline

#### Phase 1: Backend setup with Front End User Authentication (2 days)
**Objective**: A functioning Rails application with basic user authentication on front and back ends, including adequate styling of related forms.

#### Phase 2: Implement Chatroom, Message MVC on backend (1/2 day)
**Objective**: Setup models and associations for the corresponding data models. Start on front-end implementation for the rest of the day.

#### Phase 3: Begin implementation of main chat page with Messages and MessageInput components (1.5 days)
**Objective**: Set up components relating to displaying messages and inputting new messages in order to test basic (not real-time) chat functionality. Begin implementing basic CSS for future containers.

#### Phase 4: Continue implementation of main chat page with Channel Selection, Channels, and Direct Message components. (2 days)
**Objective**: Set up components relating to displaying Channels and Direct Messages. Add form components for creation of new Channels and Direct Messages. Continue implementing and refining CSS for current and future containers.

#### Phase 5: Real-time chat implementation utilizing ActionCable (2 days)
**Objective**: Users will be able to send and receive messages in real-time utilizing ActionCable, the Rails 5 implementation of the WebSockets protocol. Polish up CSS if time.

#### Phase 6: Implement Personal Details and Channel Information components, as well as signout form. (1 day)
**Objective**: User's personal information and the Channel's information will be in their appropriate containers. All necessary CSS styling should be finished.

#### Bonus: Implement Bonus Features as time allows (1-2 days)
**Objectives**:
- Give users emojis using Gemoji gem.
- Give users ability for email-based account activation and password recovery through ActionMailer and additional database columns for an activation digest and activation status.
- Show users as online/offline in real-time, also with ActionCable
- Give users ability to upload attachments with Paperclip gem.
- Give users ability to change profile color scheme with a basic color picker
- Implement Search Bar component to allow users to search for particular messages (possibly by preset keywords).
- Implement notifications for when users receive a message addressed to them.
