import React from "react";
import "../styling/Doctors.css"
/* import the css styling into the Doctors.css that i am using from home.css instead of importing home.css so that i can keep all files seperate*/
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import docImg1 from "../assets/images/docImg1.png";
import docImg2 from "../assets/images/docImg2.png";
import docImg3 from "../assets/images/docImg3.png";
import Testimonial from "../components/Testimonials/Testimonial";

const Doctors = () => {
    return (
        <>
            <section className="doctorSection">
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
                <div className="doctorsSection">
                    <div className="doctorsHeaderContainer">
                        <h2 className="doctorsHeader">
                            Meet Our Doctors
                        </h2>
                        <p className="doctorsText">
                        In the world of healthcare, the human touch, expertise, and dedication stand paramount. Our hospital boasts a team of highly skilled, compassionate, and dedicated professionals committed to delivering the best care possible. 
                        Here's an introduction to some of our esteemed doctors.
                        </p>
                    </div>
                    <div className="docContainer">
                        <div className="docInnerContainer">
                            <div className="docImgContainer">
                                <img src={docImg1} alt="" className="docImg"/> {/*© [Monkey Business] / Adobe Stock*/}
                            </div>
                            <div className="docContents">
                                <h2 className="docHeaderContents">
                                    Dr. Richard Gray
                                </h2>
                                <div>
                                    <span className="docTextType">
                                        Cardiologist
                                    </span>
                                    <p>
                                        <BsFillStarFill className="star"/> 4.8
                                    </p>
                                    <li className="docListWrapper">
                                        <p className="docTotalRatings">
                                            (1013)
                                        </p>
                                    </li>
                                </div>
                                <Link to="/Doctors/Cardiologist" className="arrowContainer">
                                    <BsArrowRight className="arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                        <div className="docInnerContainer">
                            <div className="docImgContainer">
                                <img src={docImg2} alt="" className="docImg"/> {/*© [goodluz] / Adobe Stock*/}
                            </div>
                            <div className="docContents">
                                <h2 className="docHeaderContents">
                                    Dr. James Patterson
                                </h2>
                                <div>
                                    <span className="docTextType">
                                        Neurologist
                                    </span>
                                    <p>
                                        <BsFillStarFill className="star"/> 4.7
                                    </p>
                                    <li className="docListWrapper">
                                        <p className="docTotalRatings">
                                            (412)
                                        </p>
                                    </li>
                                </div>
                                <Link to="/Doctors/2" className="arrowContainer">
                                    <BsArrowRight className="arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                        <div className="docInnerContainer">
                            <div className="docImgContainer">
                                <img src={docImg3} alt="" className="docImg"/> {/*© [lordn] / Adobe Stock*/}
                            </div>
                            <div className="docContents">
                                <h2 className="docHeaderContents">
                                    Dr. Lisa Monroe
                                </h2>
                                <div>
                                    <span className="docTextType">
                                    Oncologist
                                    </span>
                                    <p>
                                        <BsFillStarFill className="star"/> 4.6
                                    </p>
                                    <li className="docListWrapper">
                                        <p className="docTotalRatings">
                                            (831)
                                        </p>
                                    </li>
                                </div>
                                <Link to="/Doctors/3" className="arrowContainer">
                                    <BsArrowRight className="arrowIcon"/>
                                </Link>
                            </div>
                        </div>
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

export default Doctors