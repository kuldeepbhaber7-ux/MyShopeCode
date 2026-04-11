import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-container">
 
            <div className="discount-box">
                <h2>Get discounts instantly</h2>
                <p>
                    Login to explore amazing deals on clothes, electronics and jewelry.
                    Get exciting offers and enjoy up to <b>10% discount</b> on your first order.
                </p>

                <div className="input-box">
                    <input type="email" placeholder="Enter your email" />
                    <button>Get Started</button>
                </div>
            </div>
 
            <div className="footer-content">

                <div>
                    <h4>Subscribe</h4>
                    <p>
                        Get updates on latest fashion, gadgets and jewelry deals.
                    </p>
                    <button className="subscribe-btn">Subscribe</button>
                </div>

                <div>
                    <h4>Categories</h4>
                    <p>Clothes</p>
                    <p>Electronics</p>
                    <p>Jewelry</p>
                </div>

                <div>
                    <h4>Support</h4>
                    <p>How it works</p>
                    <p>FAQs</p>
                    <p>Contact</p>
                </div>

                <div>
                    <h4>Explore</h4>
                    <p>Offers</p>
                    <p>Blog</p>
                    <p>New Arrivals</p>
                </div>

            </div>  
            <div className="footer-bottom">
                <p>© 2026 YourStore</p>
                <div className="icons">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />

                </div>
            </div>

        </div>
    );
};

export default Footer;