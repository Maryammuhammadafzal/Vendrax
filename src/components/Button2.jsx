import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import slides from "../data/heroSliderData.js";

const Button2 = ({text}) => {
  return (
        
                <button className='px-14 py-4 max-md:px-10 max-md:py-3 relative  bg-orange-600 uppercase rounded-full text-lg text-white '>
                        {text}
                <div className='arrowbtn rounded-xl absolute -right-6 max-md:-right-4 max-md:h-10 max-md:w-10 h-12 w-12 top-2 flex items-center justify-center border-6 border-[#222a28] bg-white text-black'>
                  <FaArrowRight/>
                  
                </div>
                </button>

    
  )
}

export default Button2
