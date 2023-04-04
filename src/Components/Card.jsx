import React from 'react'
import { Link } from 'react-router-dom'
import items from './items'

const Card = ({keys,brand,title,img,price,offPrice,id,addProduct,addtoCart}) => {

  return (
    <div className="boxes" key={keys}>
            <img src={img} className="m-c homeImg"  alt="" />
            <h3>{brand}</h3>
            <p>{title}</p>
            <span className="price"
              >{price}
              <span className="ol">{offPrice} </span>
              <p>20% Off</p>
            </span>
            <span>
              <img className="rating" src="/images/Rating.png" alt="" />
              <p className="review">(70)</p>
            </span>
            <div className="hoverIconss">
              <Link to={`/SingleProduct/${id}`}> <i className="fa-solid fa-eye"></i></Link>
              <i className="fa-solid fa-heart" onClick={() => addProduct(items,id)}></i>
              <i className="fa-solid fa-cart-shopping" onClick={() => addtoCart(items,id)}></i>
            </div>
          </div>
  )
}

export default Card
