import { React, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"

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
                    Shop{menu === "shop" ? <hr /> : <></>}
                </li>
                <li 
                    className="nav-links" 
                    onClick={() => { setMenu('mens') }}
                >
                    Men{menu === "mens" ? <hr /> : <></>}
                </li>
                <li 
                    className="nav-links" 
                    onClick={() => { setMenu('womens') }}
                >
                    Women{menu === "womens" ? <hr /> : <></>}
                </li>
                <li 
                    className="nav-links" 
                    onClick={() => { setMenu('kids') }}
                >
                    Kids{menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div id="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="A shopping cart" />
                <div id="nav-cart-count">0</div>
            </div>
        </nav>
    )
}
