import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/UseAuth';

const MyPostedJobs = () => {
    const {user}=useAuth()
    const [jobs,setJobs] = useState([])
    console.log(jobs)
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>Application Count</th>
        <th>Applications</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs.map((job,i)=>(
        <tr key={job._id}>
            <th>{i+1}</th>
            <td>{job.title}</td>
            <td>{job.applicationDeadline}</td>
            <td></td>
            <td><button className='btn'>View Applications</button></td>
          </tr>))
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobs;