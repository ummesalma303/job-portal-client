import React from "react";
import useAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();
  const navigate=useNavigate()
  const handleAddJob = e=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    const  initialData= Object.fromEntries(formData.entries())
    const {min,max,currency,...newJob}=initialData
    newJob.salaryRange={min,max,currency}
   newJob.requirements=newJob.requirements.split('\n')
   newJob.responsibilities=newJob.responsibilities.split('\n')

    console.log( newJob)
    // axios.post('http://localhost:5000/jobs',newJob)
    axios.post('http://localhost:5000/jobs',newJob)
     .then(data=>{
                console.log(data.data)
                if(data.data.insertedId){

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Has Been added",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/')
                }
            })
            .catch(err=>console.log(err.message))
    
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className=" bg-base-100 w-full max-w-7xl">
        <form onSubmit={handleAddJob}  className="card-body">
          {/* job title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          {/* job location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered"
              required
            />
          </div>
          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select
              defaultValue="Pick a Job type"
              className="select select-ghost w-full input input-bordered"
            >
              <option disabled selected>
                Pick a Job type
              </option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>
          {/* job Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select
              defaultValue="Pick a Job Field"
              className="select select-ghost w-full input input-bordered"
            >
              <option disabled>Pick a Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
          {/* salary range */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <input
                type="text"
                name="min"
                placeholder="Min"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="max"
                placeholder="Max "
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <select
                defaultValue="Currency"
                name="currency"
                className="select select-ghost w-full input input-bordered"
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
          {/* Job Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Job Description"
              name="description"
              required
            ></textarea>
          </div>
          {/* requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="put each requirements in a new line"
              name="requirements"
              required
            ></textarea>
          </div>
          {/* responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibilities</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write each responsibility in a new line"
              name="responsibilities"
              required
            ></textarea>
          </div>
          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              name="hr_email"
              placeholder="HR Email"
              className="input input-bordered"
              required
            />
          </div>{" "}
          {/* application Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="Deadline"
              className="input input-bordered"
              required
            />
          </div>
          {/* company Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* submit button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
