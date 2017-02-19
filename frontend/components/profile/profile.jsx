import React from 'react';
import { withRouter } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.submitLogout = this.submitLogout.bind(this)
  }

  submitLogout(e) {
    e.preventDefault();
    this.props.logout();

      // not sure if this is a good way to handle things
    this.props.router.push('/')

  }

  render() {
    return(
        <section className="profile">
          <form className='logout-button' onSubmit={this.submitLogout}>
            {this.props.currentUser.username}
            <input type='submit' value='//Logout' />
          </form>
        </section>
    );
  }
}

export default withRouter(Profile)
