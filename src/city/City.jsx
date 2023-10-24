import React from 'react'
import './City.css'
export default function City(props) {
  return (
    <>
      <div className="col-md-4">
       <div className="card h-100">
        <img src={props.src} alt={props.alt} className='h-100' />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
       </div>
      </div>
    </>
    
  )
}
