import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import "../../styling/FeedbackForm.css";

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitText, setSubmitText] = useState("")

    const handleSubmitReview = async e=> {
        e.preventDefault()
        // i will finish this when i create the backend and connect api
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
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                                onDoubleClick={()=> {setHover(0); setRating(0)}}
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
