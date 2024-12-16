import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import login from '../../assets/lottie/signIn.json'
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../shared/socialLogin';
import axios from 'axios';
const SignIn = () => {
    const {signInUser}=useContext(AuthContext) 
    const location = useLocation()
    const navigate = useNavigate()
    const form = location.state || '/'
    // console.log(user?.email)
    const handleSignIn=e=>{
        e.preventDefault()
        const email= e.target.email.value
        const password= e.target.password.value
        // console.log(email,password)
        
        signInUser(email,password)
        .then(data=>{
            console.log(data)
            Swal.fire({
                title: "Success",
                text: "Successfully create your account",
                icon: "success"
              });

              const user={email:email}

              axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
              .then(res=>console.log(res.data))
              .catch(err=>console.log(err))
              // navigate(form)
              // location.state || navigate('/')
        })
        .catch((error) => {
          console.log(error)
            Swal.fire({
                title: "Success",
                text: `${error.message}`,
                icon: "error"
              });
              
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
      <p className='mt-3'>
        If you are a new User.Please <Link to='/register' className="link link-hover text-teal-500">Register</Link>
      </p>
    </div>
    <div className="form-control mt-6">
      <button type='submit' className="btn bg-[#05264E] text-white">Sign In</button>
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