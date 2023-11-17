import React, { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import "../../styling/DoctorFeedback.css";
import avatarIcon2 from "../../assets/images/avatarIcon2.png"
import FeedbackForm from "./FeedbackForm";
import { BsFillStarFill } from "react-icons/bs";


const CardiologyFeedback = () => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false)

    return (
        <div>
            <div>
                <h3 className="feedbackHeader">
                    All reviews (272)
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
                        {[...Array(5).keys()].map((_,index) => <BsFillStarFill keys={index} className="star" />)}
                    </div>
                </div>
                {!showFeedbackForm && (
                    <div className="feedbackBtnContainer">
                        <button className="feedbackFormButton" onClick={() => setShowFeedbackForm(true)}>
                            Give Feedback
                        </button>
                    </div>
                )}
                {showFeedbackForm && <FeedbackForm />}
            </div>
        </div>
    );
};

export default CardiologyFeedback