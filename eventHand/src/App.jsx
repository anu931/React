import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
function handleClick(){
  alert("Button Clicked");
}
function mouseOver(){
  console.log("Mouse Over Event Triggered");
}
function selector(){
  alert("text selected Successfully");
}
function handleInputChange(event){
event.preventDefault();
console.log("form submit karu kya?");
}
function submission(event){
  event.preventDefault();
  alert("form submitted successfully");
}
  return (
   <div>
    <button onClick={handleClick}>Click me!!!!!!!!!!!!</button>
    
      <form onSubmit={submission}>
    <input type="text" onChange={handleInputChange}/>
    <button type="submit">Submit</button>
      </form>
   
    <p onMouseOver={mouseOver}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fuga doloremque vel qui eveniet. Ullam officiis, voluptate mollitia odit, necessitatibus ab nobis corporis aliquam iusto sequi adipisci magni corrupti illo?</p>
   
   <h4 onSelect={selector}>good to see u all</h4>
   
   </div>

   
  )
}

export default App 
