import React, { useState } from 'react';
import logo from '../../images/car-logo.png';
import { Link } from 'react-router-dom';
import '../UserDash/nave.css'
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const navigate = new useNavigate();

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const SignUpClick = () => {
        navigate('/login')
    }

    return (
        <header>
            <nav className={nav ? "nav active" : "nav"} >
                <Link to='/' className='logo' smooth={true} duration={1700} >
                    <img src={logo} alt="" />
                </Link>
                <input type="checkbox" id='menu-btn' className='menu-btn' />
                <label className='menu-icon' for='menu-btn'> <span className='nav-icon'></span></label>
                <ul className='menu'>
                    <li><Link to='/' smooth={true} duration={1700} >HOME</Link></li>
                </ul>
                
                <div className="buttonss">
                <button className="panier-btn">
                    Panier <i className="fas fa-shopping-cart"></i>
                </button>

                <button onClick={SignUpClick} className="sign-up-btn" >Sign Up <i className="fas fa-user-circle"></i></button>
                </div>




            </nav>
        </header>
    )
}
export default Navbar;  