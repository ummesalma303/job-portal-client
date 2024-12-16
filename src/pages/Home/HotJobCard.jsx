import React from 'react';
import { Link } from 'react-router-dom';
// {
//     "_id": "675a47072abe8e91c5a88469",
//     "title": "Content Writer",
//     "location": "Uttara, Dhaka",
//     "jobType": "Contractual",
//     "category": "Marketing",
//     "applicationDeadline": "2024-12-25",
//     "salaryRange": {
//         "min": 20000,
//         "max": 35000,
//         "currency": "bdt"
//     },
//     "description": "We are looking for a talented Content Writer to create compelling content for our digital platforms.",
//     "company": "Munir soft.",
//     "requirements": [
//         "WordPress",
//         "SEO",
//         "Google Docs",
//         "Grammarly"
//     ],
//     "responsibilities": [
//         "Write blog posts",
//         "Create social media content",
//         "Develop email campaigns"
//     ],
//     "status": "active",
//     "hr_email": "hr@creativehub.com",
//     "hr_name": "Anika Chowdhury",
//     "company_logo": "https://i.ibb.co/MhsV6wz/microsoft.png"
// }
const HotJobCard = ({job}) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job
  
    return (
        
            <div className="card bg-base-100 border-2 rounded-xl ">
 <div className="flex items-center">
 <figure className="px-10 pt-10">
    <img
      src={company_logo}
      alt="Shoes"
      className="rounded-xl w-16" />
  </figure>
      <div>
      <h2 className='text-xl font-semibold'>{company}</h2>
      <p>{location}</p>
      </div>
 </div>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className='flex flex-wrap gap-4 '>
        {
            requirements?.map((requirement,i)=><p className='border border-gray-200 hover:border-blue-400 p-3 ' key={i}>{requirement}</p>)
        }
    </div>
    <div className="card-actions mt-6 items-center">
        <p className='font-semibold'>Salary Range:${salaryRange?.min}-{salaryRange?.max}{salaryRange?.currency}</p>
      <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
    </div>
  </div>
</div>
       
    );
};

export default HotJobCard;