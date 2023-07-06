import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@material-tailwind/react'
import { NavbarComponent } from './components/NavbarComponent'
import { HeroSection } from './sections/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <HeroSection />
    </>
  )
}

export default App