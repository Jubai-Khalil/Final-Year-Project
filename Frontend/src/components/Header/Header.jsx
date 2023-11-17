import React from "react";
import "../../styling/Header.css" 
import logo from "../../assets/images/logo.png"
import userIcon from "../../assets/images/userIcon.png";
import { NavLink, Link } from "react-router-dom";
import {BiMenu} from "react-icons/bi";

const navLinks = [
    {
        path: '/Home',
        display:'Home'
    },
    {
        path: '/Services',
        display:'Services'
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
    
    const renderNavLinks = () => {
        return navLinks.map((link, index) => (
            <li key={index}>
                <NavLink
                    to={link.path}
                    activeClassName="active-link"
                    exact
                    >
                    {link.display}
            </NavLink>
            </li>
        ));
    };


    return (
        <header className="mainHeaderContainer">
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
                        <div hidden>
                            <Link to="/">
                                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                    <img src={userIcon} className="userIcon" alt=""/>
                                </figure>
                            </Link>                   
                        </div>
                    </div>
                    {/* ============ login ============ */}
                    <Link to="/login">
                        <button className="loginButton">Login</button>
                    </Link>
                    <span hidden>
                        <BiMenu className="hamburgerMenu"/>
                    </span>
                </div>
            </div>
        </header>
    ); 
};

export default Header;
