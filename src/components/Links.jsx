 import React from 'react'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { Link } from 'react-router' 
 export default function Links() {
   return (
     <div>
    <Link className='Link' to="/">Home</Link>
    <Link className='Link' to="/product">Product</Link>
    <Link className='Link' to="/categories/">Categories</Link>
    <Link className='Link' to="/about">About</Link>
    <Link className='Link' to="/additems">🛒</Link>
     
     </div>
   )
 }
 