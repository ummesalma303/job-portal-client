import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplication = () => {
    const applications= useLoaderData()
    // const [jobs,setJobs] = useState([])
    // console.log(applications)
    const handleStatus=(e,id)=>{
        console.log(e.target.value,id)
        const statusData ={
            status : e.target.value
        }
        axios.patch(`http://localhost:5000/job-applications/${id}`,statusData)
        .then(data=>{
                //    console.log(data.data)
                   if(data.data.modifiedCount>0){
   
                       Swal.fire({
                           position: "top-end",
                           icon: "success",
                           title: "Update Status",
                           showConfirmButton: false,
                           timer: 1500
                         });
                       
                   }
               })
               .catch(err=>console.log(err.message))
    }
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
                                <td>{app?.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select defaultValue={app.status || "Change Status"} onChange={(e)=>handleStatus(e,app._id)}
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