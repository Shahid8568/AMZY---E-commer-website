import React from 'react'
import './cart.css'
import { Link,useParams } from 'react-router-dom';
import { useState } from 'react';

const Cart = ({cart,setCart}) => {

    const {id} = useParams();
    const [qty, setQty] = useState(1)
    const  deleteProduct = (id)=>{
    const newCart = cart.filter((e)=> e.id !== id);
        setCart(newCart);
      }

    const clearCart =()=>{
        setCart([]);
      }

    if(cart?.length === 0) return <div className="empty"><h2>Cart is Empty..!</h2><Link to="/"><button className="btn">Show Now</button></Link></div>

  return (
    <>
          <section id="cart">
        <h1>Shopping Cart</h1>
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>SubTotal</td>
                </tr>
                </thead>        
                    {
                            cart.map((e)=>{
                            var id=e.id;
                               
                            return <tbody key={e.id} >
                                <>
                            <tr>
                            <td><i className="fa-sharp fa-solid fa-xmark" onClick={()=>deleteProduct(id)}></i></td>
                            <td><img src={e.img} alt=""/></td>
                            <td>{e.title}</td>
                            <td id='price'>{e.price}</td>
                            <td><button className="btn btn-qty">-</button><input type="number" id='qty' value={1} readOnly/><button className="btn btn-qty">+</button></td>
                            <td>{e.price}</td>
                            </tr>
                            </>
                            </tbody>
                        })
                    }    
        </table>
        <button className="btn" onClick={()=>clearCart()} style={{display:"block",margin: "auto",marginTop:"4%"}}>Clear Cart</button>
    </section>

    <section id="cart-tot">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter your Coupon" />
                <button>Apply</button>

            </div>
        </div>

        <div id="subtot">
            <h3>Cart Totals</h3>
            <table>
                <tbody>
                <tr>
                    <td>Cart-Total</td>
                    <td>₹11,787</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>₹11,787</strong></td>
                </tr>
                </tbody>
            </table>
            <button>Proceed to Buy</button>

        </div>
    </section>
    </>
  )
}

export default Cart
