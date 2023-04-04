import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import NewArrivals from './NewArrivals'
import Sale from './Sale'
import { Link } from 'react-router-dom'

const Home = ({addProduct,addtoCart}) => {
   
  return (
    <>
        <section id="home">
    <img src="/images/G-logo.png" alt="" id="home-A-Logo" />
    <h2 id="main-1" className="animate__animated animate__bounce">Super Value Deals</h2>
    <p id="main-3" className="animate__animated animate__rubberBand">Save more with coupons <br/> & upto 65% off...!</p>
    <Link to="/Men"><button className="btn animate__animated animate__tada">Shop Now</button></Link>
        </section>
        <FeaturedProducts addProduct={addProduct} addtoCart={addtoCart}/>
        <Sale/>  
        <NewArrivals addProduct={addProduct} addtoCart={addtoCart}/>
    </>
  )
}

export default Home
