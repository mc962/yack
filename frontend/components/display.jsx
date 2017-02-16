import React from 'react'
import ChannelPickerContainer from './channel_picker_container';

export default class Display extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='display-container'>
        <header className='channel-information'>
          <h2>{ `Welcome, lazy ${this.props.tempUserName}` }</h2>
          <form className='logout-button' onSubmit={this.submitLogout}>
            <input type='submit' value='Logout' />
          </form>
        </header>
        <sidebar className='channel-selection'>
            <ChannelPickerContainer />
        </sidebar>
        <div className='message-container'>

        </div>

      </div>
    )

  }
}
