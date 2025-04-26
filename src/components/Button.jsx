import React from 'react'

const Button = ({ color , bg , border ,text}) => {
        
  return (
        <button
        className={`text-${color} border  border-${border} bg-${bg}  px-8 py-4 rounded-full  transition`}
      >
        {text}
      </button>
  )
}

export default Button
