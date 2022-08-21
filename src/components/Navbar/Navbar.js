import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route,  Routes} from "react-router-dom"
import About from '../About';
import Contact from '../Contact';
import Home from '../Home';
import './Navbar.css'
const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)
    return (
        <>
        <Router>
        <nav className='navbar'>
            <h3 className='logo'>Logo</h3>
                <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
                      <Link to="/" className='home'>
                            <li>Home</li>
                      </Link>
                      <Link to="/about" className='about'>
                            <li >About</li>
                      </Link>
                      <Link to="/contact" className='contact'>
                            <li>Contact</li>
                      </Link>
                </ul>
                <button onClick={()=>setIsMobile(!isMobile)} className='mobile-menu-icon'>
                    {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>  }
                </button>
        </nav>

      
            <Routes>
                <Route path='/' element={<Home/>}>
                </Route>
                <Route path='/about' element={<About/>}>
                </Route>
                <Route path='/contact' element={<Contact/>}>
                </Route>
            </Routes>
    
        </Router>
        </>
       
    );
}

export default Navbar;
