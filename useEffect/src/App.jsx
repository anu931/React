import { useEffect, useState } from 'react'
import './App.css'

function App() {

//const[count, setcount]=useState(0)
// const[total, setotal]=useState(1)

 //variation 1: runs on every render
 {/*}
useEffect(()=>{
  alert("hello every render")
})
*/}

//variation 2: runs only on first render
{/*}
useEffect(()=>{
alert("hello first render only")
},[]) 
*/} 

//variation 3: runs on first render and when 'count' changes
{/*}
useEffect(()=>{
  alert("hello first render and when count changes")
},[count])
*/}

//variation 4: runs on first render and when 'count' or 'total' changes
{/*
 useEffect(() => {
    alert("hello first render and when count/total changes")
},[count, total])
*/}

//variation 5: cleanup function example
// useEffect(() => {
//  alert("count is updated to " + count)
// alert("total is updated to " + total)
//   return () => {
//     alert("cleanup function: previous count was " + count)
//     alert("cleanup function: total is " + total)
//   }
// }, [count, total])

 
// function handleClick(){
//   setcount(count+1)
// }
//  function handleTotal(){
//    setotal(total+1)
// }


  return (
    <div className="App"> 
    {/* <p>good to see you all !!!</p>
    <button onClick={handleClick}>update count</button>
    <br/>
    count is : {count}
    <br/>
      <button onClick={handleTotal}>update total</button>
    <br/>
    total is : {total} */}
</div>

  )
}

export default App
