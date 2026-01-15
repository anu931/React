import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'
function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
  //if else
  {/*} if(isLoggedIn){
     return <Logout />
   }
   else{
    return <Login/>
   } */}

   //ternary operator
   {/*return(isLoggedIn ? <Logout/> :<Login/>)*/}

   //Logical operator
   {/*return(isLoggedIn && <Logout/> || <Login/>)*/}

   //early return
   if(isLoggedIn){
    return <Logout/>
   }
   return <Login/>

}

export default App
