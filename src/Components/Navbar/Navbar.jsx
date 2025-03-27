import React  from 'react'
import {Link} from 'react-router-dom'
import style from './Navbar.module.css'


function Navbar(){

    return(
        <nav className={style.navbar}>
            
            {/* LOGO SECTION */}
            <div className={style.logo}>
                <h3><span>Dream</span>Time</h3>
            </div>
             
            {/* LINKS SECTION */}
            <div className={style.link_section}>
                <ul className={style.links}>
                    <Link className={style.link} to='home'><li>Home</li></Link>
                    <Link className={style.link} to="login">Login</Link>
                    <Link className={style.link} to="register">Sign up</Link>
                    <Link className={style.link} to="brand"><li>Brands</li></Link>
                    <Link className={style.link} to='men'><li>Men</li></Link>
                    <Link className={style.link} to="women"><li>Women</li></Link>
                    <Link className={style.link} to="kids"><li>Kids</li></Link>
                    <Link className={style.link} to="about"><li>About us</li></Link>
                    <Link className={style.link} to="contact"><li>Contact us</li></Link>
                </ul>
            </div>

            {/* PROFILE AND CART SECTION */}
            <div className={style.right_btns_section}>
                <div className={style.cart_section}>
                    <Link to="cart"><button className={style.cart}><i className="fa-solid fa-cart-shopping"></i></button></Link>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar 