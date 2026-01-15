import React from 'react'

const Btn = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

export default Btn