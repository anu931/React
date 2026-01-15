import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import './ChildC.css'
const ChildC = () => {
   // const user=useContext(userContext); 
   const {theme, setTheme}=useContext(ThemeContext);

   function handleClick(){
if(theme==="light"){
    setTheme("dark");
   }
    else{
    setTheme("light");
   }
}

  return (
    <div>
        <button id="12" onClick={handleClick}>Change Theme</button>
        </div>
  )
}

export default ChildC