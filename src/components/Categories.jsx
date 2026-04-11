import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    { name: "electronics", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60" },
    { name: "fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=60" },
    { name: "beauty", image: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=60" },
    { name: "home decor", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60" },
    { name: "books", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=60" },
    { name: "sports", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60" },
    { name: "food", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60" },
    { name: "outfits", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=60" }
  ];

  const [search, setSearch] = useState("");

  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">

      <div className="hero">
        <h1>Discover Amazing Products ✨</h1>
        <p>
          Explore trending categories like fashion, electronics, beauty & more.
          Find everything you need in one place with a modern shopping experience.
        </p>
      </div>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
 
<div className="grid">
  {filtered.length > 0 ? (
    filtered.map((cat, i) => (
      <div
        key={i}
        className="card"
        style={{ animationDelay: `${i * 0.1}s` }}
        onClick={() => navigate(`/category/${cat.name}`)}
      >
        <div className="imgBox">
          <img src={cat.image} alt={cat.name} />
        </div>

        <div className="content">
          <h3>{cat.name}</h3>

          <p className="short">
            Explore premium {cat.name} collection
          </p>

          <p className="desc">
            Discover handpicked, high-quality {cat.name} items curated just for you.
          </p>

          <button>Shop Now →</button>
        </div>
      </div>
    ))
  ) : (
    <div className="notFound">
      <h2>😕 No Category Found</h2>
      <p>Try searching something else or explore all categories.</p>
    </div>
  )}
</div>
 
{filtered.length > 0 && (
  <div className="extraSection">
    <h2>✨ Why Shop With Us?</h2>
    <p>
      We bring you the best quality products across all categories with unbeatable
      prices, fast delivery, and a seamless shopping experience. Discover trends,
      explore collections, and enjoy shopping like never before.
    </p>
  </div>
)}
 
{filtered.length === 0 && (
  <div className="emptyExtra">
    <h2>🔍 Oops! Nothing matched</h2>
    <p>
      Try different keywords or browse all categories to find what you love.
    </p>
  </div>
)}
    </div>
  );
}