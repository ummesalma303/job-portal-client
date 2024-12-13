import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
    const applications= useLoaderData()
    // const [jobs,setJobs] = useState([])
    // console.log(jobs)
    return (
        <div>
            <div className="overflow-x-auto my-9">
  <table className="table">
    {/* head */}
     {/* head */}
     <thead>
        <tr>
            <th></th>
            <th>Email</th>
            <th>Status</th>
            <th>Update Status</th>
        </tr>
    </thead>
    <tbody className='my-10'>
      {/* row 1 */}
      {
                            applications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ViewApplication;