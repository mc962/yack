import React from 'react';
import { Link } from 'react-router';

import GeneralChannelPickerItem from './general_channel_picker_item';
import DMChannelPickerItem from './dm_channel_picker_item';

import Modal from 'react-modal';
import NewDMFormContainer from './new_dm_form/new_dm_form_container';
// ask about how to link things in
class ChannelPicker extends React.Component {
  constructor(props) {
    super(props)
    this.handleNewDMClick = this.handleNewDMClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    /// change this back to false when finished styling
    this.state = {modalOpen: false}
  }


handleNewDMClick(e) {
  e.preventDefault()
  this.handleEscape = this.handleEscape.bind(this);
  this.setState({ modalOpen: true })
}

handleEscape(e) {
  e.preventDefault();
  this.setState({ modalOpen: false} );
}

render() {    // get an array of the channel elmenets
    const generalChannelElements = this.props.generalMessageChannels.map((channel, idx) => {
      return (
        <GeneralChannelPickerItem key={idx} roomTitle={channel.room_title} channelId={channel.id} />
      );
    });

    const dmChannelElements = this.props.directMessageChannels.map((channel, idx) => {
      return (
        <DMChannelPickerItem key={idx} roomTitle={channel.room_title} channelId={channel.id} />
      );
    });

    const modalChannels = {
      content: {
        top: '0%',
        right: '0%',
        bottom: '0%',
        left: '0%'
      }
    }

    return (

      <div className='sidebar-channels'>
        <div className='general-channels'>
          <span className='public-channels-button'>
            <button className='channel-type'>Channels
              <span className='public-channels-count'>({this.props.generalMessageChannels.length})</span>
            </button>
          </span>
            <ul className='general-channels-list channels-list'>
              {generalChannelElements}
            </ul>

        </div>
        <div className='dm-channels'>
          <button className='channel-type direct-messages-button'>Direct Messages</button>
          <button onClick={this.handleNewDMClick} className='new-dm-button'>+</button>

          <Modal
            isOpen={this.state.modalOpen} contentLabel="Modal"
            style={modalChannels}>
            <button className='modal-close-btn' onClick={this.handleEscape}><div className='x-icon'>x</div><div className='esc-text'>esc</div></button>
            <NewDMFormContainer />
          </Modal>

            <ul className='dm-channels-list channels-list'>
              {dmChannelElements}
            </ul>

        </div>
      </div>
    )
  }
}



export default ChannelPicker;
