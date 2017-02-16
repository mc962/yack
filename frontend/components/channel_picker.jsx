import React from 'react';
import { Link } from 'react-router';

import GeneralChannelPickerItem from './general_channel_picker_item';
import DMChannelPickerItem from './dm_channel_picker_item';
// ask about how to link things in
class ChannelPicker extends React.Component {

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
          <label>Channels
            <ul className='general-channels-list'>
              {generalChannelElements}
            </ul>
          </label>
        </div>
        <ul className='dm-channels'>
          {dmChannelElements}
        </ul>
      </div>
    )
  }
}



export default ChannelPicker;
