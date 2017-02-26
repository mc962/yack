import React from 'react';

import { Link, withRouter } from 'react-router';


class SessionForm extends React.Component {
   constructor(props) {
     super(props);
     this.state= {
       username: "",
       password: "",
       first_name: "",
       last_name: "",
       email: ""
     };

     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.redirect = this.redirect.bind(this);
   }

   handleInputChange(e) {
     e.preventDefault(e);
     const value = e.currentTarget.value;
     this.setState({[e.currentTarget.id]: value});
   }

   redirect(newRoute) {
     this.props.router.push(newRoute);
   }

   handleGuestSubmit(e) {
     e.preventDefault();
     const user = { username: 'Guest', password: 'wizardhat1'};
     this.props.guestLogin(user).then(() => this.redirect('/'));

   }

   handleSubmit(e) {
     e.preventDefault();
     const user = Object.assign({}, this.state);

     this.props.processForm(user).then(() => this.redirect('/'),
    this.setState({username: "", password: "", first_name: "", last_name: "", email: ""}));



    /////////////////errors dont get cleared///////////errros need some work
   }

   componentWillReceiveProps(newProps) {

     if (this.props.route.path !== newProps.route.path) {
       this.props.clearErrors();
     }
   }

   render() {
     let errList = [];
     let firstNameErr = '';
     let lastNameErr = '';
     let userNameErr = '';
     let emailErr = '';
     let passwordErr = '';


     if (this.props.errors) {
      //  errList = this.props.errors.map((err, idx) => {
      //    return <li className='entry-form-error' key={idx}>{err}</li>;
      //    });

          if (this.props.errors.includes('first_name')){
            firstNameErr = ' errorable';
          }
          if (this.props.errors.includes('last_name')) {
            lastNameErr = ' errorable';
            }
          if (this.props.errors.includes('username')) {
            userNameErr = ' errorable';
          }
          if (this.props.errors.includes('email')) {
            emailErr = ' errorable';
          }
          if (this.props.errors.includes('password')) {
            passwordErr = ' errorable';
          }
        }

       let altActionLink = '';
           if (this.props.formType === 'login') {
             altActionLink = '/signup';
           } else if (this.props.formType === 'signup') {
             altActionLink = '/login';
           }


////////////////////////
    let form;
    let errorClass ;
    if (errList.length > 0) {
      errorClass= ' errorable';
    } else {
      errorClass = '';
    }

     if (this.props.formType === 'signup') {
       form = (
         <div className='form-container'>
           <header className= 'session-form-header'>
             <div className='yak-logo'>
               <img src={images.cartoon_yak} alt="A yak" />
             </div>
             <div className='login-button-link'>
               <Link className="login-link" to={altActionLink}>Sign In</Link>
             </div>
           </header>

           <form className='session-form signup-form' onSubmit={this.handleSubmit}>
             <h1 className='form-heading'>Sign Up</h1>

             <div className="form-main">

               <div className='session-form-section'>
                 <div className= 'full-name'>
                   <div className='full-name-label'>Your name</div>
                   <div htmlFor='full-name' className='full-name-label'>
                     <input type='text' className={'name-input session-input field-input' + firstNameErr} id='first_name' placeholder='First Name' onChange={this.handleInputChange} value={this.state.first_name} />
                     <input type='text' className={'name-input session-input field-input' + lastNameErr} id='last_name' placeholder='Last Name' onChange={this.handleInputChange} value={this.state.last_name} />
                   </div>
                 </div>

               </div>

               <div className='session-form-section'>
                 <div className='username-label-input'>
                   <label htmlFor='username' className='session-input-label'>Username</label>
                   <input type='text' className={'session-input field-input username-input' + userNameErr} id='username' placeholder='awesomePerson' onChange={this.handleInputChange} value={this.state.username} />
                 </div>

                 <div className='email-label-input'>
                   <label htmlFor='email' className='session-input-label'>Email</label>
                   <input type="email" className={'session-input field-input email-input' + emailErr} id='email' placeholder='you@awesome.com' onChange={this.handleInputChange} value={this.state.email} />
                 </div>

                 <div className='password-label-input'>
                   <label htmlFor='password' className='session-input-label'>Password</label>
                   <input type='password' className={'session-input field-input password-input' + passwordErr} id='password' placeholder='password' onChange={this.handleInputChange} value={this.state.password} />
                 </div>


               </div>
             </div>


             <div className='guest-login'>Click <div onClick={this.handleGuestSubmit} className='guest-login-button'>here</div> to login as a guest.</div>

             <input type='submit' className='form-submit session-input' value='Sign Up' />

           </form>

         </div>
       );
     } else if (this.props.formType === 'login') {
       let errClass;
       if (errList.length > 0) {
         errClass = " errBar";
       } else {
         errClass = "";
       }
       form = (
         <div className='form-container'>
           <header className= 'session-form-header'>
             <div className='yak-logo'>
               <img src={images.cartoon_yak} alt="A yak" />
             </div>
             <div className='login-button-link'>
               <Link className="login-link" to={altActionLink}>Sign Up</Link>
             </div>
           </header>
           <div className='login-form-container'>

             <form className='session-form login-form' onSubmit={this.handleSubmit}>
               <div className={'form-errors' + errClass}>
                 {errList}
               </div>
               <h1 className='form-heading'>Sign In</h1>

               <div className='session-form-section'>
                 <div className='form-main'>
                   <h4 className='signin-instructions'>Enter your <strong>username</strong> and <strong>password.</strong></h4>
                   <div className='username-label-input'>
                     <input type='text' className='session-input field-input username-input' id='username' placeholder='awesomePerson' onChange={this.handleInputChange} value={this.state.username} />
                   </div>

                   <div className='password-label-input'>
                     <input type='password' className='session-input field-input password-input' id='password' placeholder='password' onChange={this.handleInputChange} value={this.state.password} />
                   </div>


                 </div>


               </div>

               <div className='guest-login'>Click <div onClick={this.handleGuestSubmit} className='guest-login-button'>here</div> to login as a guest.</div>

               <input type='submit' className='form-submit session-input' value='Sign In' />
             </form>

           </div>
         </div>
       );
     }

     return form;


   }
 }

 export default withRouter(SessionForm);
