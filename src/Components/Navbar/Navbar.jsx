import { React, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <nav id='navbar'>
            <div id="nav-logo">
                <img src={logo} alt="A big red shopping bag next to a smaller yellow bag" />
                <p>SHOPPER</p>
            </div>
            <ul id="nav-menu">
                <li
                    className="nav-links"
                    onClick={() => { setMenu('shop') }}
                >
                    <Link to="/" className='router-nav-links'>Shop</Link>{menu === "shop" ? <hr /> : <></>}
                </li>
                <li 
                    className="nav-links" 
                    onClick={() => { setMenu('mens') }}
                >
                    <Link to="/mens" className='router-nav-links'>Mens</Link>{menu === "mens" ? <hr /> : <></>}
                </li>
                <li 
                    className="nav-links" 
                    onClick={() => { setMenu('womens') }}
                >
                    <Link to="/womens" className='router-nav-links'>Womens</Link>{menu === "womens" ? <hr /> : <></>}
                </li>
                <li 
                    className="nav-links" 
                    onClick={() => { setMenu('kids') }}
                >
                    <Link to="/kids" className='router-nav-links'>Kids</Link>{menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div id="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="A shopping cart" /></Link>
                <div id="nav-cart-count">0</div>
            </div>
        </nav>
    )
}
