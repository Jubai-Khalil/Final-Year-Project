import React, { useState } from "react";
import docImg1 from "../../assets/images/docImg1.png";
import "../../styling/DoctorsDetails.css";
import { BsFillStarFill } from "react-icons/bs";
import AboutPractitioner from "../../components/Docotors/AboutPractitioner";
import PractitionerFeedback from "../../components/Docotors/PractitionerFeedback";
import SidePanel from "../../components/Docotors/SidePanel.jsx";
import doctorsData from "../../assets/data/doctorsData.js";

const Orthopedist = () => {
    // useState hook to manage the state of the current tab (About or Feedback)
    const [tab, setTab] = useState("About");

    // Find the orthopedist from the doctors data 
    const orthopedist = doctorsData.find(doctor => doctor.specialty === "Orthopedist");

    // check if orthopedist exists else return error message
    if (!orthopedist) {
        return <div>Orthopedist doesn't exist</div>;
    }

    return (
        <section>
            <div className="docsSection">
                <div className="docsContainer">
                    {/* Doctor Image Container */}
                    <div className="docsInnerContainer">
                        <div className="docsImgContainer">
                            <img src={orthopedist.imageUrl || docImg1} alt="" className="docsImg"/>
                        </div>
                    </div>
                    {/* Doctor Information Container */}
                    <div className="docsInnerContainer">
                        <div className="docsContents">
                            <h2 className="docsHeaderContents">
                                {orthopedist.name}
                            </h2>
                            <div>
                                <span className="docsTextType">
                                    {orthopedist.specialty}
                                </span>
                                <p>
                                    <BsFillStarFill className="star"/> {orthopedist.rating}
                                </p>
                                <li className="docsListWrapper">
                                    <p className="docsTotalRatings">
                                        ({orthopedist.totalRatings})
                                    </p>
                                </li>
                            </div>
                            <h2 className="consultationHeader">
                                Consultation List
                            </h2>
                            {/* render the doctor's introduction and services */}
                            {orthopedist.consultationOptions && orthopedist.consultationOptions.map((service, index) => (
                                <div key={index} className="docsText">
                                    {service}
                                    <p className="consultationPrice">{orthopedist.consultationPrices[index]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Side Panel */}
                    <div className="docsInnerContainer">
                        <div className="docsImgContainer">
                            <SidePanel doctorId={orthopedist.id} />
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
                    {tab === "About" && <AboutPractitioner doctorId={orthopedist.id}/>}
                    {tab === "Feedback" && <PractitionerFeedback doctorId={orthopedist.id}/>}
                </div>
            </div>
        </section>
    ); 
};

export default Orthopedist;
