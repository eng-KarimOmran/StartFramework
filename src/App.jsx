import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {path:'StartFramework',element:<Layout />, children:[
      {index:true,element:<Home />},
      {path:'about',element:<About />},
      {path:'portfolio',element:<Portfolio />},
      {path:'contact',element:<Contact />}
    ]}
  ])
  return (
    <>
      <RouterProvider router={router} />   
    </>
  )
}

export default App
