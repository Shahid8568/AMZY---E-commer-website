import React from 'react'
import Countdown from 'react-countdown'
import { Link } from 'react-router-dom'

const Sale = () => {
      
  return (
    <>
    <section id="sale">
    <div className="cont-2">
      <img className="f-1-2" src="/images/f-2.webp" alt="" />

      <div className="para1">
        <span>Crazy Deals</span>
        <h3>Buy 1 get 1 Free!</h3>
        <p>Best Western collection sale at AMZY</p>
        <Link to="/Women"><button id="pa1-btn">Shop Now</button></Link>
      </div>

      <img className="f-1-2" src="/images/f-3.webp" alt="" />
      <div className="para2">
        <h2>SEASONAL SALE</h2>
        <p>Winter Collection - 35% OFF</p>
        <Link to="/Men"><button id="pa1-btn">View Collection</button></Link>
      </div>
    </div>
    <section id="countdown">
      <div className="big-sale">
        <h1  className="animate__animated animate__bounceIn">Big Days Sale</h1>
        <h2 className="animate__animated  animate__headShake">Starts From</h2>
        <p className='animate__animated animate__headShake'>Tomorrow 12 PM</p>
      </div>
    </section>

    <div className="cont-3">
      <img src="/images/f-4.webp" alt=""/>
      <img src="/images/f-1.jpg" alt="" />
      <div className="para3">
        <h1>Upcoming Season</h1>
        <p>The Best Western And Classic Dress at AMZY</p>
        <Link to="/Women"> <button id="pa1-btn">View Collection</button></Link>
      </div>
      <div className="para4">
        <h1>Explore Top Brands</h1>
        <p>Upto 30-45% Off</p>
       <Link to="/Men"> <button id="pa4-btn">Explore Now</button></Link>
      </div>
    </div>
  </section>
  </>
  )
}

export default Sale
