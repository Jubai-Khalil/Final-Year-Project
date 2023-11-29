import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors";
import Donate from "../pages/Donate";
import Cardiologist from "../pages/practitioners/Cardiologist";
//import rest of doctors individual pages
import { Routes, Route } from "react-router-dom";

// configured routes as an array of objects
const routes = [
    { path: "/", component: Home },
    { path: "/Home", component: Home },
    { path: "/about", component: About },
    { path: "/login", component: Login },
    { path: "/contact", component: Contact },
    { path: "/Register", component: Signup },
    { path: "/doctors", component: Doctors },
    { path: "/donate", component: Donate },
    { path: "/doctors/Cardiologist", component: Cardiologist },
    //{ path: "/doctors/Neurologist", component: Neurologist },
    //{ path: "/doctors/Oncologist", component: Oncologist },
    //add other path for rest of doctors
];

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    {routes.map(route => (
                        /* Mapping over each route in the routes array */
                        <Route key={route.path} path={route.path} element={React.createElement(route.component)} />
                    ))}
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
