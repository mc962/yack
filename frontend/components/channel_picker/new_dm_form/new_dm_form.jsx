import React from 'react';
import Modal from 'react-modal';
import UserItem from './user_item';
import AutoCompleteSearch from './autocomplete_search'
// stick modal in parent container

export default class NewDMForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this.state = {input: ""}
  }

  componentDidMount() {
/// this isnt running when it needs to
    this.props.fetchAllUsers()
  }

  handleInputChange (e) {
    this.setState({input: e.currentTarget.value})
  }

  handleModalSubmit(e) {
    e.preventDefault()
  }


  render() {
    let availableUsers;
    /// might want to refactor here so we dont need to go through so many levels
    if (this.props.fetchedUsers) {
      //  availableUsers = this.props.fetchedUsers.map((user, idx) => {
      //   return <UserItem key={idx} username={user.username} userId={user.id} firstName={user.first_name} lastName={user.last_name} />
      availableUsers =  Object.keys(this.props.fetchedUsers).map((idx) => this.props.fetchedUsers[idx])

    } else {
      availableUsers = []
    }

    return (
      <div className="modal-form">

          <form className='dm-form'>
            <h1 className='dm-form-heading'>Direct Messages</h1>
            <div className='search-inputs'>
              <input type='text' className='dm-users-search' placeholder='Find or start a conversation' onChange={this.handleInputChange} value={this.state.input}/>
              <input type='submit' className='new-dm-submit' value='Go' />



                  <h4 className='users-heading'>Available Users</h4>
                  <AutoCompleteSearch users={availableUsers} />




            </div>
          </form>
        </div>

    )
  }
}
