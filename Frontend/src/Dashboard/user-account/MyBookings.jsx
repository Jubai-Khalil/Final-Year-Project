import React, { useEffect, useState, useContext } from "react";
import { authContext } from "../../context/AuthContext"; 
import { BASE_URL } from "../../config"; 
import { toast } from 'react-toastify';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('token'); 

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(`${BASE_URL}/users/appointments/my-appointments`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message || "Failed to fetch bookings.");
                }
                setBookings(data.data || []);
            } catch (error) {
                toast.error(error.message || "An error occurred while fetching bookings.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchBookings();
    }, [token]); // Dependency array ensures fetchBookings runs only once or when token changes

    return (
        <div>
            {isLoading ? (
                <div>Loading your bookings...</div>
            ) : bookings.length > 0 ? (
                bookings.map((booking, index) => (
                    <div key={index}>
                        {/* Display booking details here */}
                        Doctor: {booking.doctor.name} - Date: {booking.date}
                    </div>
                ))
            ) : (
                <div>You have no bookings yet!</div>
            )}
        </div>
    );
};

export default MyBookings;
