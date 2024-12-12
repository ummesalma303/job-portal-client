import React from 'react';
import { easeInOut, motion } from "motion/react"
import team1 from '../../assets/team/team-1.jpg'
import team2 from '../../assets/team/team-3.jpg'
const Banner = () => {
    return (
        <div>
            {/* <div className="flex items-center justify-between"> */}
  <div className="flex-col-reverse flex md:flex-row items-center lg:space-x-28 bg-base-200 min-h-[70vh] px-6 ">
   
    <div className='text-start '>
      <motion.h1 animate={{x:[50,0] }}  transition={{duration:4,delay:1, ease: "easeInOut",repeat:Infinity }}   className="text-5xl font-bold">The Easiest Way
      to Get<br /> Your New <motion.span animate={{color:["#bcbce1","#0c0c88"]}} transition={{duration:1.5, repeat:Infinity}}> Job</motion.span></motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem <br />
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    <div className=''>
     <motion.img animate={{y:[50,100,50]} } transition={{duration:10,delay:1, ease:easeInOut, repeat:Infinity}}
      src={team1}
      className="md:max-w-sm rounded-bl-none rounded-[40px] shadow-2xl border-l-8 border-b-8 border-blue-700" />
     <motion.img animate={{x:[100,150,100]} } transition={{duration:10,delay:1, ease:easeInOut, repeat:Infinity}}
      src={team2}
      className="md:max-w-sm rounded-bl-none rounded-[40px] shadow-2xl border-l-8 border-b-8 border-blue-700" />
      </div>

  </div>
</div>
        // </div>
    );
};

export default Banner;