import React from 'react';
import Card from '../Card';
import '../style.css';
import './men.css';
import items from '../items';
import { Link } from 'react-router-dom';

const Men = ({mensCloth,mensCloth2,mensWatches,mensWatches2,mensShoes,mensShoes2,features,addProduct,addtoCart}) => {
  
  return (
    <>
      <section id="men-home">
              <img src="/images/banner2.jpg" alt="" />
              <div className="mainPara">
              <h3>Men's Fashion</h3>
              <p>The Best Fashion Collection at AMZY</p>
              <button id="men-btn">Shop Now </button>
            </div>
              <div className="sidepara"><h1>FASHION LIFE</h1></div>
      </section>

      <section id="mensCloth" >
        <h1>Trending <span id="span-1">Men's Wear</span></h1>

        <div className="boxes-3 flex">
          {
            mensCloth.map((e) => {
              return <Card key={e.id} title={e.title} brand={e.cName} img={e.img} price={e.price} offPrice={e.offPrice} about={e.about} id={e.id} addProduct={addProduct}addtoCart={addtoCart}/>
            })
          }
        </div>
        <div className="boxes-3 flex">
          {
            mensCloth2.map((e) => {
              return <Card key={e.id} title={e.title} brand={e.cName} img={e.img} price={e.price} offPrice={e.offPrice} about={e.about} id={e.id}  addProduct={addProduct} addtoCart={addtoCart}/>
            })
          }
        </div>
      </section>

      <section id="watches">
        <h1>Trending <span id="span-1"> Watches</span></h1>
        <div className="boxes-3 flex">
          {
            mensWatches.map((e) => {
              let id = e.id;
              return <div className="boxes" key={e.id} id={e.id}>
                <img src={e.img} className="w-h" alt="" />
                <h3>{e.cName} </h3>
                <p>{e.title}</p>
                <span className="price"
                >{e.price}
                  <p>20% Off</p>
                </span>
                <span>
                  <img className="rating" src="/images/Rating.png" alt="" />
                  <p className="review">(70)</p>
                </span>
                <div className="hoverIconss">
                <Link to={`/SingleProduct/${id}`}> <i className="fa-solid fa-eye"></i></Link>
                  <i className="fa-solid fa-heart" onClick={() => addProduct(items,id)}></i>
                  <i className="fa-solid fa-cart-shopping" onClick={()=>addtoCart(items,id)}></i>
                </div>
              </div>
            })
          }

        </div>
        <div className="boxes-3 flex">
          {
            mensWatches2.map((e) => {
              let id = e.id;
              return <div className="boxes" key={e.id} id={e.id}>
                <img src={e.img} className="w-h" alt="" />
                <h3>{e.cName} </h3>
                <p>{e.title}</p>
                <span className="price"
                >{e.price}
                  <p>20% Off</p>
                </span>
                <span>
                  <img className="rating" src="/images/Rating.png" alt="" />
                  <p className="review">(70)</p>
                </span>
                <div className="hoverIconss">
                <Link to={`/SingleProduct/${id}`}> <i className="fa-solid fa-eye"></i></Link>
                  <i className="fa-solid fa-heart" onClick={() => addProduct(items,id)}></i>
                  <i className="fa-solid fa-cart-shopping" onClick={()=>addtoCart(items,id)}></i>
                </div>
              </div>
            })
          }

        </div>
      </section>

      <section id="shoes">
        <h1>Trending<span id="span-1"> Footwear</span></h1>
        <div className="boxes-3 flex">
          {
            mensShoes.map((e) => {
              let id = e.id;
              return <div className="boxes" key={e.id} id={e.id}>
                <img src={e.img} className="s-h" alt="" />
                <h3>{e.cName}</h3>
                <p>{e.title}</p>
                <span className="price"
                >{e.price}
                  <span className="ol">{e.offPrice} </span>
                  <p>20% Off</p>
                </span>
                <span>
                  <img className="rating" src="/images/Rating.png" alt="" />
                  <p className="review">(70)</p>
                </span>
                <div className="hoverIconss">
                <Link to={`/SingleProduct/${id}`}> <i className="fa-solid fa-eye"></i></Link>
                  <i className="fa-solid fa-heart" onClick={() => addProduct(items,id)}></i>
                  <i className="fa-solid fa-cart-shopping" onClick={()=>addtoCart(items,id)}></i>
                </div>
              </div>
            })
          }

        </div>
        <div className="boxes-3 flex">
          {
            mensShoes2.map((e) => {
              let id = e.id;
              return <div className="boxes" key={e.id} id={e.id}>
                <img src={e.img} className="s-h" alt="" />
                <h3>{e.cName}</h3>
                <p>{e.title}</p>
                <span className="price"
                >{e.price}
                  <span className="ol">{e.offPrice} </span>
                  <p>20% Off</p>
                </span>
                <span>
                  <img className="rating" src="/images/Rating.png" alt="" />
                  <p className="review">(70)</p>
                </span>
                <div className="hoverIconss">
                <Link to={`/SingleProduct/${id}`}> <i className="fa-solid fa-eye"></i></Link>
                  <i className="fa-solid fa-heart" onClick={() => addProduct(items,id)}></i>
                  <i className="fa-solid fa-cart-shopping" onClick={()=>addtoCart(items,id)}></i>
                </div>
              </div>
            })
          }

        </div>
      </section>

      <section id="features">
        <h1>Featured<span id="span-1"> Products</span></h1>
        <div className="boxes-3 flex">
          {
            features.map((e) => {
              return <Card key={e.id} title={e.title} brand={e.cName} img={e.img} price={e.price} offPrice={e.offPrice} about={e.about} id={e.id}  addProduct={addProduct} addtoCart={addtoCart}/>
            })
          }

        </div>
      </section>
    </>
  )
}

export default Men;
