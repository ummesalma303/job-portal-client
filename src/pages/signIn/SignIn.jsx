import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import login from '../../assets/lottie/signIn.json'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../shared/socialLogin';
const SignIn = () => {
    const {signInUser}=useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignIn=e=>{
        e.preventDefault()
        const email= e.target.email.value
        const password= e.target.password.value
        console.log(email,password)
        
        signInUser(email,password)
        .then(data=>{
            console.log(data)
            Swal.fire({
                title: "Success",
                text: "Successfully create your account",
                icon: "success"
              });
              navigate('/')
        })
        .catch((error) => {
            Swal.fire({
                title: "Success",
                text: `${error.message}`,
                icon: "error"
              });
            console.log(error.message)
          });
    }
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left flex-1">
<Lottie animationData={login}  />
</div>
   <div className='flex-1'>
   <h2 className='text-center text-2xl font-bold mb-8'>Sign In Now</h2>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form onSubmit={handleSignIn} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button type='submit' className="btn bg-[#05264E] text-white">Register</button>
    </div>
   <div type='button'> <div className="divider">OR</div>
   <SocialLogin></SocialLogin></div>
  </form>
</div>
   </div>
</div>
</div>
    </div>
    );
};

export default SignIn;