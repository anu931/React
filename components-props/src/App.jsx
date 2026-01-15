import './App.css'
import { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import userCard from './components/userCard'
// Works also with SSR as expected
const Card = lazy(() => import('./Card'))

function App() {
  return (
   <div>
    <userCard/>
    <userCard/>
    <userCard/>
   </div>
  )
}

export default App
