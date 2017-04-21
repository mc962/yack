import React from 'react';
import { Link, withRouter } from 'react-router'

const QuickUserItem = ({userId, username, gravatarUrl, paramId}) => {
  return (
    <li className='quick-user-item-container'>
      <div className='quick-user-item-links'>        
        <Link to={`/channels/${paramId}/users/${userId}`} className='quick-user-image-anchor'>
          <div className='quick-user-picture-container'>
            <img src={gravatarUrl} alt={username} className='quick-user-picture' />
          </div>
        </Link>
        <Link to={`/channels/${paramId}/users/${userId}`} className='quick-user-name-anchor'>
          {username}
        </Link>
      </div>
    </li>
  )
}

export default withRouter(QuickUserItem);
