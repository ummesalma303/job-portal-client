import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
  const navigate=useNavigate()
    const {_id} =useParams()
    const {user}=useAuth()
    console.log(_id)
    const submitJobApplication = e =>{
        e.preventDefault()
        const form = e.target
        const linkedin=form.linkedin.value
        const github=form.github.value
        const resume=form.resume.value
        console.log(linkedin,github,resume)
        const jobApplication={
            job_id: _id,
            applicant_email: user.email,
            linkedin,
            github,
            resume,
        }
        axios.post('http://localhost:5000/job-applications',jobApplication)
        .then(data=>{
            console.log(data.data)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Application has been submit",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/myApplication')
        })

    }
    return (
   <div className='bg-base-200'>
   <h2 className='text-center font-semibold text-2xl pt-7'>Apply Job and Good Luck!</h2>
           <div className="hero  min-h-[70vh]">
    <div className=" bg-base-100 w-full max-w-7xl ">
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linkedin URL</span>
          </label>
          <input type="url" name='linkedin' placeholder="Linkedin URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
</div>
   </div>
       
    );
};

export default JobApply;