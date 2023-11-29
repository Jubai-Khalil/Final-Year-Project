import React from "react";
import "../styling/Doctors.css";
import "../styling/Testimonial.css";
import { Link } from "react-router-dom";
import { BsArrowRight, BsFillStarFill } from "react-icons/bs";
import Testimonial from "../components/Testimonials/Testimonial.jsx";
import doctorsData from "../assets/data/doctorsData.js";

const Doctors = () => {
    return (
        <>
            <section className="doctorsSection">
                <div className="doctorsContainer">
                    <h2 className="doctorsHeader">
                        Find a Doctor
                    </h2>
                    <div className="searchContainer">
                        <input type="search" className="searchBar" placeholder="Search For Doctor" />
                        <button className="searchButton">
                            Search
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className="docsThemeSection">
                    <div className="docsThemeHeaderContainer">
                        <h2 className="docsThemeHeader">
                            Meet Our Doctors
                        </h2>
                        <p className="docsThemeText">
                            In the world of healthcare, the human touch, expertise, and dedication stand paramount. Our hospital boasts a team of highly skilled, compassionate, and dedicated professionals committed to delivering the best care possible. 
                            Here's an introduction to some of our esteemed doctors.
                        </p>
                    </div>
                    <div className="docsThemeContainer">
                        {/* Mapping through doctors data*/}
                        {doctorsData.map(doctor => (
                            <div className="docsThemeInnerContainer" key={doctor.id}>
                                <div className="docsThemeImgContainer">
                                    <img src={doctor.imageUrl} alt={doctor.name} className="docsThemeImg"/>
                                </div>
                                <div className="docsThemeContents">
                                    <h2 className="docsThemeHeaderContents">
                                        {doctor.name}
                                    </h2>
                                    <div>
                                        <span className="docsThemeTextType">
                                            {doctor.specialty}
                                        </span>
                                        <p>
                                            <BsFillStarFill className="star"/> {doctor.rating}
                                        </p>
                                        <li className="docsThemeListWrapper">
                                            <p className="docsThemeTotalRatings">
                                                ({doctor.totalRatings})
                                            </p>
                                        </li>
                                    </div>
                                    <Link to={doctor.profileLink} className="arrowContainer">
                                        <BsArrowRight className="arrowIcon"/>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="testimonialSection">
                    <div className="testimonialHeaderContainer">
                        <h2 className="testimonialHeader">
                            Our Patients Feedback
                        </h2>
                        <p className="testimonialText">
                            Your health and satisfaction are at the core of what we do, and nothing speaks louder than the 
                            feedback from those we’ve had the privilege to serve. Below, our patients share their experiences 
                            with our online consultation platform, offering insights into the care and expertise they received.
                            Their stories reflect our commitment to providing accessible, compassionate, and high-quality medical care for all.
                        </p>
                    </div>
                    <Testimonial />
                </div>
            </section>
        </>
    );
};

export default Doctors;
