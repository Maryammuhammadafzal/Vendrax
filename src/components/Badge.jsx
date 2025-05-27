import React from 'react'

const Badge = ({bg, color , text}) => {
  const badgeClass = `w-fit px-5 tracking-[.50rem] py-1 ${bg} ${color} capitalize max-[1200px]:text-[1.1rem] mb-3.5 max-[1200px]:tracking-[.2rem] rounded-full`;
  return (
    <div className={`${badgeClass}`}>
      {text}
    </div>
  )
}

export default Badge
