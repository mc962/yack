import React from 'react';
import Modal from 'react-modal';
import UserItem from './user_item';
// stick modal in parent container

export default class NewDMForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleModalSubmit = this.handleModalSubmit.bind(this);

  }

  componentDidMount() {
/// this isnt running when it needs to
    this.props.fetchAllUsers().then()
  }

  handleModalSubmit(e) {
    e.preventDefault()
  }


  render() {

    /// might want to refactor here so we dont need to go through so many levels
    const availableUsers = this.props.fetchedUsers.users.map((user, idx) => {
      return <UserItem key={idx} username={user.username} userId={user.id} firstName={user.first_name} lastName={user.last_name} />
    })

    return (
      <div className="modal-form">

          <form className='dm-form'>
            <h1 className='dm-form-heading'>Direct Messages</h1>
            <div className='search-inputs'>
              <input type='text' className='dm-users-search' placeholder='Find or start a conversation' />
              <input type='submit' className='new-dm-submit' value='Go' />

              <ul className='user-list'>

                  <h4 className='users-heading'>Available Users</h4>
                  {availableUsers}

              </ul>


            </div>
          </form>
        </div>

    )
  }
}
