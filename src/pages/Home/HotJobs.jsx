// import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';
// import React, { useEffect } from 'react';

const HotJobs = () => {
    const [jobs,setJobs]=useState([])
    // const {data:jobs,isPending}=useQuery({
    //     queryKey:["jobs"],
    //     queryFn: async()=>{
    //         const res= await fetch('http://localhost:5000/jobs')
    //        return res.json()
    //     }
    //    })
    //    console.log(jobs)
    //    if (isPending) {
    //     return <h2>Loading....</h2>
    //    }
  

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)})
    },[])
    return (
       <>
        <div className='text-center'>
            <h2 className='text-4xl font-semibold'>Jobs of the day</h2>
            <p>Search and connect with the right candidates faster.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-20'>
            {
                jobs?.map(job=><HotJobCard key={job._id} job={job}></HotJobCard>)
            }
        </div>
       </>
    );
};

export default HotJobs;