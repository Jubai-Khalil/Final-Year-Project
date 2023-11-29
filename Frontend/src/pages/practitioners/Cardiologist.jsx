import React, { useState } from "react";
import docImg1 from "../../assets/images/docImg1.png";
import "../../styling/DoctorsDetails.css";
import { BsFillStarFill } from "react-icons/bs";
import CardiologyAbout from "../../components/Docotors/AboutPractitioner";
import CardiologyFeedback from "../doctorsDetails/CardiologyFeedback";
import SidePanel from "../../components/Docotors/SidePanel.jsx";
import doctorsData from "../../assets/data/doctorsData.js";

const Cardiologist = () => {
    // useState hook to manage the state of the current tab (About or Feedback)
    const [tab, setTab] = useState("About");

    // Find the cardiologist from the doctors data 
    const cardiologist = doctorsData.find(doctor => doctor.specialty === "Cardiologist");

    // check if cardiologist exists else return error message
    if (!cardiologist) {
        return <div>Cardiologist doesn't exist</div>;
    }

    return (
        <section>
            <div className="docsSection">
                <div className="docsContainer">
                    {/* Doctor Image Container */}
                    <div className="docsInnerContainer">
                        <div className="docsImgContainer">
                            <img src={cardiologist.imageUrl || docImg1} alt="" className="docsImg"/>
                        </div>
                    </div>
                    {/* Doctor Information Container */}
                    <div className="docsInnerContainer">
                        <div className="docsContents">
                            <h2 className="docsHeaderContents">
                                {cardiologist.name}
                            </h2>
                            <div>
                                <span className="docsTextType">
                                    {cardiologist.specialty}
                                </span>
                                <p>
                                    <BsFillStarFill className="star"/> {cardiologist.rating}
                                </p>
                                <li className="docsListWrapper">
                                    <p className="docsTotalRatings">
                                        ({cardiologist.totalRatings})
                                    </p>
                                </li>
                            </div>
                            <h2 className="consultationHeader">
                                Consultation List
                            </h2>
                            {/* render the doctor's introduction and services */}
                            {cardiologist.consultationOptions && cardiologist.consultationOptions.map((service, index) => (
                                <div key={index} className="docsText">
                                    {service}
                                    <p className="consultationPrice">{cardiologist.consultationPrices[index]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Side Panel */}
                    <div className="docsInnerContainer">
                        <div className="docsImgContainer">
                            <SidePanel doctorId={cardiologist.id} />
                        </div>
                    </div>
                </div>
                {/* Tab Navigation */}
                <div className="docsInfoContainer">
                    <button 
                        className={`aboutButton ${tab === "About" ? "activeTab" : ""}`} 
                        onClick={() => setTab("About")}
                    >
                        About
                    </button>
                    <button 
                        className={`aboutButton ${tab === "Feedback" ? "activeTab" : ""}`} 
                        onClick={() => setTab("Feedback")}
                    >
                        Feedback
                    </button>
                </div>
                {/* Conditional Rendering for About and Feedback Tab */}
                <div className="tab">
                    {tab === "About" && <CardiologyAbout doctorId={cardiologist.id}/>}
                    {tab === "Feedback" && <CardiologyFeedback/>}
                </div>
            </div>
        </section>
    ); 
};

export default Cardiologist;
