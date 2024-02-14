import React, { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import "../../styling/DoctorFeedback.css";
import avatarIcon2 from "../../assets/images/avatarIcon2.png";
import FeedbackForm from "./FeedbackForm";
import { BsFillStarFill } from "react-icons/bs";
import doctorsData from "../../assets/data/doctorsData.js"; 

const PractitionerFeedback = ({ doctorId }) => {

    // State hook to manage the visibility of the feedback form
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);

    // Find the clinician from the doctors data
    const clinician = doctorsData.find(doctor => doctor.id === doctorId);

    // Check if clinician is found, otherwise display an error message
    if (!clinician) {
        return <div>Error: Clinician not found.</div>;
    }

    return (
        <div>
            <div key={clinician.id}>
                <h3 className="feedbackHeader">
                    All reviews ({clinician.totalRatings})
                </h3>
                <div className="feedbackContainer">
                    <div className="feedbackImgContainer">
                        <figure>
                            <img src={avatarIcon2} alt="" className="feedbackImg" />
                        </figure>
                        <div>
                            <h5 className="feedbackName">
                                Ali Ahmed
                            </h5>
                            <p className="feedbackDate">
                                {formatDate()}
                            </p>
                            <p className="docsFeedbackText">
                                Good services, highly recommended 👍
                            </p>
                        </div>
                    </div>
                    <div className="feedbackStarContainer">
                        {[...Array(5).keys()].map((_, index) => <BsFillStarFill key={index} className="star" />)}
                    </div>
                </div>
            </div>
            {!showFeedbackForm && (
                <div className="feedbackBtnContainer">
                    {/* rendering for feedback button */}
                    <button className="feedbackFormButton" onClick={() => setShowFeedbackForm(true)}>
                        Give Feedback
                    </button>
                </div>
            )}
            {/* rendering for feedback form */}
            {showFeedbackForm && <FeedbackForm doctorId={clinician.id} />}
        </div>
    );
};

export default PractitionerFeedback;
