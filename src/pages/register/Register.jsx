import React, { useContext } from 'react';
import register from '../../assets/lottie/register.json'
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../shared/socialLogin';
const Register = () => {
    const {createUser}=useContext(AuthContext);
    const navigate = useNavigate()
    const handleRegister=e=>{
        e.preventDefault()
        const email= e.target.email.value
        const password= e.target.password.value
        console.log(email,password)
        createUser(email,password)
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
    <Lottie animationData={register}  />
    </div>
       <div className='flex-1'>
       <h2 className='text-center text-2xl font-bold mb-8'>Register Now</h2>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
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
      <div type="button">
      <div className="divider">OR</div>
      <SocialLogin></SocialLogin>
      </div>
      </form>
    </div>
       </div>
  </div>
</div>
        </div>
    );
};

export default Register;