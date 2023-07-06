import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@material-tailwind/react'
import { NavbarComponent } from './components/NavbarComponent'
import { HeroSection } from './sections/HeroSection'
import { PartnerSection } from './sections/PartnerSection'
import { AboutSection } from './sections/AboutSection'
import { CharacterSection } from './sections/CharacterSection'
import { FAQSection } from './sections/FAQSection'
import { FooterSection } from './sections/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <PartnerSection />
      <AboutSection />
      <CharacterSection />
      <FAQSection />
      <FooterSection />
    </>
  )
}

export default App