import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive") 
  
  return (
    <>
      <div
        className="w-screen h-screen flex justify-center items-center gap-4"
        style={{ backgroundColor: color }}>  
        <button onClick={() => setColor("red")} className='bg-red-500 text-black px-4 py-2 rounded appearance-none'>RED</button>
        <button onClick={() => setColor("blue")} className='bg-blue-500 text-black px-4 py-2 rounded appearance-none'>BLUE</button>
        <button onClick={() => setColor("white")} className='bg-white text-black px-4 py-2 rounded appearance-none'>WHITE</button>
        <button onClick={() => setColor("orange")} className='bg-orange-400 text-black px-4 py-2 rounded appearance-none'>SAFFRON</button>
        <button onClick={() => setColor("green")} className='bg-green-500 text-black px-4 py-2 rounded appearance-none'>GREEN</button>
        <button onClick={() => setColor("yellow")} className='bg-yellow-500 text-black px-4 py-2 rounded appearance-none'>YELLOW</button>
        <button onClick={() => setColor("pink")} className='bg-pink-500 text-black px-4 py-2 rounded appearance-none'>PINK</button>
        <button onClick={() => setColor("brown")} className='bg-orange-800 text-black px-4 py-2 rounded appearance-none'>BROWN</button>
        <button onClick={() => setColor("purple")}className='bg-purple-500 text-black px-4 py-2 rounded appearance-none'>PURPLE</button> 

      </div>
    </>
  )
}

export default App


