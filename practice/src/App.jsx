import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Task from './Pages/Task';
import Usercontextprovider from './Context/Usercontextprovider';

const rootloader = async ()=>{
  const res = await fetch("https://api.github.com/users/techie-being")
  if (!res.ok) throw new Error("Failed to fetch GitHub user");
  return res.json()
}
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(                                        
      <Route path='/' element={<Layout/>} loader={rootloader}>
        <Route index element={<Home />} />
        <Route path="home"  element={<Home/>}/>
        <Route path="profile"  element={<Profile/>}/>
        <Route path="task"  element={<Task/>}/>
      </Route>
    )
  )
  return (
    <>
      
      <RouterProvider router={router}/>
       
    </>
  )
}

export default App
