import React from 'react'

import ChannelPickerContainer from './channel_picker/channel_picker_container';

import ProfileContainer from './profile/profile_container'

const Display = ({children}) => {


    return(
      <div className='display-container'>


        <sidebar className='channel-selection'>
          <div className='profile-information'>
            <ProfileContainer />
          </div>
            <ChannelPickerContainer />
        </sidebar>

          <section className='current-channel-container'>
            {children}
          </section>

      </div>
    )


}

export default Display;
