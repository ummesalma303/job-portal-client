import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="flex items-center bg-base-200 min-h-[80vh]">
  <div className=" flex justify-between">
   
    <div className='flex-1'>
      <h1 className="text-5xl font-bold">The Easiest Way
      to Get Your New Job</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    <div>
     <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl flex-1" />
      </div>

  </div>
</div>
        </div>
    );
};

export default Banner;