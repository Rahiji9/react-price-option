import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DaisyNav></DaisyNav>
      <h1 className='text-4xl bg-red-500'>Vite + React</h1>
    </>
  )
}

export default App
