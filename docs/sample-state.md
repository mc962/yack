```javascript
{

  currentUser: {
    id: 1,
    first_name: 'Bob',
    last_name: 'Builder',
    username: 'bobdabuilder',
    email: 'bob@builders.gov',
// subscribed_channels includes DMs     
    publicMessageChannels: {
      1: {room_title: 'general'},
      2: {room_title: 'random'},
      3: {room_title: 'dragons'}
     },
     directMessageChannels: {
       1: {room_title: robAndCob:},
       2: {room_title: bobAndRob},
       3: {room_title: bobAndCob}
     }
  },
///////////
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createMessage: {}
    editMessage: { content: content }
  },
///////////
  channels: {
    1: {room_title: generalChannel},
    2: {room_title: bobChannel1},
    3: {room_title: bobChannel2}
  }
///////////
  users: {
    1: { username: 'bob'},
    2: { username: 'bill'}
    2: { username: 'rob'}
  }
///////////
///////////
  // current channel taken depending on link
  // this is the only time the app really retrieves
  // messages, when the user is on the current channel,
  // can check by confirming on slack
  currenChannel: {
    messages: {
      1: { content: content },
      2: { content: content },
      3: { content: content }
    }
  }
///////////
}
```
