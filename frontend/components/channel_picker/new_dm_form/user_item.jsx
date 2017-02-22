import React from 'react';

const UserItem = ({username, userId, firstName, lastName, handleItemClick}) => {



  let listEl = (
    <li className='user-table-element' onClick={handleItemClick} value={userId}>
      <div className='dm-user-info'>

        <div className='dm-user-picture'>:)</div>
        <div className='dm-username'>{username}</div>
        <div className='dm-user-fullname'>{firstName} {lastName}</div>

      </div>
    </li>
  )

  return listEl
}

export default UserItem;
