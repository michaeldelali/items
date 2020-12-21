import React, { Component } from 'react'
import {signInWithGoogle,signInWithFacebook,auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default class SignUp extends Component {
    constructor() {
        super();
    
        this.state = {
          displayName: '',
          email: '',
          password: '',
          confirmPassword:''
        };
      }

      handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, { displayName });
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };
    
      handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };

    
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
                <div className="form-container sign-up-container">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <span onClick={signInWithGoogle} className="social"><i className="fab fa-google"></i></span>
                            <span onClick={signInWithFacebook} className="social"><i className="fab fa-facebook"></i></span>
                            {/* <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
                        </div>
                        <span>or use your email for registration</span>
                        <input 
                            type="text" 
                            placeholder="Name"
                            name='displayName'
                            value={displayName}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="email" 
                            placeholder="Email"
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={this.handleChange}
                            required
                        />
                      
                        <button>Sign Up</button>
                    </form>
                </div>
        )
    }
}
