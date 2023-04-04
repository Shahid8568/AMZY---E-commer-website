import React from 'react'
import Card from '../Card';
import items from '../items';
import './women.css'
import { Link } from 'react-router-dom';

const Women = ({womensCloth,womensCloth2,womensWatch,womensWatch2,womensShoes,womensShoes2,features,addProduct,addtoCart}) => {

    
  return (
    <>
       <section id="men-home">
        
            <img src="/images/banner1.jpg" alt="" />
            <div className="mainPara">
              <h3>Women's Fashion</h3>
              <p>Shopping Is Always a Good Ideaa!</p>
             <button id="men-btn">Shop Now</button>
            </div>
            <div className="sidepara"><h1>LIVE FOR FASHION</h1></div>

    </section>

    <section id="womenCloth">
      <h1>Trending <span id="span-1">WoMen's Wear</span></h1>

      <div className="boxes-3 flex">
      {
          womensCloth.map((e)=>{
            let id = e.id;
            return  <div className="boxes" key={e.id} id={e.id}>
            <img src={e.img} className="wcloth" alt="" />
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
              <i className="fa-solid fa-heart" onClick={() => addProduct(items)}></i>
              <i className="fa-solid fa-cart-shopping" onClick={()=>addtoCart(items,id)}></i>
            </div>
          </div>
          })
        }
      </div>
      <div className="boxes-3 flex">
      {
          womensCloth2.map((e)=>{
            let id = e.id;
            return  <div className="boxes" key={e.id} id={e.id}>
            <img src={e.img} className="wcloth" alt="" />
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
              <i className="fa-solid fa-heart" onClick={() => addProduct(items)}></i>
              <i className="fa-solid fa-cart-shopping" onClick={()=>addtoCart(items,id)}></i>
            </div>
          </div>
          })
        }
      </div>
    </section>

    <section id="watches">
      <h1>Trending <span id="span-1"> Watches</span></h1>
      <div className="boxes-3 flex">
        {
            womensWatch.map((e)=>{
              let id = e.id;
                return <div className="boxes" key={e.id} id={e.id}>
                <img src={e.img} className="w-h" alt="" />
                <h3>{e.cName}</h3>
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
                  <i className="fa-solid fa-heart" onClick={() => addProduct(items)}></i>
                  <i className="fa-solid fa-cart-shopping" onClick={()=>addtoCart(items,id)}></i>
                </div>
              </div>
            })
        }

        
      </div>
      <div className="boxes-3 flex">
        {
            womensWatch2.map((e)=>{
              let id = e.id;
                return <div className="boxes" key={e.id} id={e.id}>
                <img src={e.img} className="w-h" alt="" />
                <h3>{e.cName}</h3>
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
                  <i className="fa-solid fa-heart" onClick={() => addProduct(items)}></i>
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
          womensShoes.map((e)=>{
            let id = e.id;
            return  <div className="boxes" key={e.id} id={e.id}>
            <img src={e.img}  className="s-h" alt="" />
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
              <i className="fa-solid fa-heart" onClick={() => addProduct(items)}></i>
              <i className="fa-solid fa-cart-shopping" onClick={()=>addtoCart(items,id)}></i>
            </div>
          </div>
          })
        }
        
      </div>
      <div className="boxes-3 flex">
        {
          womensShoes2.map((e)=>{
            let id = e.id;
            return <div className="boxes" key={e.id} id={e.id}>
            <img src={e.img}  className="s-h" alt="" />
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
              <i className="fa-solid fa-heart" onClick={() => addProduct(items)}></i>
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

export default Women
