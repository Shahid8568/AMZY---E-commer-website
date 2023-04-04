import React from 'react'
import Card from './Card';

const FeaturedProducts = ({addProduct,addtoCart}) => {

    const featuredProduct = [
        {
        id: "52" ,
        cName: "Greciilooks",
        title: "Western Dress Women",
        about: "",
        price: "₹459",
        offPrice: "₹799",
        img: "/images/product_img7.jpg",
        img1: "/images/product_img7.1.jpg",
        img2: "/images/product_img7.2.jpg",
        img3: "/images/product_img7.3.jpg",
    },
        {
        id: "53",
        cName: "Dennis Lingo",
        title: "Men's Shirt",
        about: "",
        price: "₹779",
        offPrice: "₹1299",
        img: "/images/product_img10.jpg",
        img1: "/images/SP4.jpg",
        img2: "/images/SP6.jpg",
        img3: "/images/SP5.jpg",
    },
        {
        id: "54" ,
        cName: "Blink Street",
        title: "Boy's Jacket",
        about: "",
        price: "₹675",
        offPrice: "₹899",
        img: "/images/product_img8.jpg",
        img1: "/images/product_img8.1.jpg",
        img2: "/images/product_img8.2.jpg",
        img3: "/images/product_img8.3.jpg",
    },
        {
        id: "55" ,
        cName: "Lymio",
        title: "Dress For Women",
        about: "",
        price: "₹569",
        offPrice: "₹759",
        img: "/images/product_img3.jpg",
        img1: "/images/product_img3.1.jpg",
        img2: "/images/product_img3.2.jpg",
        img3: "/images/product_img3.3.jpg",
    },
    ];
    const featuredProduct2 =[
        
        {
            id: "56" ,
            cName: "Diesel",
            title: "Chronograph Black Dial Men's",
            about: "",
            price: "₹19,999",
            offPrice: "",
            img: "/images/watch-f.jpg",
            img1: "/images/watch-f.1.jpg",
            img2: "/images/watch-f.2.jpg",
            img3: "/images/watch-f.3.jpg",
        },
            {
            id: "57" ,
            cName: "Kelwin",
            title: "Men's Stylish Sneaker",
            about: "",
            price: "₹799",
            offPrice: "₹999",
            img: "/images/Shoes-f.1.jpg",
            img1: "/images/Shoes-f.1.1.jpg",
            img2: "/images/Shoes-f.1.2.jpg",
            img3: "/images/Shoes-f.1.3.jpg",
        },
            {
            id: "58" ,
            cName: "Joker & Witch",
            title: "Women's Nebula White Dial",
            about: "",
            price: "₹499",
            offPrice: "₹799",
            img: "/images/Wwatch-1.c.jpg",
            img1: "/images/Wwatch-1.1.jpg",
            img2: "/images/Wwatch-1.2.jpg",
            img3: "/images/Wwatch-1.3.jpg",
        },
            {
            id: "59" ,
            cName: "AquaMagic",
            title: "Sneakers For Women",
            about: "",
            price: "₹799",
            offPrice: "₹999",
            img: "/images/W-shoes-1.jpg",
            img1: "/images/Wshoes-1(1).jpg",
            img2: "/images/Wshoes-1(2).jpg",
            img3: "/images/Wshoes-1(3).jpg",
        },
    ];
  return (
    <section id="features">
    <h1>Featured Products </h1>
    <div className="boxes-3 flex">
        {
            featuredProduct.map((e)=>{
                return<Card key={e.id} title={e.title} id={e.id} brand={e.cName} img={e.img} price={e.price} offPrice={e.offPrice} about={e.about} addProduct={addProduct} addtoCart={addtoCart}/>
            })
        }
    </div>
    {/* f1 ends */}

    <div className="boxes-3 flex">
        {
            featuredProduct2.map((e)=>{
                return <Card key={e.id} title={e.title} id={e.id} brand={e.cName} img={e.img} price={e.price} offPrice={e.offPrice} about={e.about} addProduct={addProduct} addtoCart={addtoCart}/>
            })
        }
    </div>
  </section>
  )
}

export default FeaturedProducts
