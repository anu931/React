import React from 'react'
import './userCard.css'
const userCard = (props) => {
  return (
    <div className='user'>
        <p id='user-name'>(props.name)</p>
        <p id='user-desc'>(props.desc)</p>
    </div>
  )
}

export default userCard