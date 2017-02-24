import React from 'react';

const GMListItem = ({roomTitle, chatroomId, dateCreated, numUsers, handleItemClick}) => {


//////keep on the look out for issues with using similar event handler names between similar ocmponent
  let listEl = (
    <li className='chatroom-table-element' onClick={handleItemClick}
      value={chatroomId}>
      <div className='chatroom-info'>
        <div className='room-title'>{roomTitle}</div>
        <div className='date-created'>{dateCreated}</div>
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
