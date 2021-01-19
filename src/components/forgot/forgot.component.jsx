// import React, {useCallback,useState} from 'react'
// import {withRouter} from "react-router"
// import {auth} from '../../firebase/firebase.utils';
// import './forgot.styles.scss'

// const Forgot = ({history}) =>{
    
//      const handleSubmit = useCallback (async event => {
//         event.preventDefault();
//         const email = event.target.elements;
//         auth.sendPasswordResetEmail(email).then(function() {            
//             // Email sent.

//             history.push('/')

//           }).catch(function(error) {
//             // An error happened.
//             console.log(error)
//           });
       
//       },[history]);
    
//         return (
//             <div class="login">
//                 <div class="login-triangle"></div>
                
//                 <h2 class="login-header">Password Recovery</h2>

//                 <form class="login-container">
//                     <input
//                       type="email" 
//                       placeholder="Email"
//                       name='email'
//                       required
//                      />
//                      <p className='message'> Message </p>
//                     <input type="submit" value="Log in"/>
//                 </form>
//             </div>







//                 // <div className="form-container sign-up-container">
//                 //     <form onSubmit={handleSubmit}>
//                 //         <h1>Enter Email</h1>
//                 //         <input
//                 //             type="email" 
//                 //             placeholder="Email"
//                 //             name='email'
//                 //             required
//                 //         />
//                 //         <button>Sign Up</button>
//                 //     </form>
//                 // </div>
//         )
// }

// export default withRouter(Forgot);