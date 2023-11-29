// Ai tools have been used to enhance and/or extend the feedback for the testimonies 

import React from "react";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillStarFill } from "react-icons/bs";
import "swiper/css";
import "../../styling/Testimonial.css";
import "../../styling/Home.css";
import "swiper/css/pagination";
import avatarIcon1 from "../../assets/images/avatarIcon1.png";
import avatarIcon2 from "../../assets/images/avatarIcon2.png";
import avatarIcon3 from "../../assets/images/avatarIcon3.png";
import avatarIcon4 from "../../assets/images/avatarIcon4.png";

// Array of testimonial objects
const testimonials = [
    {
        id: 1,
        name: "Mark Russell",
        avatar: avatarIcon2,
        rating: 5,
        feedback: "I'm incredibly grateful for the mental health support I received through this platform. The convenience of booking and attending sessions from home allowed me to consistently prioritize my well-being."
    },
    {
        id: 2,
        name: "Elizabeth Huang",
        avatar: avatarIcon4,
        rating: 5,
        feedback: "This service was a lifesaver when I needed a prescription while traveling. The process was quick, the doctor was understanding, and I got my medication without any hassle. Highly recommend their seamless service!"
    },
    {
        id: 3,
        name: "Aisha Patel",
        avatar: avatarIcon3,
        rating: 5,
        feedback: "Navigating healthcare can be daunting, but this platform made it simple and accessible. The follow-up care and personalized attention were particularly impressive. It's clear that patient satisfaction is their top priority."
    },
    {
        id: 4,
        name: "James Garcia",
        avatar: avatarIcon2,
        rating: 5,
        feedback: "I appreciated the discreet and immediate support for my urgent medical concerns. The medical professionals were thorough and compassionate. This is the future of healthcare—accessible, efficient, and patient-centered."
    },
    {
        id: 5,
        name: "Sophia Johnson",
        avatar: avatarIcon4,
        rating: 5,
        feedback: "The online consultation service was exceptional—private, efficient, and more comprehensive than I expected. Being able to get expert medical advice without leaving home was a game-changer for my busy lifestyle."
    },
    {
        id: 6,
        name: "Richard Ngannou",
        avatar: avatarIcon1,
        rating: 5,
        feedback: "I was initially hesitant to try a virtual doctor visit, but the professionalism and knowledge of the staff won me over. It was just as good, if not better, than an in-person appointment. A five-star healthcare experience!"
    }
];

const Testimonial = () => {
    return (
        <div className="swiperSection">
            {/* Swiper component with pagination and responsive breakpoints */}
            <Swiper modules={[Pagination]} spaceBetween={30} 
            slidesPerView={1} pagination={{clickable:true}}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}>
                {/* Mapping over the testimonials array to create SwiperSlide components */}
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="swiperContainer">
                            <div className="swiperInnerContainer">
                                <img src={testimonial.avatar} alt="" className="swiperIcon"/>
                                <div>
                                    <h4 className="swiperHeader">
                                        {testimonial.name}
                                    </h4>
                                    <div className="swiperStars">
                                        {/* Generating star icons based on the rating */}
                                        {[...Array(testimonial.rating)].map((_, index) => (
                                            <BsFillStarFill key={index} className="star"/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p>
                                {testimonial.feedback}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;
