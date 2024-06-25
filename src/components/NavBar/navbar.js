import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
               <Link className='desktopMenuListItem'>Home</Link>
               <Link className='desktopMenuListItem'>Services</Link>
               <Link className='desktopMenuListItem'>About</Link>
               <Link className='desktopMenuListItem'>Feedback</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contact} alt='' className='desktopMenuImg' />Contact Me</button>
        </nav>
    )
}

export default Navbar