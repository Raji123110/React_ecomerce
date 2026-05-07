import React from 'react'
import {Link} from 'react-router-dom';
import { HelloContext } from './App';
function Navbar() {
  const { cart } = React.useContext(HelloContext);
  return (
    <>
    <nav id="navbar">
    
    
    <Link to="/" id="one">Home</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Product">Product</Link>
    <Link to="/Cart">Cart {cart.length}</Link>
    </nav>
    
    
    </>
  )
}

export default Navbar