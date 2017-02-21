import React from 'react'

const MessageItem = ({username, content}) => {

  return (
    

      <li className='message-element'>

        <div className='user-picture'>:)</div>

        <div className='message-text'>


          <div className ='message-author'>{username}</div>
          <div className='message-content'>{content}</div>
        </div>




      </li>

  )
}
export default MessageItem;
