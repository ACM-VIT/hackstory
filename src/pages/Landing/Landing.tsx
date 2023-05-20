import About from '@/components/About/About'
import Header from '@/components/Header/Header'
import HeroContent from '@/components/Header/HeroContent/HeroContent'
import Marquee from '@/components/Header/Marquee/Marquee'
import React from 'react'

const Hero = () => {
  return (
    <>
      {/* Header, content for the Hero Section and Marquee added below */}
      <Header />
      <HeroContent />
      <Marquee />
      <About />
    </>
    
  )
}

export default Hero