import React, {useCallback,useContext} from 'react'
import 'font-awesome/css/font-awesome.min.css';
// import {signInWithGoogle,signInWithFacebook} from '../../firebase/firebase.utils';
import {withRouter,Redirect} from 'react-router'
import {Context} from '../../provider/AuthProvider'
import axios from 'axios';
import {decode,baseUrl} from '../../provider/decode';

const SignIn = ({history}) => { 

        const [currentUser,setCurrentUser]  = useContext(Context)

        const handleLogin = useCallback(
          async event => {
            event.preventDefault();

            const { email, password } = event.target.elements;

            const userAuthDetails = {
              email:email.value,
              password:password.value
            }

            console.log(userAuthDetails)
        

            // axios.get(baseUrl + 'users/checkToken',
            axios.post(baseUrl + 'users/login',
            userAuthDetails,
            {
              withCredentials: true,
              headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
            }
            )
            .then(res => {
              if (res.status === 200) {
                history.push('/');
                setCurrentUser(decode())
              } else {
                const error = new Error(res.error);
                throw error;
              }
            })
            .catch(err => {
              console.error(err);
              alert('Error logging in please try again');
            });
          },
          [history,setCurrentUser]
        );

        if (currentUser) {
          return <Redirect to="/" />;
        }

        return (      
            <div className="form-container sign-in-container">
              {console.log(currentUser)}
                <form onSubmit={handleLogin}>
                    <h1>Sign in</h1>
                    {/* <div className="social-container">
                        <span className="social" onClick={signInWithGoogle}><i className="fab fa-google"></i></span>
                        <span className="social" onClick={signInWithFacebook}><i className="fab fa-facebook"></i></span>
                    </div> */}
                    <span>use your account</span>
                    <input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    required
                    />
                    <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    required
                    />
                    <a href="/forgot?">Forgot your password?</a>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        );
};
export default  withRouter(SignIn);

