import React from 'react';
import { Link, withRouter } from 'react-router';

const DMChannelPickerItem = ({roomTitle, channelId, params}) => {
  let classList = 'dm-channel-element channel-element';
  if (channelId === parseInt(params.id)) {
    classList += " selected-channel-element"
  } else {
    classList = 'dm-channel-element channel-element dm-hoverable'
  }

  return (
    <li className={classList}>
      <Link to={`/channels/${channelId}`}>
        {roomTitle}
      </Link>
    </li>
  )
};

export default withRouter(DMChannelPickerItem)
