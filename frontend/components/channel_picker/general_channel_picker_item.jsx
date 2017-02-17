import React from 'react';
import { Link } from 'react-router';

const GeneralChannelPickerItem = ({roomTitle, channelId}) => {
  return (
    <li className='general-channel-element channel-element'>
      # <Link to={`/channels/${channelId}`}>
        {roomTitle}
      </Link>
    </li>
  )
};

export default GeneralChannelPickerItem
