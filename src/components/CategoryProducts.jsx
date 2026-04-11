import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CategoryProducts() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);

  const [products, setProducts] = useState([]);

  const data = {
    electronics: [
      { id: 1, name: "Laptop Pro", price: 50000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
      { id: 2, name: "Smartphone X", price: 20000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
      { id: 3, name: "Headphones", price: 3000, image: "https://images.unsplash.com/photo-1518444028785-8f0f3f4f5d9f" },
      { id: 4, name: "Smartwatch", price: 7000, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
      { id: 5, name: "Tablet", price: 25000, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764" },
      { id: 6, name: "Gaming Console", price: 30000, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db" },
      { id: 7, name: "Keyboard", price: 1500, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4" },
      { id: 8, name: "Mouse", price: 800, image: "https://images.unsplash.com/photo-1527814050087-3793815479db" },
      { id: 9, name: "Monitor", price: 12000, image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc" },
      { id: 10, name: "Speaker", price: 3500, image: "https://images.unsplash.com/photo-1585386959984-a41552231693" }
    ],

    fashion: [
      { id: 11, name: "Men T-Shirt", price: 500, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
      { id: 12, name: "Women Dress", price: 1200, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c" },
      { id: 13, name: "Jeans", price: 1500, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
      { id: 14, name: "Jacket", price: 2500, image: "https://images.unsplash.com/photo-1520975916090-3105956dac38" },
      { id: 15, name: "Hoodie", price: 2000, image: "https://tse3.mm.bing.net/th/id/OIP.RuHj5zoO4usxxVkj5WxoxgHaEO?pid=Api&P=0&h=180" },
      { id: 16, name: "Shirt", price: 1000, image: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
      { id: 17, name: "Skirt", price: 1100, image: "https://tse3.mm.bing.net/th/id/OIP.L5sSoia1RXPjgLoCDIs9cwHaKk?pid=Api&P=0&h=180" }
    ],

    beauty: [
      { id: 18, name: "Perfume", price: 1500, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f" },
      { id: 19, name: "Lipstick", price: 800, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa" },
      { id: 20, name: "Face Cream", price: 600, image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883" },
      { id: 21, name: "Makeup Kit", price: 2000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348" },
      { id: 22, name: "Face Wash", price: 300, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be" }
    ],

    "home decor": [
      { id: 23, name: "Wall Art", price: 1200, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
      { id: 24, name: "Lamp", price: 900, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c" },
      { id: 25, name: "Sofa", price: 15000, image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9" },
      { id: 26, name: "Curtains", price: 2000, image: "https://tse1.mm.bing.net/th/id/OIP.xsm9dA2maPcYZq9-Tf8ESgHaEJ?pid=Api&P=0&h=180" },
      { id: 27, name: "Carpet", price: 3000, image: "https://tse3.mm.bing.net/th/id/OIP.9HpqbbvKReQpWXeQ65PXjAHaE8?pid=Api&P=0&h=180" }
    ],

    books: [
      { id: 28, name: "Novel", price: 400, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
      { id: 29, name: "Self Help", price: 500, image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090" },
      { id: 30, name: "Science Book", price: 600, image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc" }
    ],

    sports: [
      { id: 31, name: "Football", price: 800, image: "https://images.unsplash.com/photo-1517649763962-0c623066013b" },
      { id: 32, name: "Cricket Bat", price: 1500, image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d" },
      { id: 33, name: "Tennis Racket", price: 2000, image: "https://images.unsplash.com/photo-1534158914592-062992fbe900" }
    ],

    food: [
      { id: 34, name: "Pizza", price: 300, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
      { id: 35, name: "Burger", price: 200, image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
      { id: 36, name: "Pasta", price: 250, image: "https://tse4.mm.bing.net/th/id/OIP.PXD8X3s6IIrdR-I0u7sacwHaEK?pid=Api&P=0&h=180" }
    ],

    outfits: [
      { id: 37, name: "Casual Outfit", price: 2000, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b" },
      { id: 38, name: "Formal Outfit", price: 3500, image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0" },
      { id: 39, name: "Party Wear", price: 4000, image: "https://tse4.mm.bing.net/th/id/OIP.1V3nOcgrCTrfLL5rPWLOagHaEJ?pid=Api&P=0&h=180" }
    ]
  };

  useEffect(() => {
    if (decodedId && data[decodedId]) {
      setProducts(data[decodedId]);
    } else {
      setProducts([]);
    }
  }, [decodedId]);

  return (
    <div className="productPage">

      <h2 className="title">
        {decodedId.toUpperCase()} PRODUCTS
      </h2>

      {products.length > 0 ? (
        <div className="productGrid">
          {products.map((p) => (
            <div key={p.id} className="productCard">

              <div className="productImg">
                <img src={p.image} alt={p.name} />
              </div>

              <div className="productContent">
                <h3>{p.name}</h3>
                <p className="price">₹ {p.price}</p>
                <button>Add to Cart 🛒</button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="notFound">
          <h2>No Products Found </h2>
        </div>
      )}

    </div>
  );
}