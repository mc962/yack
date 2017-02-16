import React from 'react';
// import PublicChannel from './public_channel';
import { Link } from 'react-router';

import Display from './display.jsx';
class Home extends React.Component {
  constructor(props) {

    super(props);
    this.submitLogout = this.submitLogout.bind(this)
  }

  submitLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    if (this.props.currentUser) {
      return(
          <section className="display-container">
            <Display tempUserName={currentUser.username} />
          </section>
      );


    } else {
      return(
        <div className='home-container entry-links'>
          <header className='home-bar'>
            <img src={images.cartoon_yak} alt="A yak" className='home-yak-logo' />
            <div className='home-login-link'>
              <Link to="login" className='login-anchor'>Log In</Link>
            </div>
          </header>
          <div className='signup-box'>
            <div className="signup-link">
              <Link to="signup" className="signup-anchor">Sign Up</Link>
            </div>
          </div>
          <img src={images.majestic_yak} alt='Majestic yak' className='background' />
        </div>
      );
    }
  }
}

export default Home;
