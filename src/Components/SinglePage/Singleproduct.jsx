import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './single.css'

const Singleproduct = ({items,addtoCart}) => {

    const {id} = useParams();

    const [image, setImg] = useState(items[id].img)
    
    return (
      <>
         <section id="pro-detail">
      <div className="single-pro-img">
        <img src={image} width="100%" id="main-img" alt=""/>
        <div className="small-img-group">
        <div className="small-img-col">
          <img src={items[id].img} className="small-img" width="100%" height="77%" alt="" onClick={()=> setImg(items[id].img)}/>
        </div>
        <div className="small-img-col">
          <img src={items[id].img1} className="small-img" width="100%" height="77%" alt="" onClick={()=>setImg(items[id].img1)}/>
        </div>
        <div className="small-img-col">
          <img src={items[id].img2} className="small-img" width="100%" height="77%" alt="" onClick={()=>setImg(items[id].img2)}/>
        </div>
        <div className="small-img-col">
          <img src={items[id].img3} className="small-img" width="100%" height="77%" alt="" onClick={()=>setImg(items[id].img3)}/>
        </div>

      </div>
      </div>
      <div className="Spro-detail">
        <h5>Product Name </h5>
        <h4>{items[id].title}</h4>
        <h2>{items[id].price}</h2>
        <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select>
        <input type="number" value="1"readOnly/>
        <button onClick={()=>addtoCart(items,id)}>Add to Cart</button>
        <h4>Product Details</h4>
        <span>Sleeve: Long Sleeve <br/>
          Pattern: Checkered <br/>
          Closure: Button <br/>
          Material: 100% Cotton</span>
      </div>
    </section>
      </>
  )
}

export default Singleproduct;
