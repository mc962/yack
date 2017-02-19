import React from 'react'
import ChannelPickerContainer from './channel_picker/channel_picker_container';
import CurrentChannelContainer from './current_channel/current_channel_container';
import CurrentChannel from './current_channel/current_channel';
import ProfileContainer from './profile/profile_container'
const Display = ({children}) => {


    return(
      <div className='display-container'>


        <sidebar className='channel-selection'>
          <div className='profile-information'>
            <ProfileContainer />    
            {/* at the moment, this isnt a component, so probably doesnt reset until refresh*/}
          </div>
            <ChannelPickerContainer />
        </sidebar>

        <section className='current-channel-container'>
          <header className='channel-information'>
            This is my current channel
          </header>
          <section className='messages-container'>
            {children}
          </section>
        </section>

      </div>
    )


}

export default Display;
