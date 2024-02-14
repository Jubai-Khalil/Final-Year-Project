import React, { useState } from "react";
import "../../styling/Header.css" 
import logo from "../../assets/images/logo.png"
import userIcon from "../../assets/images/userIcon.png";
import { NavLink, Link } from "react-router-dom";
import {BiMenu} from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useContext, useEffect, useRef } from "react";

// Array of objects representing navigation links
const navLinks = [
    {
        path: '/Home',
        display:'Home'
    },
    {
        path: '/About',
        display:'About'
    },
    {
        path: '/Doctors',
        display:'Find a Doctor'
    },
    {
        path: '/Contact',
        display:'Contact'
    },
];


const Header = () => {
    // Function to map over NavLinks and render them as NavLink components
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const {user, role, token} = useContext(authContext)
    
    const renderNavLinks = () => {
        return navLinks.map((link, index) => (
            <li key={index}>
                <NavLink className="headerlinkWrapper"
                    to={link.path}
                    activeClassName="active-link"
                    exact
                    >
                    {link.display}
            </NavLink>
            </li>
        ));
    };

    const [hovering, setHovering] = useState(false);

    return (
        <header className="headerSection">
            <div className="headerContainer">
                <div className="header">
                    {/* ============ logo ============ */}
                    <div>
                        <img src={logo} alt="" className="headerLogo"></img>
                    </div>
                    {/* ============ menu ============ */}
                    <div>
                        <ul className="menuList">{renderNavLinks()}</ul>
                    </div>
                    {/* ============ dashboard icon ============ */}
                    <div className="userIconContainer">
                        {
                        token && user ? (
                            <div className="userDetailsContainer"> 
                                <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`} className="loginlinkWrapper">
                                    <h2 
                                        className="userName"
                                        onMouseEnter={() => setHovering(true)}
                                        onMouseLeave={() => setHovering(false)}
                                        style={hovering ? { color: '#08CAAD' } : {}}
                                    >
                                        {hovering ? 'View Account' : `${user?.firstname} ${user?.surname}`}
                                    </h2>
                                </Link>
                            </div>
                            ) : 
                            <Link to="/login" className="loginlinkWrapper">
                            <button className="loginButton">Login</button>
                            </Link>
                        }
                        <span hidden>
                            <BiMenu className="hamburgerMenu"/>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    ); 
};

export default Header;
