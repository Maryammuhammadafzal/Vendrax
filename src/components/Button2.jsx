import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Button2 = () => {
  return (
        
                <button className='px-14 py-4 relative  bg-orange-600 uppercase rounded-full text-lg text-white '>
                        Get Started
                <button className='arrowbtn rounded-xl absolute -right-6 h-12 w-12 top-2 flex items-center justify-center border-6 border-[#222a28] bg-white text-black'>
                  <FaArrowRight/>
                  
                </button>
                </button>

    
  )
}

export default Button2
