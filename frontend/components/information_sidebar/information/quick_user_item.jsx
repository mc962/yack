import React from 'react';
import { Link, withRouter } from 'react-router'

const QuickUserItem = ({userId, username, gravatarUrl, paramId}) => {
  return (
    <li className='quick-user-item-container'>
      <Link to={`/channels/${paramId}/users/${userId}`} className='quick-user-anchor'>
        <img src={gravatarUrl} alt={username} className='quick-user-picture' />
      </Link>
      <Link to={`/channels/${paramId}/users/${userId}`} className='quick-user-anchor'>
        {username}
      </Link>
    </li>
  )
}

export default withRouter(QuickUserItem);
