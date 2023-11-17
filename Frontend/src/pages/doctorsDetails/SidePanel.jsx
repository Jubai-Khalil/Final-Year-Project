import React, {useState} from "react";
import "../../styling/SidePanel.css";

const SidePanel = () => {

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const availableDates = ["Monday", "Wednesday", "Friday"]; 
    const availableTimes = ["9:30 AM", "14:00 PM", "16:00 PM"];
    const consultationOptions = [
        'General Consultation', 
        'Electrocardiogram', 
        'Echocardiogram', 
        'General Consultation & Electrocardiogram'
    ];

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
                {/* Dropdown for selecting the date */}
                    <div className="optionSelector">
                        <label htmlFor="optionSelect">Select option:</label>
                        <select
                            id="optionSelect"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="selector"
                        >
                            <option value="">Select Consultation</option>
                            {consultationOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                    <div className="dateSelector">
                        <label htmlFor="dateSelect">Choose a date:</label>
                        <select
                            id="dateSelect"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="selector"
                        >
                            <option value="">Select Date</option>
                            {availableDates.map((date, index) => (
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
                            {availableTimes.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="appmntBtnContainer">
                <button className="bookAppointmentBtn">Book Appointment</button>
            </div>
        </div>
    );
};

export default SidePanel