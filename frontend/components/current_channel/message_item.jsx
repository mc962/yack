import React from 'react'

const MessageItem = ({username, content, gravatarUrl}) => {

  return (


      <li className='message-element'>

        <img className='user-picture' src={gravatarUrl} alt={username} />

        <div className='message-text'>


          <div className ='message-author'>{username}</div>
          <div className='message-content dont-break-out'>{content}</div>
        </div>




      </li>

  )
}
export default MessageItem;
