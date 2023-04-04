import './App.css';
import './Components/style.css';
import './Components/phone.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import Singleproduct from './Components/SinglePage/Singleproduct';
import Wishlist from './Components/Wishlist/Wishlist';
import items from './Components/items';
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

  const addProduct = (items, id) => {

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
  
  const addtoCart = (items, id) => {

    const newCart = {
      id: items[id].id,
      title: items[id].title,
      price: items[id].price,
      img: items[id].img,
    }
    setCart([...cart, newCart])

    alert("Added to Cart..!");
  }

  const mensCloth = [
    {
      id: "0",
      cName: "Lyriq",
      title: "Shirt For Men",
      about: "",
      price: "₹459",
      offPrice: "₹790 ",
      img: "/images/mens (1).jpg",
      img1: "/images/mens (1.1).jpg",
      img2: "/images/mens (1.2).jpg",
      img3: "/images/mens (1.3).jpg",
    },
    {
      id: "1",
      cName: "XPior",
      title: "Men's Funky Shirt",
      about: "",
      price: "₹599",
      offPrice: "₹999",
      img: "/images/mens (2).jpg",
      img1: "/images/mens (2.1).jpg",
      img2: "/images/mens (2).jpg",
      img3: "/images/mens (2.1).jpg",
    },
    {
      id: "2",
      cName: "LookMark",
      title: "Men's Shirt",
      about: "",
      price: "₹349",
      offPrice: "₹669",
      img: "/images/mens (3).jpg",
      img1: "/images/mens (3.1).jpg",
      img2: "/images/mens (3.2).jpg",
      img3: "/images/mens (3.3).jpg",
    },
    {
      id: "3",
      cName: "Molimen",
      title: "Men's Fashion Shirt",
      about: "",
      price: "₹589",
      offPrice: "₹789",
      img: "/images/mens (4).jpg",
      img1: "/images/mens (4.1).jpg",
      img2: "/images/mens (4.2).jpg",
      img3: "/images/mens (4).jpg",
    },

  ];

  const mensCloth2 = [
    {
      id: "4",
      cName: "Rozden",
      title: "Men's Oversized T-shirt",
      about: "",
      price: "₹499",
      offPrice: "₹799",
      img: "/images/mens (5).jpg",
      img1: "/images/mens (5.1).jpg",
      img2: "/images/mens (5.2).jpg",
      img3: "/images/mens (5.3).jpg",
    },
    {
      id: "5",
      cName: "PUMA",
      title: "Men's Fit T-shirt",
      about: "",
      price: "₹690",
      offPrice: "₹989",
      img: "/images/mens (6).jpg",
      img1: "/images/mens (6.1).jpg",
      img2: "/images/mens (6.2).jpg",
      img3: "/images/mens (6.3).jpg",
    },
    {
      id: "6",
      cName: "Aspire",
      title: "Men's t-shirt",
      about: "",
      price: "₹475",
      offPrice: "₹785",
      img: "/images/mens (7).jpg",
      img1: "/images/mens (7.1).jpg",
      img2: "/images/mens (7.2).jpg",
      img3: "/images/mens (7.3).jpg",
    },
    {
      id: "7",
      cName: "Planet Superheros",
      title: "Thor Long Sleeve T-shirt",
      about: "",
      price: "₹789",
      offPrice: "₹1279",
      img: "/images/mens (8).jpg",
      img1: "/images/mens (8.1).jpg",
      img2: "/images/mens (8.2).jpg",
      img3: "/images/mens (8.3).jpg",
    },
  ];

  const mensWatches = [
    {
      id: "8",
      cName: "CASIO",
      title: "G-Shock  Men's Watch",
      about: "",
      price: "₹10,499",
      offPrice: "",
      img: "/images/M-watch-1.jpg",
      img1: "/images/M-watch-1.1.jpg",
      img2: "/images/M-watch-1.2.jpg",
      img3: "/images/M-watch-1.3.jpg",
    },
    {
      id: "9",
      cName: "Amazfit",
      title: "GTS2 Mini  Smart Watch",
      about: "",
      price: "₹2000",
      offPrice: "",
      img: "/images/M-watch-2.jpg",
      img1: "/images/M-watch-2.1.jpg",
      img2: "/images/M-watch-2.2.jpg",
      img3: "/images/M-watch-2.3.jpg",
    }, {
      id: "10",
      cName: "TITAN",
      title: "Titan Neo Black Dial",
      about: "",
      price: "₹1199",
      offPrice: "",
      img: "/images/M-watch-3.jpg",
      img1: "/images/M-watch-3.1.jpg",
      img2: "/images/M-watch-3.2.jpg",
      img3: "/images/M-watch-3.3.jpg",
    },
    {
      id: "11",
      cName: "TIMEX",
      title: "Automatic Analog Brown Dial",
      about: "",
      price: "₹12,999",
      offPrice: "",
      img: "/images/M-watch-4.jpg",
      img1: "/images/M-watch-4.1.jpg",
      img2: "/images/M-watch-4.2.jpg",
      img3: "/images/M-watch-4.3.jpg",
    },
  ];

  const mensWatches2 = [
    {
      id: "12",
      cName: "Diesel",
      title: "Analog Black Over sized dial",
      about: "",
      price: "₹19,999",
      offPrice: "",
      img: "/images/M-watch-5.jpg",
      img1: "/images/M-watch-5.1.jpg",
      img2: "/images/M-watch-5.2.jpg",
      img3: "/images/M-watch-5.3.jpg",
    },
    {
      id: "13",
      cName: "Tommy Hilfiger",
      title: "Analog Blue Dial ",
      about: "",
      price: "₹14,750",
      offPrice: "",
      img: "/images/M-watch-6.jpg",
      img1: "/images/M-watch-6.1.jpg",
      img2: "/images/M-watch-6.2.jpg",
      img3: "/images/M-watch-6.3.jpg",
    }, {
      id: "14",
      cName: "G Shock ",
      title: "Analog-Digital Black-GA-900C",
      about: "",
      price: "₹10,999",
      offPrice: "",
      img: "/images/M-watch-7.jpg",
      img1: "/images/M-watch-7.1.jpg",
      img2: "/images/M-watch-7.2.jpg",
      img3: "/images/M-watch-7.3.jpg",
    },
    {
      id: "15",
      cName: "French Connection",
      title: "Analog Blue Dial-FCA03-4l",
      about: "",
      price: "₹6,599",
      offPrice: "",
      img: "/images/M-watch-8.jpg",
      img1: "/images/M-watch-8.1.jpg",
      img2: "/images/M-watch-8.2.jpg",
      img3: "/images/M-watch-8.3.jpg",
    },
  ];
  const mensShoes = [
    {
      id: "16",
      cName: "ASIAN",
      title: "Men's Stylish Sneaker",
      about: "",
      price: "₹549",
      offPrice: "₹999",
      img: "/images/Mshoes-1.jpg",
      img1: "/images/Mshoes-1.1.jpg",
      img2: "/images/Mshoes-1.2.jpg",
      img3: "/images/Mshoes-1.3.jpg",
    }, {
      id: "17",
      cName: "Lotto",
      title: "Mens Vertigo Running Shoes",
      about: "",
      price: "₹799",
      offPrice: "₹1199",
      img: "/images/Mshoes-2.jpg",
      img1: "/images/Mshoes-2.1.jpg",
      img2: "/images/Mshoes-2.2.jpg",
      img3: "/images/Mshoes-2.3.jpg",
    }, {
      id: "18",
      cName: "Sparx",
      title: "Mens Sm-323 Sneaker",
      about: "",
      price: "₹699",
      offPrice: "₹1299",
      img: "/images/Mshoes-3.jpg",
      img1: "/images/Mshoes-3.1.jpg",
      img2: "/images/Mshoes-3.2.jpg",
      img3: "/images/Mshoes-3.3.jpg",
    }, {
      id: "19",
      cName: "Bourge",
      title: "Mens Vega-z5 Running Shoes",
      about: "",
      price: "₹449",
      offPrice: "₹799",
      img: "/images/Mshoes-4.jpg",
      img1: "/images/Mshoes-4.1.jpg",
      img2: "/images/Mshoes-4.2.jpg",
      img3: "/images/Mshoes-4.3.jpg",
    }
  ];

  const mensShoes2 = [
    {
      id: "20",
      cName: "Nike",
      title: "White Running Shoes(DD02101)",
      about: "",
      price: "₹6,430",
      offPrice: "",
      img: "/images/Mshoes-5.jpg",
      img1: "/images/Mshoes-5.1.jpg",
      img2: "/images/Mshoes-5.2.jpg",
      img3: "/images/Mshoes-5.3.jpg",
    }, {
      id: "21",
      cName: "Woodland",
      title: "Men's Leather Casual Shoes ",
      about: "",
      price: "₹2,399",
      offPrice: "",
      img: "/images/Mshoes-6.jpg",
      img1: "/images/Mshoes-6.1.jpg",
      img2: "/images/Mshoes-6.2.jpg",
      img3: "/images/Mshoes-6.3.jpg",
    }, {
      id: "22",
      cName: "Puma",
      title: "Backcourt Black-High Risk Red",
      about: "",
      price: "₹6,599",
      offPrice: "",
      img: "/images/Mshoes-7.jpg",
      img1: "/images/Mshoes-6.1.jpg",
      img2: "/images/Mshoes-6.2.jpg",
      img3: "/images/Mshoes-6.3.jpg",
    }, {
      id: "23",
      cName: "Nike",
      title: "Air Pegasus 39 Running Shoe",
      about: "",
      price: "₹11,950",
      offPrice: "",
      img: "/images/Mshoes-8.jpg",
      img1: "/images/Mshoes-8.1.jpg",
      img2: "/images/Mshoes-8.2.jpg",
      img3: "/images/Mshoes-8.3.jpg",
    },
  ];

  const features = [
    {
      id: "24",
      cName: "Peter England",
      title: "Men's Blazer",
      about: "",
      price: "₹499",
      offPrice: "₹799",
      img: "/images/product_img2.jpg",
      img1: "/images/product_img2.1.jpg",
      img2: "/images/product_img2.2.jpg",
      img3: "/images/product_img2.3.jpg",
    }, {
      id: "25",
      cName: "Leriya Fashion",
      title: "Women's Dress",
      about: "",
      price: "₹499",
      offPrice: "₹799",
      img: "/images/product_img1.jpg",
      img1: "/images/product_img1.1.jpg",
      img2: "/images/product_img1.2.jpg",
      img3: "/images/product_img1.3.jpg",
    }, {
      id: "26",
      cName: "Dennis Lingo",
      title: "Men's Shirt",
      about: "",
      price: "₹499",
      offPrice: "₹799",
      img: "/images/product_img6.jpg",
      img1: "/images/product_img6.1.jpg",
      img2: "/images/product_img6.2.jpg",
      img3: "/images/product_img6.3.jpg",
    }, {
      id: "27",
      cName: "SHRIEZ",
      title: "Women's Cotton T-shirt",
      about: "",
      price: "₹499",
      offPrice: "₹799",
      img: "/images/product_img12.jpg",
      img1: "/images/product_img12.1.jpg",
      img2: "/images/product_img12.2.jpg",
      img3: "/images/product_img12.3.jpg",
    }
  ];

  const womensCloth = [
    {
      id: "28",
      cName: "RARE",
      title: "Flare Knee Length Dress",
      about: "",
      price: "₹470",
      offPrice: "₹999",
      img: "/images/women(1).jpg",
      img1: "/images/women(1.1).jpg",
      img2: "/images/women(1.2).jpg",
      img3: "/images/women(1.3).jpg",
    }, {
      id: "29",
      cName: "GoSriKi",
      title: "Cotton Blend  Straight Kurta",
      about: "",
      price: "₹799",
      offPrice: "₹1299",
      img: "/images/women(2).jpg",
      img1: "/images/women(2.1).jpg",
      img2: "/images/women(2.2).jpg",
      img3: "/images/women(2.3).jpg",
    },
    {
      id: "30",
      cName: "Neva",
      title: "Slub Rayon Western Dresses",
      about: "",
      price: "₹279",
      offPrice: "₹699",
      img: "/images/women(3).jpg",
      img1: "/images/women(3.1).jpg",
      img2: "/images/women(3.2).jpg",
      img3: "/images/women(3.3).jpg",
    }, {
      id: "31",
      cName: "Lymio",
      title: "Women Top (526-576)",
      about: "",
      price: "₹410",
      offPrice: "₹799",
      img: "/images/women(4).jpg",
      img1: "/images/women(4.1).jpg",
      img2: "/images/women(4.2).jpg",
      img3: "/images/women(4.3).jpg",
    },

  ];

  const womensCloth2 = [
    {
      id: "32",
      cName: "ANNI DESIGNER",
      title: "Cotton Blend  Anarkali Kurta",
      about: "",
      price: "₹659",
      offPrice: "₹1259",
      img: "/images/women(5).jpg",
      img1: "/images/women(5.1).jpg",
      img2: "/images/women(5.2).jpg",
      img3: "/images/women(5.3).jpg",
    }, {
      id: "33",
      cName: "Greciilooks",
      title: "Western Dresses Knee-Length",
      about: "",
      price: "₹399",
      offPrice: "₹889",
      img: "/images/women(6).jpg",
      img1: "/images/women(6.1).jpg",
      img2: "/images/women(6.2).jpg",
      img3: "/images/women(6.3).jpg",
    },
    {
      id: "34",
      cName: "J B Fashion",
      title: "Western Top with halfSleeves",
      about: "",
      price: "₹419",
      offPrice: "₹850",
      img: "/images/women(7).jpg",
      img1: "/images/women(7.1).jpg",
      img2: "/images/women(7.2).jpg",
      img3: "/images/women(7.3).jpg",
    }, {
      id: "35",
      cName: "Greciilooks",
      title: "Lycra Striped Top  Half Sleeves",
      about: "",
      price: "₹379",
      offPrice: "₹799",
      img: "/images/women(8).jpg",
      img1: "/images/women(8.1).jpg",
      img2: "/images/women(8.2).jpg",
      img3: "/images/women(8.3).jpg",
    },
  ]

  const womensWatch = [
    {
      id: "36",
      cName: "CASIO",
      title: "Analog Rose Gold Dial-E157MR",
      about: "",
      price: "₹5,246",
      offPrice: "",
      img: "/images/w-watch1.jpg",
      img1: "/images/W-watch-1.1.jpg",
      img2: "/images/W-watch-1.2.jpg",
      img3: "/images/W-watch-1.3.jpg",
    }, {
      id: "37",
      cName: "TITAN",
      title: "Analog Black Dial-NL2480SM02",
      about: "",
      price: "₹3,145",
      offPrice: "",
      img: "/images/w-watch2.jpg",
      img1: "/images/w-watch2.1.jpg",
      img2: "/images/w-watch2.2.jpg",
      img3: "/images/w-watch2.3.jpg",
    },
    {
      id: "38",
      cName: "French Connection",
      title: "Analog Dial Women's Watch",
      about: "",
      price: "₹1,399",
      offPrice: "",
      img: "/images/w-watch3.jpg",
      img1: "/images/w-watch3.1.jpg",
      img2: "/images/w-watch3.2.jpg",
      img3: "/images/w-watch3.3.jpg",
    }, {
      id: "39",
      cName: "Fastrack",
      title: "Analog Black Dial-38024PP25",
      about: "",
      price: "₹1,249",
      offPrice: "",
      img: "/images/w-watch4.jpg",
      img1: "/images/w-watch4.1.jpg",
      img2: "/images/w-watch4.2.jpg",
      img3: "/images/w-watch4.3.jpg",
    },
  ];

  const womensWatch2 = [
    {
      id: "40",
      cName: "Fosssil",
      title: "Rose Gold Dial Watch-ES4879",
      about: "",
      price: "₹7,795",
      offPrice: "",
      img: "/images/w-watch5.jpg",
      img1: "/images/w-watch5.1.jpg",
      img2: "/images/w-watch5.2.jpg",
      img3: "/images/w-watch5.3.jpg",
    }, {
      id: "41",
      cName: "Sonata",
      title: "White Dial  Watch-8976SL15l",
      about: "",
      price: "₹1,750",
      offPrice: "",
      img: "/images/w-watch6.jpg",
      img1: "/images/w-watch6.1.jpg",
      img2: "/images/w-watch6.2.jpg",
      img3: "/images/w-watch6.3.jpg",
    }, {
      id: "42",
      cName: "Casio",
      title: "Analog Black Dial Watch-VT01GL",
      about: "",
      price: "₹5,650",
      offPrice: "",
      img: "/images/w-watch7.jpg",
      img1: "/images/w-watch7.1.jpg",
      img2: "/images/w-watch7.2.jpg",
      img3: "/images/w-watch7.3.jpg",
    }, {
      id: "43",
      cName: "Daniel Klein",
      title: "Analog Women's Watch",
      about: "",
      price: "₹3,299",
      offPrice: "",
      img: "/images/w-watch8.jpg",
      img1: "/images/w-watch8.1.jpg",
      img2: "/images/w-watch8.2.jpg",
      img3: "/images/w-watch8.3.jpg",
    },
  ]
  const womensShoes = [
    {
      id: "44",
      cName: "ASIAN",
      title: "Elasto-02 Knitted,Sports Shoes",
      about: "",
      price: "₹549",
      offPrice: "₹989",
      img: "/images/Wshoes1.jpg",
      img1: "/images/Wshoes-1.1.jpg",
      img2: "/images/Wshoes-1.2.jpg",
      img3: "/images/Wshoes-1.3.jpg",
    },
    {
      id: "45",
      cName: "BATA",
      title: "womens Kafi Slipper",
      about: "",
      price: "₹499",
      offPrice: "₹899",
      img: "/images/Wshoes2.jpg",
      img1: "/images/Wshoes2.1.jpg",
      img2: "/images/Wshoes2.2.jpg",
      img3: "/images/Wshoes2.3.jpg",
    },
    {
      id: "46",
      cName: "TRASE",
      title: "Women's Fashion Sandal",
      about: "",
      price: "₹599",
      offPrice: "₹1299",
      img: "/images/Wshoes3.jpg",
      img1: "/images/Wshoes3.1.jpg",
      img2: "/images/Wshoes3.2.jpg",
      img3: "/images/Wshoes3.3.jpg",
    },
    {
      id: "47",
      cName: "Campus",
      title: "Sd-062 Outdoor Sandals",
      about: "",
      price: "₹385",
      offPrice: "₹779",
      img: "/images/Wshoes4.jpg",
      img1: "/images/Wshoes4.1.jpg",
      img2: "/images/Wshoes4.2.jpg",
      img3: "/images/Wshoes4.3.jpg",
    },

  ];

  const womensShoes2 = [
    {
      id: "48",
      cName: "DREAM PAIRS",
      title: "Platform Wedge Sneakers Ankle",
      about: "",
      price: "₹11,206",
      offPrice: "",
      img: "/images/Wshoes5.jpg",
      img1: "/images/Wshoes5.1.jpg",
      img2: "/images/Wshoes5.2.jpg",
      img3: "/images/Wshoes5.3.jpg",
    },
    {
      id: "49",
      cName: "ECCO",
      title: "Slip-On Formal Shoes|2170452",
      about: "",
      price: "₹9,999",
      offPrice: "",
      img: "/images/Wshoes6.jpg",
      img1: "/images/Wshoes6.1.jpg",
      img2: "/images/Wshoes6.2.jpg",
      img3: "/images/Wshoes6.3.jpg",
    },
    {
      id: "50",
      cName: "Red Tape",
      title: "Women White/Blue Sneakers",
      about: "",
      price: "₹3,599",
      offPrice: "",
      img: "/images/Wshoes7.jpg",
      img1: "/images/Wshoes7.1.jpg",
      img2: "/images/Wshoes7.2.jpg",
      img3: "/images/Wshoes7.3.jpg",
    },
    {
      id: "51",
      cName: "Nike",
      title: "Womens Jordan Ma2 Sneaker",
      about: "",
      price: "₹6,950",
      offPrice: "",
      img: "/images/Wshoes8.jpg",
      img1: "/images/Wshoes8.1.jpg",
      img2: "/images/Wshoes8.2.jpg",
      img3: "/images/Wshoes8.3.jpg",
    },
  ];

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
