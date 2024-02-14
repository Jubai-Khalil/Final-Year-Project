import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
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
import Neurologist from "../pages/practitioners/Neurologist";
import Oncologist from "../pages/practitioners/Oncologist";
import Obstetrician from "../pages/practitioners/Obstetrician";
import Psychiatrist from "../pages/practitioners/Psychiatrist";
import GeneralPractitioner from "../pages/practitioners/GeneralPractitioner";
import Dermatologist from "../pages/practitioners/Dermatologist";
import Orthopedist from "../pages/practitioners/Orthopedist";
import PlasticSurgeon from "../pages/practitioners/PlasticSurgeon";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";

// wrap authentication around routes that require user roles to access.
const ProtectedRoute = ({ children, allowedRoles }) => {
    const { token, role } = useContext(authContext);
    const isAllowed = allowedRoles.includes(role);
    return token && isAllowed ? children : <Navigate to="/login" replace />;
};

// configured routes as an array of objects
const routes = [
    { path: "/", component: Home, protected: false},
    { path: "/Home", component: Home, protected: false },
    { path: "/about", component: About, protected: false },
    { path: "/login", component: Login, protected: false },
    { path: "/contact", component: Contact, protected: false },
    { path: "/Register", component: Signup, protected: false },
    { path: "/doctors", component: Doctors, protected: false },
    { path: "/donate", component: Donate, protected: false },
    { path: "/doctors/Cardiologist", component: Cardiologist, protected: false },
    { path: "/doctors/Neurologist", component: Neurologist, protected: false },
    { path: "/doctors/Oncologist", component: Oncologist, protected: false },
    { path: "/doctors/Obstetrician", component: Obstetrician, protected: false },
    { path: "/doctors/Psychiatrist", component: Psychiatrist, protected: false },
    { path: "/doctors/GP", component: GeneralPractitioner, protected: false },
    { path: "/doctors/Dermatologist", component: Dermatologist, protected: false },
    { path: "/doctors/Orthopedist", component: Orthopedist, protected: false },
    { path: "/doctors/PlasticSurgeon", component: PlasticSurgeon, protected: false },
    { path: "/users/profile/me", component: MyAccount, protected: true, allowedRoles: ['patient'] },
    { path: "/doctors/profile/me", component: Dashboard, protected: true, allowedRoles: ['doctor'] },
];

const Layout = () => {
    const { role } = useContext(authContext);

    return (
        <>
            <Header />
            <main>
                <Routes>
                    {routes.map((route) => {
                        const RouteComponent = route.component;
                        // Check if the route is protected and user has the right role
                        const routeElement = route.protected ? (
                            <Route 
                                key={route.path} 
                                path={route.path} 
                                element={
                                    <ProtectedRoute allowedRoles={route.allowedRoles}>
                                        <RouteComponent />
                                    </ProtectedRoute>
                                } 
                            />
                        ) : (
                            <Route 
                                key={route.path} 
                                path={route.path} 
                                element={<RouteComponent />} 
                            />
                        );

                        return routeElement;
                    })}
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
