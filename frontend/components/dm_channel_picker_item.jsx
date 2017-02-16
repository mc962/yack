import React from 'react';
import { Link } from 'react-router';

const DMChannelPickerItem = ({roomTitle, channelId}) => {
  return (
    <li className='dm-channel-element'>
      <Link to={`/channels/${channelId}`}>
        {roomTitle}
      </Link>
    </li>
  )
};

export default DMChannelPickerItem
