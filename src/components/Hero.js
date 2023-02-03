import React from 'react'

const Hero = () => {
  return (
  <section className='hero_sec'>
  <div className='container'>
  <div className="hero_info">
  <h1 className='hero_h'>
    Hi, <br/>
    I am <span className='text-access'>P</span>arul <br/>
    Frontend WebDeveloper
</h1>
<p className='hero_p' >I am proficient in React.js and Next.js </p>
<a href='/#project'>
<button className="btn bg-slate-600 text-white px-4 py-2"  > See projects </button></a>
  </div>
  <div className='hero-img'>
    <img className='hero_i' src="../images/hero.jpg" alt="coding "/>
  </div>
  </div>
  </section>
  )
}

export default Hero