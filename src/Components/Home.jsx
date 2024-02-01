import React from 'react'
import Hero from './Hero'
import Workh from './Workh'
import Contacth from './Contacth'
import Abouth from './Abouth'
import Carousal from './Carousal'
import Services from './Services'

const Home = () => {
  return (
    <>
    <Hero/>
    {/* <Carousal/> */}
    <Abouth/>
    <Services/>
    <Workh/>
    <Contacth/>
    </>
  )
}

export default Home