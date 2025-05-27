import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import slides from "../data/heroSliderData.js";

const Button2 = ({text, textColor , border , btnBg, arrowBtnBg, hoverBg, hovertextColor, arrowBtnColor , textSize , font , arrowBtnBorder , hoverBorderColor}) => {
  const btnClass = `
    px-14 py-4 max-md:px-10 max-md:py-3 relative border-2 cursor-pointer 
    ${border} ${hoverBg} ${hovertextColor} ${hoverBorderColor} ${btnBg} 
    uppercase rounded-full ${textSize} ${font} tracking-wide ${textColor}
  `;

  const arrowClass = `
    rounded-xl absolute -right-6 max-md:-right-4 h-12 w-12 top-2 flex items-center justify-center border-5
    ${arrowBtnBorder} ${arrowBtnBg} ${arrowBtnColor}
  `;
  
  return (
        
    <button className={btnClass}>
    {text}
    <div className={arrowClass}>
      <FaArrowRight />
    </div>
  </button>

    
  )
}

export default Button2
