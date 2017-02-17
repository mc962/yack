import React from 'react';
import { Link } from 'react-router';

import GeneralChannelPickerItem from './general_channel_picker_item';
import DMChannelPickerItem from './dm_channel_picker_item';
// ask about how to link things in
class ChannelPicker extends React.Component {
  constructor(props) {
    super(props)

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
          <button className='new-dm-button'>+</button>
            <ul className='dm-channels-list channels-list'>
              {dmChannelElements}
            </ul>

        </div>
      </div>
    )
  }
}



export default ChannelPicker;
