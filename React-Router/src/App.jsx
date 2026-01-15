import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import DashBoard from './components/DashBoard';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  { path: "/", element: <div><Navbar/> <Home /></div> },
  { path: "/about", element: <div><Navbar/> <About /></div> },
  { path: "/dashboard", element: <div><Navbar/> <DashBoard /> </div>},
]);

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
