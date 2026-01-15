import React from 'react'
import './Nex.css'
const Nex = (props) => {
  return (
    <div className='nexus'>
      <input type='text' onChange={(e) => props.setName(e.target.value)}/>
      <p>Name state variable ki value inside {props.title} : {props.name}</p>
    </div>
  )
}

export default Nex