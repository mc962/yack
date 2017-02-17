import React from 'react'
import ChannelPickerContainer from './channel_picker_container';
// import CurrentChannelContainer from './current_channel_container';
import CurrentChannel from './current_channel';
const Display = ({ children }) => {


    return(
      <div className='display-container'>
        <div className='profile-informaiton'>

        </div>


        <header className='channel-information'>
          <h2>{ `Welcome, lazy ${currentUser.username}` }</h2>

        </header>


        <sidebar className='channel-selection'>
            <ChannelPickerContainer />
        </sidebar>
        <section className='current-channel-container'>
          <CurrentChannel />
        </section>

      </div>
    )


}

export default Display;
