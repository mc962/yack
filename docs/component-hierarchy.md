#Component Hierarchy#


##Components

###<AuthFormContainer>###
- <Sign in>
- <Sign up>

###<Home>###


###<PersonalDetailsContainer>###
- <ProfileMenu>
    - Username

###<ChannelSelectionContainer>###
    - <Channels>
    - <DirectMessage>

###<ChannelInformationContainer>###
-  <ChannelInformation>
      - ChannelTitle
-  <Search> (Bonus)

###<MessagesContainer>###
- <MessagesDisplay>
- <MessagesDisplayItem>
- messages
- <MessageInput>


##Routes
 path                   | component
 -----------------------|--------------------------------------------------------
"/sign-in"              | "AuthFormContainer"
"/sign-up"              | "AuthFormContainer"
"/"                     | "Home"
"/channels"             | "ChannelSelectionContainer, PersonalDetailsContainer"
"/channels/:channelId"  | "ChannelInformationContainer, MessagesContainer"



<!-- going to a different channel changes the route, messages will not -->
