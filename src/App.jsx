import './App.css';
import './Components/style.css';
import './Components/phone.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Men from './Components/Men/Men';
import mensCloth from './Components/Men/mensCloth'
import mensCloth2 from './Components/Men/mensCloth2'
import mensWatches from './Components/Men/mensWatches'
import mensWatches2 from './Components/Men/mensWatches2'
import mensShoes from './Components/Men/mensShoes'
import mensShoes2 from './Components/Men/mensShoes2'
import Women from './Components/Women/Women';
import womensCloth from './Components/Women/womensCloth'
import womensCloth2 from './Components/Women/womensCloth2'
import womensWatch from './Components/Women/womensWatch'
import womensWatch2 from './Components/Women/womensWatch2'
import womensShoes from './Components/Women/womensShoes'
import womensShoes2 from './Components/Women/womensShoes2'
import Singleproduct from './Components/SinglePage/Singleproduct';
import Wishlist from './Components/Wishlist/Wishlist';
import items from './Components/items';
import features from './Components/features'
import { useState } from 'react';


function App() {

  const [wishlist, setWishlist] = useState([
    {
      id: "64",
      cName: "Dennnis Lingo",
      title: "Shirt For Men",
      about: "",
      price: "₹670",
      offPrice: "₹899",
      img: "/images/new-arr.5.jpg",
      img1: "/images/new-arr.5.1.jpg",
      img2: "/images/new-arr.5.2.jpg",
      img3: "/images/new-arr.5.3.jpg",
    },
    {
      id: "8",
      cName: "CASIO: G-Shock",
      title: "Men's Watch",
      about: "",
      price: "₹10,499",
      offPrice: "",
      img: "/images/M-watch-1.jpg",
      img1: "/images/M-watch-1.1.jpg",
      img2: "/images/M-watch-1.2.jpg",
      img3: "/images/M-watch-1.3.jpg",
    },
    {
      id: "23",
      cName: "NIKE:Pegasus 39 Running Shoe",
      title: "Men's Shoes",
      about: "",
      price: "₹11,950",
      offPrice: "",
      img: "/images/Mshoes-8.jpg",
      img1: "/images/Mshoes-8.1.jpg",
      img2: "/images/Mshoes-8.2.jpg",
      img3: "/images/Mshoes-8.3.jpg",
    },
  ])

  const [cart, setCart] = useState([
    {
      id: "0",
      title: "Men's Oversized T-shirt(White)",
      price: "₹499",
      img: "images/mens (5).jpg",
      qty: "1",
      subtot: "499"
    },
    {
      id: "1",
      title: "CASIO: G-Shock Men's Watch",
      price: "₹10,499",
      img: "images/M-watch-1.jpg",
      qty: "1",
      subtot: "10,499"
    },
    {
      id: "2",
      title: "Thor Long Sleeve T-shirt",
      price: "₹789",
      img: "images/mens (8).jpg",
      qty: "1",
      subtot: "789"
    },

  ])

  const addProduct = (items,id) => {

    const newWishlist = {
      id: items[id].id,
      cName: items[id].cName,
      title: items[id].title,
      about: "",
      price: items[id].price,
      offPrice: items[id].offPrice,
      img: items[id].img,
    }
    setWishlist([...wishlist, newWishlist])

    alert("Added to Wishlist..!");
  }
  
  const addtoCart = (items,id) => {

    const newCart = {
      id: items[id].id,
      title: items[id].title,
      price: items[id].price,
      img: items[id].img,
    }
    setCart([...cart, newCart])

    alert("Added to Cart..!");
  }

  return (


      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home addProduct={addProduct} addtoCart={addtoCart} />} />

          <Route exact path="/Men" element={<Men mensCloth={mensCloth} mensCloth2={mensCloth2} mensWatches={mensWatches} mensWatches2={mensWatches2} mensShoes={mensShoes} mensShoes2={mensShoes2} features={features} addProduct={addProduct} addtoCart={addtoCart} />} />

          <Route exact path="/Women" element={<Women womensCloth={womensCloth} womensCloth2={womensCloth2} womensWatch={womensWatch} womensWatch2={womensWatch2} womensShoes={womensShoes} womensShoes2={womensShoes2} features={features} addProduct={addProduct} addtoCart={addtoCart} />} />

          <Route exact path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />

          <Route exact path="/Wishlist" element={< Wishlist wishlist={wishlist} setWishlist={setWishlist} addtoCart={addtoCart} />} />

          <Route exact path="/SingleProduct/:id" element={<Singleproduct items={items} features={features} addProduct={addProduct} addtoCart={addtoCart} />} />

          <Route exact path="/Wishlist" element={< Wishlist wishlist={wishlist} setWishlist={setWishlist} addtoCart={addtoCart} />} />
        </Routes>
        <Footer />
      </Router>

  );
}

export default App;
