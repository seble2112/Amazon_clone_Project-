import { useState } from 'react'

import './App.css'
import Header from './Componets/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
    </>
  )
}

export default App
