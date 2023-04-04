import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {

  const search = () => {
    let searchinn = document.getElementById('search');

    if (searchinn.style.visibility === "visible"){
      searchinn.style.visibility = "hidden";
  }
  else {
      searchinn.style.visibility = "visible"
  }
  };

  const login = () =>{
    let login = document.querySelector('.login');
    
    if (login.style.visibility === "visible") {
      login.style.visibility = "hidden";
  }
  else {
      login.style.visibility = "visible";
  }
  };

  const close = ()=>{
    let login = document.querySelector('.login');
    login.style.visibility = "hidden";
  }

  const nav = ()=>{
    let nav = document.querySelector('.navbar ul');
    let icons = document.querySelector('.icons');
    if (nav.style.visibility === "visible" && icons.style.visibility == "visible") {
      nav.style.visibility = "hidden";
      icons.style.visibility = "hidden";
  }
  else {
      nav.style.visibility = "visible";
      icons.style.visibility = "visible";
  }
  };
   
  return (
    <>   
    <header className="flex">
    <nav className="navbar flex">
      <div className="glogo">
        <Link to="/"><img src="/images/G-logo.png" alt="" /><span id="gtext">MZY</span></Link>
      </div>
      <ul className="flex">
      <li> <NavLink to="/" >Home</NavLink>   </li>
      <li> <NavLink to="Men" >Men</NavLink> </li>  
      <li> <NavLink to="Women" >Women</NavLink>  </li>  
      <li> <NavLink to="Cart" ><i className="fa-solid fa-bag-shopping"></i> Cart</NavLink> </li>  
      </ul>
      <div className="icons">
        <i className="fa-solid fa-magnifying-glass" id="search-icon" onClick={search}></i>
        <i className="fa-solid fa-user" id="logicon" onClick={login}></i>  
        <Link to="/Wishlist" ><i className="fa-solid fa-heart" id="wishicon"></i></Link>

      </div>
    </nav>

  </header>
    <div className="search">
    <input type="search" id="search" placeholder="Search Here" />
  </div>
  <div className="login">
    <h3 className="h3">LOGIN NOW</h3>
    <i className="fa-sharp fa-solid fa-xmark" id="close-btn" onClick={close}></i>
    <input type="email" name="" id="login" placeholder="Email" /> <br />
    <input type="text" id='password' placeholder="Password" />
    <span id="lotext">Don't Have An Account <span id="red">Create Now</span></span>
    <button className="btn">Login Now</button>
  </div>
  <div id="bar" onClick={()=>nav()}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
  </>
  )
}

export default Navbar
