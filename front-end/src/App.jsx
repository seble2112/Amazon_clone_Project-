import { useState } from 'react'

import './App.css'
import Header from './Componets/Header/Header'
import CarouselEffect from './Componets/Carousel/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <CarouselEffect/>
    </>
  )
}

export default App
