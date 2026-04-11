import React, { useState } from 'react'
import Home from './Home';
import Product from './Product';
import Categories from './Categories';
import About from './About';
import Additems from './Additems';
import Links from './Links';
import CategoryProducts from './CategoryProducts';
import { Routes, Route } from 'react-router';
import { FaBars } from 'react-icons/fa';



export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="Navbar">
                <h1>MyShop</h1>

                <div className={`nav-Link ${open ? "active" : ""}`}>
                    <Links />

                </div>

                <FaBars className='menu-icon' onClick={() => setOpen(!open)} />
            </div>


        </>
    )
} 