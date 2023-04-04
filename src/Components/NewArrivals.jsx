import React from 'react'
import Card from './Card'
import items from './items'
import { Link } from 'react-router-dom'

const NewArrivals = ({wishlist,setWishlist,addProduct,addtoCart}) => {
    const newArr = [
        {
            id: "60" ,
            cName: "Peter England",
            title: "Men's Blazer",
            about: "",
            price: "₹1,890",
            offPrice: "",
            img: "/images/product_img2.jpg",
            img1: "/images/product_img2.1.jpg",
            img2: "/images/product_img2.2.jpg",
            img3: "/images/product_img2.3.jpg",
        },
        {
            id: "61" ,
            cName: "Leriya Fashion",
            title: "Women's Dress",
            about: "",
            price: "₹890",
            offPrice: "₹1250",
            img: "/images/product_img1.jpg",
            img1: "/images/product_img1.1.jpg",
            img2: "/images/product_img1.2.jpg",
            img3: "/images/product_img1.3.jpg",
        },
        {
            id: "62" ,
            cName: "Dennis Lingo",
            title: "Men's Shirt",
            about: "",
            price: "₹470",
            offPrice: "₹695",
            img: "/images/product_img6.jpg",
            img1: "/images/product_img6.1.jpg",
            img2: "/images/product_img6.2.jpg",
            img3: "/images/product_img6.3.jpg",
        },
        {
            id: "63" ,
            cName: "SHRIEZ",
            title: "Women's Cotton T-shirt",
            about: "",
            price: "₹375",
            offPrice: "₹650",
            img: "/images/product_img12.jpg",
            img1: "/images/product_img12.3.jpg",
            img2: "/images/product_img12.2.jpg",
            img3: "/images/product_img12.1.jpg",
        },
    ]
    const NewArr2 = [
        
        {
            id: "64" ,
            cName: "Dennis Lingo",
            title: "Men's Shirt",
            about: "",
            price: "₹670",
            offPrice: "₹899",
            img: "/images/new-arr.5.jpg",
            img1: "/images/new-arr.5.1.jpg",
            img2: "/images/new-arr.5.2.jpg",
            img3: "/images/new-arr.5.3.jpg",
        },
        {
            id: "65" ,
            cName: "Lymio",
            title: "Dresses for Women",
            about: "",
            price: "₹439",
            offPrice: "₹869",
            img: "/images/new-arr.2.jpg",
            img1: "/images/new-arr.2.1.jpg",
            img2: "/images/new-arr.2.2.jpg",
            img3: "/images/new-arr.2.3.jpg",
        },
        {
            id: "66" ,
            cName: "RARE",
            title: "Women's Casual Dress",
            about: "",
            price: "₹790",
            offPrice: "₹1209",
            img: "/images/new-arr.4.jpg",
            img1: "/images/new-arr.4.1.jpg",
            img2: "/images/new-arr.4.2.jpg",
            img3: "/images/new-arr.4.3.jpg",
        },
        {
            id: "67" ,
            cName: "Raymond",
            title: "Men's Slim Formal Shirt",
            about: "",
            price: "₹950",
            offPrice: "₹1349",
            img: "/images/new-arr.8.jpg",
            img1: "/images/new-arr.8.1.jpg",
            img2: "/images/new-arr.8.2.jpg",
            img3: "/images/new-arr.8.3.jpg",
        },
    ]

  return (
    <>
     <section id="newArr">
    <h1>New Arrivals</h1>

    <div className="boxes-3 flex">
        {
            newArr.map((e)=>{
                return <Card key={e.id} id={e.id} title={e.title} brand={e.cName} img={e.img} price={e.price} offPrice={e.offPrice} about={e.about} addProduct={addProduct} addtoCart={addtoCart}/>
            })
        }
    </div>
    {/* newArr Ends */}
    <div className="boxes-3 flex">
        {
            NewArr2.map((e)=>{
                let id = e.id;
                return <div className="boxes" key={e.id}>
                <img className="n-a" src={e.img} alt="" />
                <h3>{e.cName}</h3>
                <p>{e.title}</p>
                <span className="price">{e.price}
                  <span className="ol">{e.offPrice}</span>
                  <p>20% Off</p>
                </span>
                <span>
                  <img className="rating" src="/images/Rating.png" alt="" />
                  <p className="review">(70)</p>
                </span>
                 <div className="hoverIconss">
                 <Link to={`/SingleProduct/${id}`}> <i className="fa-solid fa-eye"></i></Link>
                  <i className="fa-solid fa-heart" onClick={()=> addProduct(items,id)}></i>
                  <i className="fa-solid fa-cart-shopping" onClick={()=>addtoCart(items,id)}></i>
        
                </div>
              </div>
            })
        }
    </div>
  </section>

    </>
  )
}

export default NewArrivals
