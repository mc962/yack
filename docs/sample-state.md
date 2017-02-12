```javascript
{

  currentUser: {
    id: 1,
    first_name: 'Bob'
    last_name: 'Builder'
    username: 'bobdabuilder'
    email: 'bob@builders.gov'  
  },
///////////
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createMessage: {}
  },
///////////
  channels: {
    generalChannel: {
      messages: {
        1: { content: content },
        2: { content: content },
        3: { content: content }
      }
    },
    bobChannel1: {
      bob1Messages: {
        4: { content: content },
        5: { content: content },
        6: { content: content }
      }
    },
    bobChannel1: {
      bob1Messages: {
        7: { content: content },
        8: { content: content },
        9: { content: content }
      }
    }
  }
///////////
  directMessages: {
    robAndCob: {
      robAndCobMessages: {
        1: { content: content },
        2: { content: content },
        3: { content: content }
      }
    }
    bobAndRob: {
      bobAndRobMessages: {
        1: { content: content },
        2: { content: content },
        3: { content: content }
      }
    }
    bobAndCob: {
      bobAndCobMessages: {
        1: { content: content },
        2: { content: content },
        3: { content: content }
      }
    }
  }
///////////
}
```
