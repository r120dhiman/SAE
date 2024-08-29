import React from 'react'
import img from "../images/${imgurl}"

const Card = (imgurl, title, desc) => {
    const imgurl=imgurl;
  return (
    <div className='flex flex-col'> 
      <img src={img} className='w-40 h-40' alt="" />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Card
