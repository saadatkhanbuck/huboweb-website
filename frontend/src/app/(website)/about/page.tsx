import React from 'react'
import Hero from '../components/hero'
import Team from '../team/page'


export default function About() {
  return (
    <div className='mt-10'>
      <Hero
        title="Build Smarter, Faster, and Future-Ready Web Solutions"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/ecommerce-softwares.png"
      />
      <Team/>
      {/* <OverTeam/> */}
    </div>
  )
}
  