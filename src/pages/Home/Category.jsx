import React from 'react';
import { motion } from "motion/react"
import category1 from '../../assets/category/category-1.png'
import category2 from '../../assets/category/category-2.png'
import category3 from '../../assets/category/category-3.png'
import category4 from '../../assets/category/category-4.png'
const Category = () => {
    return (
       <div className="my-20">
         <div className='text-center'>
            <h2 className='text-4xl font-semibold'>Browse by category</h2>
            <p>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
        </div>
        
        <div className="flex flex-wrap gap-7 justify-center my-12">
            <motion.span whileHover={{ scale: 1.1 }} transition={{ duration:0.5 }} className="flex items-center border-[1px] border-gray-400 hover:border-blue-300 max-w-fit rounded-lg shadow-none hover:shadow-lg p-4 space-x-2" >
                <img src={category1} alt="" />
                <div>
                     <h2 className='text-xl font-semibold'>Marketing And Scale</h2>
                     <p>1526 job available</p>
                </div>
            </motion.span>
            <motion.span whileHover={{ scale: 1.1 }} transition={{ duration:0.5 }} className="flex items-center border-[1px] border-gray-400 hover:border-blue-300 max-w-fit rounded-lg shadow-none hover:shadow-lg p-4 space-x-2" >
                <img src={category2} alt="" />
                <div>
                     <h2 className='text-xl font-semibold'>Marketing And Scale</h2>
                     <p>1526 job available</p>
                </div>
            </motion.span>
            <motion.span whileHover={{ scale: 1.1 }} transition={{ duration:0.5 }} className="flex items-center border-[1px] border-gray-400 hover:border-blue-300 max-w-fit rounded-lg shadow-none hover:shadow-lg p-4 space-x-2" >
                <img src={category3} alt="" />
                <div>
                     <h2 className='text-xl font-semibold'>Marketing And Scale</h2>
                     <p>1526 job available</p>
                </div>
            </motion.span>
            <motion.span whileHover={{ scale: 1.1 }} transition={{ duration:0.5 }} className="flex items-center border-[1px] border-gray-400 hover:border-blue-300 max-w-fit rounded-lg shadow-none hover:shadow-lg p-4 space-x-2" >
                <img src={category4} alt="" />
                <div>
                     <h2 className='text-xl font-semibold'>Marketing And Scale</h2>
                     <p>1526 job available</p>
                </div>
            </motion.span>
        </div>
       </div>
    );
};

export default Category;