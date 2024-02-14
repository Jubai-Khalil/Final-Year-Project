import React, { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import userImg from "../../assets/images/docImg1.png";
import "../../styling/MyAccount.css";


const Dashboard = () => {
    
    const { user, dispatch } = useContext(authContext);
    const [tab, setTab] = useState('bookings');

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <div className="accountContainer">
            <div className="profileGridContainer">
                <div className="paddingContainer">
                    <div className="centerContainer">
                        <figure className="profileImgContainer">
                            <img
                                src={userImg}
                                alt="User"
                                className="profileImg"
                            />
                        </figure>
                    </div>
                    <div className="profileTxtContainer">
                        {/* Dynamically loaded from context or local storage */}
                        <h3 className="profileName">{user?.firstname} {user?.surname}</h3>
                        <p className="profileEmail">{user?.email}</p>
                        <p className="profileEmail">
                            Blood Type:
                            <span className="bloodType">{user?.bloodType || "Not specified"}</span>
                        </p>
                    </div>
                    <div className="profileBtnContainer">
                        <button onClick={handleLogout} className="logoutBtn">Logout</button>
                        <button className="deleteAccBtn">Delete Account</button>
                    </div>
                </div>
                <div className="paddingContainerMiddle">
                    <div className="profile-button-container">
                        <button onClick={() => setTab('bookings')}
                            className={`button-base ${tab === 'bookings' ? 'bookings-button-active' : ''}`}>
                            Appointments
                        </button>
                        <button onClick={() => setTab('settings')}
                            className={`button-base ${tab === 'settings' ? 'settings-button-active' : ''}`}>
                            Profile Settings
                        </button>
                    </div>
                    {/*
                    {tab === "bookings" && <MyBookings />}
                    {tab === "settings" && <Profile />}
                    */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard



