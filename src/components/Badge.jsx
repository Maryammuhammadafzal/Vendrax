import React from 'react'

const Badge = ({bg = "red-100" , color = "red-500"}) => {
  return (
    <div className={`w-fit px-5 tracking-[.50rem] py-1 bg-${bg} text-${color} capitalize max-[1200px]:text-[1.1rem] mb-3.5 max-[1200px]:tracking-[.2rem] rounded-full`}>
      What we offer
    </div>
  )
}

export default Badge
