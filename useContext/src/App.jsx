import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

// create context
// const userContext=createContext();
const ThemeContext=createContext();
// provide context
// consume context
function App() {
// const[user,setUser]=useState({name:"John Doe"});
const[theme,setTheme]=useState("light");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme==="light"?"beige":"grey"}}>
      <ChildA/></div>
    </ThemeContext.Provider>
  // <>
  //     <userContext.Provider value={user}>  
  //        <ChildA/>
  //         </userContext.Provider> 
  // </>
  )
}

export default App
//export {userContext}
export {ThemeContext}