import React, { useState } from "react";
import "../../styling/SidePanel.css";
import doctorsData from "../../assets/data/doctorsData.js"; 

//implement function where once a date and time have been selected and confirmed, it comes off the options available to book.

// SidePanel component accepts a doctorId as a prop
const SidePanel = ({ doctorId }) => {
    // State hooks for managing selections before booking
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // check if doctor exixsts using doctorID
    const doctor = doctorsData.find(doc => doc.id === doctorId);
    if (!doctor) return <div>Doctor not found</div>; 

    const handleBooking = () => {
        // Reset error message
        setErrorMessage('');

        // check if all options are selected
        if (!selectedOption || !selectedDate || !selectedTime) {
            setErrorMessage("Please select all options to book an appointment.");
            return;
        }

        // Logic for booking the appointment
        // This will be sent to backend later on
        console.log(`Booking appointment with ${doctor.name} for ${selectedOption} on ${selectedDate} at ${selectedTime}.`);

        // Reset selections
        setSelectedDate('');
        setSelectedTime('');
        setSelectedOption('');
    };

    return (
        <div className="panelBox">
            <div className="boxContainer">
                <span className="boxPrice">
                    See Consultation List For Prices
                </span>
            </div>
            <div className="innerPanelContainer">
                <p className="appmntHeader">
                    Select From Available Options Below:
                </p>
                <div className="dateAndTimeSelectors">
                    {/* Dropdown for selecting the consultation option */}
                    <div className="optionSelector">
                        <label htmlFor="optionSelect">Select option:</label>
                        <select
                            id="optionSelect"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="selector"
                        >
                            <option value="">Select Consultation</option>
                            {doctor.consultationOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                    {/* Dropdown for selecting the date */}
                    <div className="dateSelector">
                        <label htmlFor="dateSelect">Choose a date:</label>
                        <select
                            id="dateSelect"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="selector"
                        >
                            <option value="">Select Date</option>
                            {doctor.availableDates.map((date, index) => (
                                <option key={index} value={date}>{date}</option>
                            ))}
                        </select>
                    </div>
                    {/* Dropdown for selecting the time */}
                    <div className="timeSelector">
                        <label htmlFor="timeSelect">Choose a time:</label>
                        <select
                            id="timeSelect"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="selector"
                        >
                            <option value="">Select Time</option>
                            {doctor.availableTimes.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>
                 {/* Display error message if any */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
            <div className="appmntBtnContainer">
                <button onClick={handleBooking} className="bookAppointmentBtn">Book Appointment</button>
            </div>
        </div>
    );
};

export default SidePanel;
