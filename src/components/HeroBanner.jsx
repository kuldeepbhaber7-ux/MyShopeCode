import React from 'react';
import Slider from "react-slick";
 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    {
        src: "/src/Images/1000_F_248859694_i9NI2gxaLtoE0Ude9XkMNvB9MZhuq9EP.jpg",
        title: "Big Sale Offer",
        subtitle: "Up to 50% Off",
        button: "Shop Now"
    },
    {
        src: "/src/Images/1000_F_394133358_Cz7XqXa9XduW7HrrTn6ew1Z9nef8tUCw.jpg",
        title: "New Collection",
        subtitle: "Latest Trends 2025",
        button: "Explore"
    },
    {
        src: "/src/Images/5a6561119db533beb718347ff9c8b81d.png",
        title: "Exclusive Deals",
        subtitle: "Limited Time Only",
        button: "Learn More"
    },
    {
        src: "/src/Images/images.jpeg",
        title: "Best Sellers",
        subtitle: "Top Rated Products",
        button: "View Now"
    },
    {
        src: "/src/Images/download.jpeg",
        title: "Hurry Up!",
        subtitle: "Stock Ending Soon",
        button: "Buy Now"
    },
];

export default function HeroBanner() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="hero-container">
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div key={index} className="slide">
                        <img src={item.src} alt={item.title} className="hero-image" />

                        <div className="overlay">
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                            <button>{item.button}</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
} 