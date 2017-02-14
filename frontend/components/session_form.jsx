import React from 'react';

import { Link } from 'react-router';


 export default class SessionForm extends React.Component {
   constructor(props) {
     super(props);
     this.state= {
       username: "",
       password: ""
     };

     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.redirect = this.redirect.bind(this);
   }

   handleInputChange(e) {
     e.preventDefault(e);
     const value = e.currentTarget.value;
     this.setState({[e.currentTarget.id]: value});
   }

   redirect(newRoute) {
     e.preventDefault();
     this.props.router.push(newRoute);
   }

   handleSubmit(e) {
     e.preventDefault()
     const user = Object.assign({}, this.state);

     this.props.processForm(user).then(() => this.redirect('/'),
        this.setState({username: "", password: ""}));
   }

   render() {
     let errList = [];
     if (this.props.errors) {
       errList = this.props.errors.map((err, idx) => {
         return <li key={idx}>{err}</li>;
         });
       }
       let altActionLink = '';
           if (this.props.formType === 'login') {
             altActionLink = '/signup';
           } else if (this.props.formType === 'signup') {
             altActionLink = '/login';
           }

////////////////////////
    let form;
     if (this.props.formType === 'signup') {
       form = (
         <div>
           <h1>Sign Up</h1>
           <ul className='error-list'>{errList}</ul>
           <Link to={'/login'}>Login</Link>
           <form onSubmit={this.handleSubmit}>
             <label htmlFor='username'>Username</label>
             <input type='text' id='username' onChange={this.handleInputChange} value={this.state.username} />

             <label htmlFor='first-name'>First Name</label>
             <input type='text' id='first-name' onChange={this.handleInputChange} value={this.state.firstName} />

             <label htmlFor='last-name'>Last Name</label>
             <input type='text' id='last-name' onChange={this.handleInputChange} value={this.state.lastName} />

             <label htmlFor='email'>Email</label>
             <input type='text' id='email' onChange={this.handleInputChange} value={this.state.email} />

             <label htmlFor='password'>Password</label>
             <input type='password' id='password' onChange={this.handleInputChange} value={this.state.password} />

             <input type='submit' value='Sign Up' />
           </form>
         </div>
       )
     } else if (this.props.formType === 'login') {
       form = (
         <div>
           <h1>Log In</h1>
           <ul className='error-list'>{errList}</ul>
           <Link to={'/signup'}>Sign Up</Link>
           <form onSubmit={this.handleSubmit}>
             <label htmlFor='username'>Username</label>
             <input type='text' id='username' onChange={this.handleInputChange} value={this.state.username} />

             <label htmlFor='password'>Password</label>
             <input type='password' id='password' onChange={this.handleInputChange} value={this.state.password} />

             <input type='submit' value='Sign In' />
           </form>
         </div>
       )
     }

     return form;


   }
 }
