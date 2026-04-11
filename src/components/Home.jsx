 


import React from 'react'
import HeroBanner from './HeroBanner'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const trendingProducts = [
  {
    id: 1, name: "Shirt",
    image: "https://tse4.mm.bing.net/th/id/OIP.jvproGA3tJ4NiiBOg4KjpQHaEO?pid=Api&P=0&h=180"

  },
  {
    id: 2, name: "Shoes",
    image: "https://tse3.mm.bing.net/th/id/OIP.7y336bWhbgAhvgH9DJZdywHaHj?pid=Api&P=0&h=180"

  },
  {
    id: 3, name: "Mobile",
    image: "https://tse1.mm.bing.net/th/id/OIP.i5YURxJyZ-lmojAbDbuZOwHaHa?pid=Api&P=0&h=180"

  },
]
 
const categoriesData = [
  {
    name: "electronics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnro_oisnF0LikuVmMOLFRQsCUU02xNbFQg&s"
  },
  {
    name: "jewelery",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
  },
  {
    name: "men's clothing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0smiX2QQryJf0cnCcCfo24w9vCID3b3YEtg&s"
  },
  {
    name: "women's clothing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsx9ZXzuBayC9PD_x6zUi6w-c6WObv7INcfQ&s"
  }
]
 

export default function Home() {

  return (
    <div>
      <HeroBanner />
 
      <div className="Categories">
        <h2 className="C-heading">Categories Section</h2>

        <div className="category-container">
          {categoriesData.map((cat, index) => (
            <div key={index} className="category-card-wrapper">

              <div className="category-card">
                <img src={cat.image} alt={cat.name} />

                <h3>{cat.name}</h3>

                <Link to={`/categories/${cat.name}`}>
                  View
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
 
      <div className="Trending Categories">
        <h2 className="T-heading">Trending Products</h2>

        <div className="product-containers">
          {trendingProducts.map((item) => (
            <div key={item.id} className="product-cards">
              <img src={item.image} alt="not-found" />
              <h3>{item.name}</h3>

              <Link to={`/product/${item.id}`}>
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}