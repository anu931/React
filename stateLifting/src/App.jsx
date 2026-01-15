import React from 'react'
import './App.css'
import { useState } from 'react'
import Nex from './components/nex'

function App() {
const[name,setName]=useState('');
  return (
    <div className='nexxa'>  
      <Nex title="Card1" name={name} setName={setName}/>
      <Nex title="Card2" name={name} setName={setName}/>

 {/* <p>value inside parent containner : {name}</p>*/}
    </div>

  )
}

export default App
