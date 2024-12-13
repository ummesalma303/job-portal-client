import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const {user}=useAuth()
    const [jobs,setJobs] = useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div className="overflow-x-auto my-9">
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
    <tbody className='my-10'>
      {/* row 1 */}
      {
        jobs.map((job,i)=>(
        <tr key={job._id}>
            <th>{i+1}</th>
            <td>{job.title}</td>
            <td>{job.applicationDeadline}</td>
            <td>{job.applicationCount}</td>
            <td><Link to={`/viewApplication/${job._id}`}><button className='link link-primary'>View Applications</button></Link></td>
          </tr>))
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobs;