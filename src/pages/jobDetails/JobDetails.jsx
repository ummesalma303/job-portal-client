import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { _id, title, company, company_logo,description } = useLoaderData();
    // console.log(data)
    return (
        <div className=" flex justify-center items-center h-[80vh]">
            <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
          <img className='w-full aspect-video object-cover bg-center'
            src={company_logo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title{title}</h2>
          <h3>Company: {company}</h3>
          <h3>Deadline: 26-06-2024</h3>
          <p>Description: {description}</p>
          <div className="card-actions justify-end">
           <Link to={`/jobApply/${_id}`}> <button className="btn btn-primary">Apply Now</button></Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default JobDetails;