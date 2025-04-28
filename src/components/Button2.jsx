import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import slides from "../data/heroSliderData.js";

const Button2 = ({text, textColor , border , btnBg, arrowBtnBg, hoverBg, hovertextColor, arrowBtnColor , textSize , font , arrowBtnBorder , hoverBorderColor}) => {
  return (
        
                <button className={`px-14 py-4 max-md:px-10 max-[1200px]:px-10   max-md:py-3 max-[1200px]:py-2 max-[1200px]:text-sm relative border-2 cursor-pointer border-${border} hover:bg-${hoverBg} hover:text-${hovertextColor} hover:border-2 hover:border-${hoverBorderColor} bg-${btnBg} uppercase rounded-full text-${textSize} font-${font} tracking-wide text-${textColor} `}>
                        {text}
              <div className={`arrowbtn rounded-xl absolute -right-6 max-md:-right-4  max-[1200px]:h-10 max-[1200px]:w-10 max-md:h-10 max-md:w-10 h-12 w-12 top-2 max-[1200px]:top-0 flex items-center justify-center border-6 border-${arrowBtnBorder} bg-${arrowBtnBg} text-${arrowBtnColor}`}>
                  <FaArrowRight/>
                  
                </div>
                </button>

    
  )
}

export default Button2
