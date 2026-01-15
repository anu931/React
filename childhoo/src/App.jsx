import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'
import Btn from './components/Btn'

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div>
      <Btn handleClick={handleClick}
      text="Click me Please !!!"
      >
        <h3>{count}</h3>
</Btn>
    { /* <Card name="love babbar">
        <h1> BEST WEB DEV COURSE</h1>
        <p>please like share and sbscribe</p>
        <p> Dont forget to click the bell icon </p>
        </Card>
        <Card>Hi cute little babies !!</Card>*/}
    </div>
  )
}

export default App
