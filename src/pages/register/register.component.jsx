import React, {Component} from 'react';
import SignUp from '../../components/signUp/sign-up.component';
import SignIn from '../../components/signIn/sign-in.component';
import './register.styles.scss';


class Register extends Component {

    componentDidMount(){
        // const {handleSignup} = useContext(firebaseAuth)
        // console.log(handleSignup)
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');

        // for small screens
        const signUpSmallButton = document.getElementById('small-signUp');
        const signInSmallButton = document.getElementById('small-signIn');

        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });

        //for small screens
        signUpSmallButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInSmallButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }


    render() {
        return (
        <div className='signInUp'>
                <div className='m-2 d-flex flex-row justify-content-center small-screen-buttons'>
                <button className='m-2'id='small-signIn'>Sign In</button>
                <button className='m-2' id='small-signUp'>Sign Up</button>
                </div>
            <div className="container" id="container">
                <SignUp/>
                <SignIn/>
            <div className="overlay-container hidden-sm hidden-xs">
                        <div className="overlay hidden-sm hidden-xs">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected please login with your personal info</p>
                                <button className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Register</h1>
                                <p>Enter your personal details</p>
                                <button className="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
            </div>
            </div>             
        </div>
        );
    }
}

export default Register;

