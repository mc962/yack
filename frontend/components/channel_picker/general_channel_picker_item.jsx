import React from 'react';
import { Link, withRouter } from 'react-router';

const GeneralChannelPickerItem = ({roomTitle, channelId, params}) => {
  let classList = 'general-channel-element channel-element';

  if (channelId === parseInt(params.id)) {
    classList += " selected-channel-element"
  } else {
    classList = 'general-channel-element channel-element general-hoverable'
  }

  let listEl = (
    <li className={classList}>
       <Link to={`/channels/${channelId}`}>
        {roomTitle}
      </Link>
    </li>
  )



  return (
    listEl
  )
};


export default withRouter(GeneralChannelPickerItem)
