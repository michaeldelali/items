import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC995xH2P0oRcGVhO0LwvAMd71wjmI_xzw",
    authDomain: "inventory-d633a.firebaseapp.com",
    projectId: "inventory-d633a",
    storageBucket: "inventory-d633a.appspot.com",
    messagingSenderId: "151313355777",
    appId: "1:151313355777:web:c5c8dd23538fe5a4799c00",
    measurementId: "G-2XH1TCVFY3"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};











export const auth = firebase.auth();
export const firestore = firebase.firestore();

const google_provider = new firebase.auth.GoogleAuthProvider();
auth.useDeviceLanguage();
google_provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>auth.signInWithRedirect(google_provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  console.log(result.credential.accessToken);
  // The signed-in user info.
  console.log(result.user);
  
  // ...
}).catch(function(error) {
  // Handle Errors here.
  console.log(error.code);
  console.log(error.message);
  // The email of the user's account used.
  console.log(error.email);
  // The firebase.auth.AuthCredential type that was used.
  console.log(error.credential);
  // ...
});


// facebook login
const facebook_provider = new firebase.auth.FacebookAuthProvider();
auth.useDeviceLanguage();
facebook_provider.setCustomParameters({prompt:'select_account'});
export const signInWithFacebook = () =>auth.signInWithPopup(facebook_provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  console.log(result.credential.accessToken);
  // The signed-in user info.
  console.log(result.user);
  // ...
}).catch(function(error) {
  // Handle Errors here.
   console.log(error.code);
  console.log(error.message);
  // The email of the user's account used.
  console.log(error.email);
  // The firebase.auth.AuthCredential type that was used.
  console.log(error.credential);
  // ...
});

// auth.getRedirectResult().then(function(result) {
//   if (result.credential) {
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     var token = result.credential.accessToken;
//     // ...
//   }
//   // The signed-in user info.
//   console.log(result.user);
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });

// https://.firebaseapp.com/__/auth/handler

// //tries
// const provider2 = new firebase.auth.GithubAuthProvider();
// provider2.setCustomParameters({prompt:'select_account'});
// export const signInWithGithub = () => auth.signInWithPopup(provider2);

export default firebase;
