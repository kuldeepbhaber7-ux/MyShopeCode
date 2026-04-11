import React from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import { Routes, Route } from 'react-router'
import Home from './components/Home';
import Product from './components/Product';
import Categories from './components/Categories';
import About from './components/About';
import Additems from './components/Additems';
import CategoryProducts from './components/CategoryProducts';

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<CategoryProducts />} />

        <Route path="/about" element={<About />} />
        <Route path="/additems" element={<Additems />} />
      </Routes>


    </div>
  )
}