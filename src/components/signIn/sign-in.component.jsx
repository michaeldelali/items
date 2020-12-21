import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import {signInWithGoogle,signInWithFacebook} from '../../firebase/firebase.utils';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: ''
        };
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        this.setState({ email: '', password: '' });
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };


    render() {
        return (      
            <div className="form-container sign-in-container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <span className="social" onClick={signInWithGoogle}><i className="fab fa-google"></i></span>
                        <span className="social" onClick={signInWithFacebook}><i className="fab fa-facebook"></i></span>
                    </div>
                    <span>or use your account</span>
                    <input 
                    type="email" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange} 
                    required
                    />
                    <input 
                    type="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    />
                    <a href="#">Forgot your password?</a>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        )
    }
}
