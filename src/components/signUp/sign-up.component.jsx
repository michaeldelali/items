import React, {useCallback,useContext} from 'react'
import {withRouter} from "react-router";
import axios from 'axios';
import {Context} from '../../provider/AuthProvider'
import decode from '../../provider/decode'


const SignUp = ({history}) =>{

    const [currentUser,setCurrentUser]  = useContext(Context)
    
     const handleSubmit = useCallback (async event => {
        event.preventDefault();
    
        const { name, email, password, confirmPassword } = event.target.elements;

        const userDetails = {
          name: name.value,
          email:email.value,
          password:password.value
        }

        
        const userAuthDetails = {
          email:email.value,
          password:password.value
        }

        if (password.value !== confirmPassword.value) {
          alert("passwords don't match");
          return;
        }    
          
          await axios.post('http://localhost:9000/users/register', userDetails)
          .then(res => {
            if (res.status === 200){
              
              axios.post('http://localhost:9000/users/login',
              userAuthDetails,
              {
                withCredentials: true,
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
              }
              )
              .then(res => {
                if (res.status === 200) {
                  history.push('/');
                  console.log(res.status)
                  setCurrentUser(decode());
                } else {
                  const error = new Error(res.error);
                  throw error;
                }
              })
              .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
              });
            }
          }) 
          .catch(err => {
            console.error(err);
            alert('Error Registering... Please try again');
          });         
          const displayName = name.value;
          console.log(displayName)
          // history.push('/')
        },
        [history,setCurrentUser]
     );
          
    
        return (
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        {/* <div className="social-container">
                            <span onClick={signInWithGoogle} className="social"><i className="fab fa-google"></i></span>
                            <span onClick={signInWithFacebook} className="social"><i className="fab fa-facebook"></i></span>
                        </div> */}
                        <span>use your email for registration</span>
                        <input 
                            type="text" 
                            placeholder="Name"
                            name='name'
                            required
                        />
                        <input
                            type="email" 
                            placeholder="Email"
                            name='email'
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name='password'
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name='confirmPassword'
                            required
                        />
                      
                        <button>Sign Up</button>
                    </form>
                </div>
        )
}



// const SignUp = ({history}) =>{

//   const [displayName, setdisplayName] = useState('')
//   const [email, setemail] = useState('')
//   const [password, setpassword] = useState('')
//   const [cormfirmPassword, setcormfirmPassword] = useState('')

    
//      const handleSubmit = useCallback (async event => {
//         event.preventDefault();
    
//         const { name, email, password, confirmPassword } = event.target.elements;
    
//         if (password.value !== confirmPassword.value) {
//           alert("passwords don't match");
//           return;
//         }    
//         try {
//             const{user}= await auth
//             .createUserWithEmailAndPassword(
//             email.value,
//             password.value
//           );
//           const displayName = name.value;
//           console.log(displayName)
//           console.log(user)
//           await createUserProfileDocument(user,{displayName});
//           history.push('/')
          

//         } catch (error) {
//           console.error(error);
//         }
//       },[history]);
    
//         return (
//                 <div className="form-container sign-up-container">
//                     <form onSubmit={handleSubmit}>
//                         <h1>Create Account</h1>
//                         <div className="social-container">
//                             <span onClick={signInWithGoogle} className="social"><i className="fab fa-google"></i></span>
//                             <span onClick={signInWithFacebook} className="social"><i className="fab fa-facebook"></i></span>
//                             {/* <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
//                         </div>
//                         <span>or use your email for registration</span>
//                         <input 
//                             type="text" 
//                             placeholder="Name"
//                             name='name'
//                             required
//                         />
//                         <input
//                             type="email" 
//                             placeholder="Email"
//                             name='email'
//                             required
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             name='password'
//                             required
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             name='confirmPassword'
//                             required
//                         />
                      
//                         <button>Sign Up</button>
//                     </form>
//                 </div>
//         )
// }

export default withRouter(SignUp);

