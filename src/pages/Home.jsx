import React from 'react'
import Carousel from '../components/Carousel.jsx'
import MidBanner from '../components/MidBanner.jsx'
import Features from '../components/Features.jsx'
function Home() {
  return (
    <div className='overflow-x-hidden'>
    <Carousel />
    <MidBanner/>
    <Features/>
    </div>
  )
}

export default Home