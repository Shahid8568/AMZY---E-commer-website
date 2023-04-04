import React from 'react'

const Footer = () => {
  return (
  <>
   <section id="contact">
    <div className="conmain flex">

      <div className="conbox1">
        <div className="in-cont">
          <h3>AMZY</h3>
          <span id='spanOne'>+012-345-6789 <img className="call" src="/images/call-sym.png" alt="" /></span>
          <span>+012-367-8945<img className="call" src="/images/call-sym.png" alt="" /></span>
          <div id="cont-mail-loc">
            <img id="gmail" src="/images/mail.png" alt="" />
            <p>
              AMZY@gmail.com
            </p>
            <img id="loc" src="/images/loca.png" alt="" />
            <p>
              Bhuj, India - 370001
            </p>
          </div>
        </div>
        <div className="conicon flex">
          <h2>Follow Us</h2>
          <img className="media" src="/images/facicon.png" alt="" />
          <img className="media" src="/images/twiicon.png" alt="" />
          <img className="media" src="/images/instaicon.png" alt="" />
        </div>
      </div>
       {/* conbox1 ends  */}

      <div className="conbox2">
        <h3>Your Account</h3>
        <p><img src="/images/arrow.png" alt="" /></p>
        <a id="ahome" href="/">Sign In</a>
        <p>
          <img src="/images/arrow.png" alt="" />
        </p>
        <a href="/Cart">View Cart</a>

        <p><img src="/images/arrow.png" alt="" /></p>
        <a id="YW" href="/Wishlist">Your Wishlist</a>
        <p>
          <img src="/images/arrow.png" alt="" />
        </p>
        <a id="are" href="/">Your Orders</a>

        <p><img src="/images/arrow.png" alt="" /></p>
        <a id="ablog" href="/">Help</a>
      </div>
      {/* conbox2 ends  */}

      <div className="conbox">

        <h3>Install App</h3>
        <p>
          From App Store or Google Play
        </p>
        <img src="/images/appStore.png" alt=""/>
        <p>Payment Methods</p>
        <img id="pay-icon" src="/images/payment_icons.webp" alt=""/>
      </div>

    </div>
  </section>
  <hr />

  <footer>Copyright &copy; AMZY.com | All rights reserved</footer>
  </>
  )
}

export default Footer
