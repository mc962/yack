import React from 'react';

const GMListItem = ({roomTitle, chatroomId, dateCreated, numUsers, handleItemClick}) => {



  let listEl = (
    <li className='chatroom-table-element' onClick={handleItemClick}
      value={chatroomId}>
      <div className='chatroom-info'>
        <div className='room-descriptors'>
          <div className='room-title'># {roomTitle}</div>
          <div className='date-created'>Created on {dateCreated}</div>
        </div>
        <div className= 'people-stats'>
          <i className="fa fa-user-o" aria-hidden="true"></i>
          <div className='num-users'>{numUsers}</div>

        </div>
      </div>


    </li>
  )

  return listEl;
}

export default GMListItem;
