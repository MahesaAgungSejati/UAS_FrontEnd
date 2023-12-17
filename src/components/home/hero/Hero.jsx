import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Craftman ' subtitle='Find Your Craftman Quickly and Easily For Your House' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Facilities Type</span>
              <input type='text' placeholder='Facilities Type' />
            </div>
            <div className='box'>
              <span>Craftman Type</span>
              <input type='text' placeholder='Craftman Type' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='search'>Search</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
