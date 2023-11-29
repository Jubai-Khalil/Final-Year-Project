/* The answers for this faq section have been enhanced/extended using Ai tools*/

import React, { useState } from "react";
import { BsFilePlus, BsFileMinus } from "react-icons/bs";
import "../../styling/FaqSection.css"; 

// FaqItem component represents a single FAQ item with a question and answer
const FaqItem = ({ question, answer }) => {
    // State to track if the FAQ item is expanded or not
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to handle click event on FAQ question
    const handleQuestionClick = () => {
        try {
            setIsExpanded(!isExpanded); // Toggle the expanded state
        } catch (error) {
            console.error("Error occurred while expanding FAQ item:", error);
        }
    };

    return (
        <div className="faqItem">
            <div className="faqQuestion" onClick={handleQuestionClick}>
                {question}
                <span className="faqIcon">
                    {/* Toggle between plus and minus icons */}
                    {isExpanded ? <BsFileMinus /> : <BsFilePlus />}
                </span>
            </div>
            {/* Display answer if the item is expanded */}
            {isExpanded && <div className="faqAnswer">{answer}</div>}
        </div>
    );
};

const FaqSection = () => {
    const faqData = [
        {
            question: "Who can use the online medical consultation platform?",
            answer: "Anyone over the age of 18 can use the online medical consultation platform to get medical advice from a qualified healthcare provider."
        },
        {
            question: "What do I need for an online video consultation?",
            answer: "All Video Consultations take place over Zoom. Once your booking has been confirmed you will be sent a personal zoom link to your email. We do recommend your device has a working webcam and a stable internet connection."
        },
        {
            question: "What services do you offer and how much does it cost?",
            answer: "We offer a variety of medical services, including general medicine, pediatrics, dermatology, and mental health counseling. The cost of the service depends on the type of service you receive. In general it can vary from £35 up to £300."
        },
        {
            question: "What happens on the online video consultation?",
            answer: "Much like a face-to-face session, your symptoms will be discussed with the clinician. They can also examine the affected area by sending you a email which you can upload pictures or videos to. They can also write you a prescription should you need any medicine. "
        },
        {
            question: "Can I cancel my consultation?",
            answer: "Yes, you can cancel your consultation with at least 4 hours of notice for free by emailing 'cancelbooking@medicconsult.com' any cancellations with less than 4 hours notice will still be charged."
        },
    ];

    return (
        <div className="faqSection">
            {/* Map through each FAQ item and render them */}
            {faqData.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

export default FaqSection;

