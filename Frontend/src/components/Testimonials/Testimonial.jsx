/* The testimonies for this section have been enhanced/extended using Ai tools*/

import React from "react";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillStarFill } from "react-icons/bs";
import "swiper/css";
import "../../styling/Testimonial.css";
import "../../styling/Home.css";
import "swiper/css/pagination";
import avatarIcon1 from "../../assets/images/avatarIcon1.png"
import avatarIcon2 from "../../assets/images/avatarIcon2.png"
import avatarIcon3 from "../../assets/images/avatarIcon3.png"
import avatarIcon4 from "../../assets/images/avatarIcon4.png"

const Testimonial = () => {

    return (
        <div className="swiperSection">
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
                <SwiperSlide>
                    <div className="swiperContainer">
                        <div className="swiperInnerContainer">
                            <img src={avatarIcon2} alt="" className="swiperIcon"/> {/*© [Alexandra Gl] / Adobe Stock*/}
                            <div>
                                <h4 className="swiperHeader">
                                    Mark Russell
                                </h4>
                                <div className="swiperStars">
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                </div>
                            </div>
                        </div>
                        <p>
                            "I'm incredibly grateful for the mental health support I received through this platform. 
                            The convenience of booking and attending sessions from home allowed me to consistently prioritize my well-being."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperContainer">
                        <div className="swiperInnerContainer">
                            <img src={avatarIcon4} alt="" className="swiperIcon"/> {/*© [Alexandra Gl] / Adobe Stock*/}
                            <div>
                                <h4 className="swiperHeader">
                                    Elizabeth Huang
                                </h4>
                                <div className="swiperStars">
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                </div>
                            </div>
                        </div>
                        <p>
                            "This service was a lifesaver when I needed a prescription while traveling. The process was quick, 
                            the doctor was understanding, and I got my medication without any hassle. Highly recommend their seamless service!"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperContainer">
                        <div className="swiperInnerContainer">
                            <img src={avatarIcon3} alt="" className="swiperIcon"/> {/*© [Alexandra Gl] / Adobe Stock*/}
                            <div>
                                <h4 className="swiperHeader">
                                    Aisha Patel
                                </h4>
                                <div className="swiperStars">
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                </div>
                            </div>
                        </div>
                        <p>
                            "Navigating healthcare can be daunting, but this platform made it simple and accessible. The follow-up care and personalized 
                            attention were particularly impressive. It's clear that patient satisfaction is their top priority."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperContainer">
                        <div className="swiperInnerContainer">
                            <img src={avatarIcon2} alt="" className="swiperIcon"/> {/*© [Alexandra Gl] / Adobe Stock*/}
                            <div>
                                <h4 className="swiperHeader">
                                    James Garcia
                                </h4>
                                <div className="swiperStars">
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                </div>
                            </div>
                        </div>
                        <p>
                            "I appreciated the discreet and immediate support for my urgent medical concerns. The medical professionals 
                            were thorough and compassionate. This is the future of healthcare—accessible, efficient, and patient-centered."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperContainer">
                        <div className="swiperInnerContainer">
                            <img src={avatarIcon4} alt="" className="swiperIcon"/> {/*© [Alexandra Gl] / Adobe Stock*/}
                            <div>
                                <h4 className="swiperHeader">
                                    Sophia Johnson
                                </h4>
                                <div className="swiperStars">
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                </div>
                            </div>
                        </div>
                        <p>
                            "The online consultation service was exceptional—private, efficient, and more comprehensive than I expected. 
                            Being able to get expert medical advice without leaving home was a game-changer for my busy lifestyle."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperContainer">
                        <div className="swiperInnerContainer">
                            <img src={avatarIcon1} alt="" className="swiperIcon"/> {/*© [Alexandra Gl] / Adobe Stock*/}
                            <div>
                                <h4 className="swiperHeader">
                                    Richard Ngannou
                                </h4>
                                <div className="swiperStars">
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                    <BsFillStarFill className="star"/>
                                </div>
                            </div>
                        </div>
                        <p>
                            "I was initially hesitant to try a virtual doctor visit, but the professionalism and knowledge of the 
                            staff won me over. It was just as good, if not better, than an in-person appointment. A five-star healthcare experience!"
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial