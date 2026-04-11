import React from "react";

export default function About() {
  return (
    <div className="aboutContainer">

      <div className="aboutBox">

        <h1>🛍️ E-Commerce Web Application</h1>

        <p className="intro">
          This project is a fully responsive <b>E-Commerce Web Application</b> developed as part of a Web Development Internship.
          It focuses on building a modern shopping experience using React.js with clean UI design, reusable components, and smooth navigation.
        </p>

        <h2>✨ Project Features</h2>

        <ul>
          <li>Responsive Home Page with hero section & categories</li>
          <li>Dynamic Product Listing Page with modern card UI</li>
          <li>Category-based product filtering system</li>
          <li>Product Detail Page with structured layout</li>
          <li>Add to Cart functionality using LocalStorage</li>
          <li>Cart Page with quantity management & total calculation</li>
          <li>Search and filter system for better user experience</li>
        </ul>

        <h2>🛠 Tech Stack</h2>

        <ul>
          <li>React.js (Frontend Framework)</li>
          <li>React Router DOM (Navigation)</li>
          <li>JavaScript (Logic & Functionality)</li>
          <li>CSS (Modern Responsive UI Design)</li>
          </ul>

        <h2>🎯 Internship Objective</h2>

        <p className="intro">
          The main objective of this project is to simulate a real-world e-commerce platform.
          It demonstrates practical implementation of frontend development skills such as UI design,
          component reusability, routing, state management, and data handling.
        </p>

        <div className="highlightBox">
          🚀 Built for learning modern frontend development and real-world project experience
        </div>

      </div>
    </div>
  );
}