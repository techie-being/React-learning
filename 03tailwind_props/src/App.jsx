import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>jai shree jaganath </h1>
      <Card username="Rakesh"/>  
      <Card username="Monica"/>
    </>

  )
}

export default App
//we pass value of props here it reflect on each individual card by itself and we can  pass n number of properties to each card 