import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors";
import Donate from "../pages/Donate";
import Cardiologist from "../pages/doctorsDetails/Cardiologist";

import { Routes, Route } from "react-router-dom";

const Layout = () => {
    return <>
    <Header/>
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Register" element={<Signup />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/doctors/Cardiologist" element={<Cardiologist />} />
        </Routes>
    </main>
    <Footer />
    </>
};

export default Layout;
