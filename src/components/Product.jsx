import React, { useEffect, useState } from 'react'
import { FaLaptop, FaSpa, FaHome, FaShoppingBag, FaTshirt } from 'react-icons/fa'

export default function Product() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)    
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="product-container">


      <div>

        <h2>All  Products..</h2>

        <div className="category-grid">
          <div className="category-card"><FaLaptop /><p>Consumer Electronics</p></div>
          <div className="category-card"><FaSpa /><p>Health & Beauty</p></div>
          <div className="category-card"><FaHome /><p>Home & Garden</p></div>
          <div className="category-card"><FaShoppingBag /><p>Accessories</p></div>
          <div className="category-card"><FaTshirt /><p>Clothing</p></div>
        </div>
      </div>

      <div>

        <h2>Products</h2>
        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">

              <div className="img-box">
                <img src={item.image} alt={item.name} />
              </div>

              <p className="product-name">
                {item.name.substring(0, 20)}
              </p>

              <p className="product-price">₹ {item.price}</p>

              <button className="btn">Add to Cart</button>

            </div>
          ))}
        </div>

      </div>
      <div className="promo-section">
        <h2>✨ Discover More Amazing Products ✨</h2>
        <p>
          Upgrade your lifestyle with our premium collection.
          Best quality products at unbeatable prices.
        </p>

        <button className="shop-btn">Shop Now</button>

        <p className="trust-text">
          ✔ 100% Genuine Products | ✔ Fast Delivery | ✔ Easy Returns
        </p>
      </div>
    </div>
  )
}