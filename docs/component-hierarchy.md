# Component Hierarchy


## Components

#### AuthFormContainer
    <Sign in>
    <Sign up>

#### Home


#### PersonalDetailsContainer
    - requestUser
    <ProfileMenu>
      - user.username
    <SignOutForm>
      - user.id

#### ChannelSelectionContainer
    - <Channels>
      - requestChannels
      - roomTitle
    - <DirectMessages>
    - requestDirectMessages
      - roomTitle

#### NewChannelForm

#### DirectMessagesForm
    - users

#### ChannelInformationContainer
    -  <ChannelInformation>
          - channelTitle
          - channelType
    -  <Search (Bonus)>

#### MessagesContainer
    - requestChannelMessages
    - <MessagesDisplay>
      - messages
      - <MessagesDisplayItem>
        - message.content
        - message.id
        - user.email (for gravatars as avatar picture, default is blank face)
    - <MessageInputForm>
      - user.id
      - user.email (for gravatars, not yet decided)

#### Emojis (Bonus)

## Routes
 path                   | component
 -----------------------|--------------------------------------------------------
 "/"                    | "Home"
"/sign-in"              | "AuthFormContainer"
"/sign-up"              | "AuthFormContainer"
"/channels"             | "ChannelSelectionContainer, PersonalDetailsContainer"
"/channels/:channelId"  | "ChannelInformationContainer, MessagesContainer"


- <abcd> - <> brackets represent a component
- some text - represents props they may need
<!-- going to a different channel changes the route, messages will not -->
