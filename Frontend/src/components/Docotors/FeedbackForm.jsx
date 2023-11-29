import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import "../../styling/FeedbackForm.css";
import doctorsData from "../../assets/data/doctorsData"; 

// extend feedback form to take a users name as well as their feedback message. right now all feedback messages are annon

// useState hook to manage rating values, hover state for stars and submit text
const FeedbackForm = ({ doctorId }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitText, setSubmitText] = useState("")

    // Find the doctor with the given ID from the doctors data
    const doctor = doctorsData.find(doc => doc.id === doctorId);
    if (!doctor) {
        // Display error if no doctor is found for the given ID
        return <div>Error: Doctor not found.</div>;
    }

    const handleSubmitReview = async e=> {
        e.preventDefault()
        // i will finish this when i create the backend and connect api
        // when i create the backend i will use the doctorsId to associate the feeback to the correct doctor 
    }

    return (
        <form action="">
            <div>
                <h3 className="formHeader">
                    How would you rate the overall experience?
                </h3>
                <div>
                    {[...Array(5)].map((_, index) => {
                        const ratingValue = index + 1;
                        return (
                            <button 
                                key={ratingValue}
                                type = "button"
                                className={`starButton ${ratingValue <= (hover || rating) ? 'color-yellow' : 'color-grey'}`} 
                                onClick={() => setRating(ratingValue)}
                                onMouseEnter={() => setHover(ratingValue)} // Set hover state on mouse enter
                                onMouseLeave={() => setHover(0)} // Reset hover state on mouse leave
                                onDoubleClick={()=> {setHover(0); setRating(0)}} // Reset rating on double click
                                style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <BsFillStarFill 
                                    className={`feedbackStar ${ratingValue <= (hover || rating) ? 'color-yellow' : 'color-grey'}`}
                                    size={20}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
            <div>
                <h3 className="feedbackBoxHeader">
                    Share your feedback or suggestions?
                </h3>
                <textarea className="messageBox" rows="5" placeholder="Write Your Message Here"
                onChange = {e => setSubmitText(e.target.value)}>
                </textarea>
            </div>
            <button type="submit" className="submitFormButton">
                Submit Feedback
            </button>
        </form>
    );
};

export default FeedbackForm;
