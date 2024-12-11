import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import auth from '../../firebase/firebase.config';

const provider = new GoogleAuthProvider();

const SocialLogin = () => {
   const googleSignIn =()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      // const user = result.user;
      // // IdP data available using getAdditionalUserInfo(result)
      // // ...
    }).catch((error) => {
     console.log(error.message)
    });
   }
    return (
        <div>
            <button onClick={googleSignIn} className='btn w-full'> <FcGoogle /> Login With Google</button>
        </div>
    );
};

export default SocialLogin;