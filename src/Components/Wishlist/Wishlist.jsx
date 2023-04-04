import React from 'react'
import './wish.css'
import { Link } from 'react-router-dom'
import items from '../items'

const Wishlist = ({wishlist,setWishlist,addtoCart}) => {
  const  deleteProduct = (id)=>{
    const newWishlist = wishlist.filter((e)=> e.id !== id);
    setWishlist(newWishlist);
  }
    if(wishlist.length === 0) return <div className="empty"><h2>List is Empty..!</h2><Link to="/"><button className="btn">Show Now</button></Link></div>
  return (
    <section id="wish-item">
   <Link to="/" > <i className="fa-sharp fa-solid fa-xmark" id="close-btn-ws"></i></Link>
    <h1>Shop-list</h1>
    {
      wishlist.map((e)=>{
        var id = e.id;
        return <div className="div-wishlist-item" key={e.title}>
        <img src={e.img} alt=""/>
        <div className="div-wlist">
          <h2>{e.cName}</h2>
          <span className="price">{e.price}
            <span className="ol">{e.offPrice} </span>
            <p>20% Off</p>
          </span>
          <h4>{wishlist.size}</h4>
          <div className="rIcon">
          <i className="fa-solid fa-star rating"></i>
          <i className="fa-solid fa-star rating"></i>
          <i className="fa-solid fa-star rating"></i>
          <i className="fa-solid fa-star rating"></i>
        </div>
        </div>
        <div className="aCart">
        <p>Item added on 8 january 2023</p>
        <h2>Quantity<input type="number" value="1" readOnly/></h2>
        <button className="btn-1" onClick={()=>addtoCart(items,id)}>Add to Cart</button>
        <button className="btn-2" onClick={()=>deleteProduct(id)}>Delete</button>
        </div>
        </div>
      })
    }
    
    </section> 
  )
}

export default Wishlist
