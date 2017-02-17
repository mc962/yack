import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.submitLogout = this.submitLogout.bind(this)
  }

  submitLogout(e) {
    e.preventDefault();
    this.props.logout();
    if (session.currentUser) {
      // not sure if this is a good way to handle things
      this.props.router.push('/')
    }
  }

  render() {
    return(
        <section className="profile">
          <form className='logout-button' onSubmit={this.submitLogout}>
            <input type='submit' value='Broken Logout' />
          </form>
          <h3>{this.props.currentUser.username}</h3>

        </section>
    );
  }
}
