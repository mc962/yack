import React from 'react';
// import PublicChannel from './public_channel';
import { Link, withRouter } from 'react-router';

import Display from './display.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.loginHandler = this.loginHandler.bind(this);
    this.signupHandler = this.signupHandler.bind(this);

  }

  loginHandler(e) {
    e.preventDefault();
    this.props.router.push('login');
  }

  signupHandler(e) {
    e.preventDefault();
    this.props.router.push('signup');
  }

  render() {

    if (this.props.currentUser) {
      return(
          <section className="display-container">
            <Display tempUserName={this.props.currentUser.username} />

          </section>
      );

    } else {
      return(
        <div className='home-container entry-links'>
          <header className='home-bar'>
            <img src={images.cartoon_yak} alt="A yak" className='home-yak-logo' />
            <div className='home-login-link'>
              <div onClick={this.loginHandler} className='login-anchor'>Log In</div>
            </div>
          </header>


          <div className='signup-box'>
            <h1 className='site-title'>Yack</h1>
            
            <div className="signup-link">
              <div onClick={this.signupHandler} className='signup-anchor'>Sign Up</div>
            </div>
          </div>
          <img src={images.majestic_yak} alt='Majestic yak' className='background' />
        </div>
      );
    }
  }
}

export default withRouter(Home);
