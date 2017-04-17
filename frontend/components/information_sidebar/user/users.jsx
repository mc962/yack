import React from 'react'
import DirectoryListItem from './directory_list_item'

class Users extends React.Component {
  constructor(props) {
    super(props)
  }

  getListItems() {
    let items = []
    if (this.props.users) {
      const userList = this.props.users
      items = Object.keys(this.props.users).map((userId, idx) => {
        const user = userList[userId];
        return <DirectoryListItem key={idx}
          userId={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          username={user.username}
          gravatarUrl={user.image_url} />
      })
    }

    return items;
  }

  render() {
    const userDirectory = this.getListItems();

    return (
      <section className='user-directory'>
        <ul className='user-directory-list'>
          {userDirectory}
        </ul>
      </section>
    )
  }
}

export default Users;
