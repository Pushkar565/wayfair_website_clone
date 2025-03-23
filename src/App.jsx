import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hompage from './components/Hompage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hompage />
    </>
  )
}

export default App
