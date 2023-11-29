/* Some of the headers and text for the webpage have been generated, enhanced or extended using Ai tools*/

import React from "react";
import "../styling/Home.css";
import "../styling/FaqSection.css";
import "../styling/Testimonial.css";
import heroImage from "../assets/images/heroImage.png";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import doctorsData from "../assets/data/doctorsData.js";
import servicesData from "../assets/data/servicesData.js";
import featImg from "../assets/images/featImg.png";
import aboutIcon from "../assets/images/aboutIcon.png";
import videoIcon from "../assets/images/videoIcon.png";
import faqImg from "../assets/images/faqImg.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import FaqSection from "../components/Faqs/FaqSection";
import Testimonial from "../components/Testimonials/Testimonial";


// something cool would be to randomly generate numbers between 1 and total number of doctors (without duplicating) so that it changes the doctors around but for now just use 1,2,3 until i have more doctors
// abstract each section into its own sections for better modularity and maintainability
const Home = () => {

    // Slice the first three doctors from doctorsData for doctors theme section
    const displayedDoctors = doctorsData.slice(0, 3);

    return  (
        <>
        {/* ============ hero section ============ */}
        <section className="heroSection">
        <div className="heroContainer">
                    <div className="heroInnerContainer">
                        <div className="heroImgContainer">
                            <img src={heroImage} alt="" className="heroImg"/> {/*© [Pixel-Shot] / Adobe Stock*/}
                        </div>
        {/* ============ hero content ============ */}          
                        <div className="heroHeaderContainer">
                            <h2 className="heroHeader">We're Here To Help You Live A Happy, Healthy Life.</h2>
                            <p className="heroText">
                                Our mission extends beyond providing exceptional medical care—it’s about enabling you to embrace life to the fullest, 
                                with the best health possible. We foster a supportive environment that encourages healing and growth. Our team is here for 
                                you every step of the way, offering guidance, support, and a listening ear when you need it.
                            </p> 
                            <div className="counterSection">
                                <div>
                                    <h2 className="counterContent">25+</h2>
                                    <span className="counterUnderlineOne"></span>
                                    <p className="counterText">Years Of Experience</p>
                                </div>
                                <div>
                                    <h2 className="counterContent">24/7</h2>
                                    <span className="counterUnderlineTwo"></span>
                                    <p className="counterText">Urgent Care Service</p>
                                </div>
                                <div>
                                    <h2 className="counterContent">100%</h2>
                                    <span className="counterUnderlineThree"></span>
                                    <p className="counterText">Patient Satisfaction</p>
                                </div>
                            </div>
                            <Link to="/Doctors" className="linkWrapper">
                            <button className="requestButton">Request Appointment</button>
                            </Link>
                        </div>
                    </div> 
                </div>
        </section>
        {/* ============ how section ============ */}
            <section>
                <div className="howSection">
                    <div className="howSectionContainer">
                        <h2 className="howHeader">
                            Providing The Best Medical Services
                        </h2>
                        <p className="howText">
                            Our team is dedicated to providing the best medical services for your needs. 
                            From routine checkups to complex surgeries and everything in between.
                        </p>
                    </div>
                    <div className="howIconsContainer">
                        <div className="howInnerContainer">
                            <div className="howIcon1">
                                <img src={icon1} alt=""/> {/*© [robu_s] / Adobe Stock*/}
                            </div>
                            <div className="iconHeader">
                                <h2 className="iconHeaderContents">
                                    Find A Doctor
                                </h2>
                                <p className="iconTextContents">
                                World-class care, accessible to all. At the heart of our health system lies a commitment to 
                                deliver unmatched, expert healthcare services. From our state-of-the-art labs to our well-equipped clinics.
                                </p>
                                <Link to="/Doctors" className="arrowContainer">
                                    <BsArrowRight className="arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                        <div className="howInnerContainer">
                            <div className="howIcon2">
                                <img src={icon2} alt=""/> {/*© [Rogatnev] / Adobe Stock*/}
                            </div>
                            <div className="iconHeader">
                                <h2 className="iconHeaderContents">
                                    Pick A Location
                                </h2>
                                <p className="iconTextContents">
                                Live your best life with our support! If you choose visit any of our numerous clinics
                                Our staff's vast expertise ensures that you're in capable hands. With branches all over, 
                                we're just around the corner.
                                </p>
                                <Link to="/Contact" className="arrowContainer">
                                    <BsArrowRight className="arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                        <div className="howInnerContainer">
                            <div className="howIcon3">
                                <img src={icon3} alt=""/> {/*© [Mykyta] / Adobe Stock*/}
                            </div>
                            <div className="iconHeader">
                                <h2 className="iconHeaderContents">
                                    Book An Appointment
                                </h2>
                                <p className="iconTextContents">
                                Schedule your appointment with us today and discover unparalleled care. 
                                Our dedicated professionals are committed to providing treatments 
                                and services tailored specifically to your needs.
                                </p>
                                <Link to="/Doctors" className="arrowContainer">
                                    <BsArrowRight className="arrowIcon"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/* ============ about image ============ */}        
            <section>
                <div className="aboutContainer">
                    <div className="aboutInnerContainer">
                        <div className="aboutImgContainer">
                            <img src={aboutIcon} alt="" className="aboutImg"/> {/*© [Pixel-Shot] / Adobe Stock*/}
                        </div>
        {/* ============ about content ============ */}          
                        <div className="aboutHeaderContainer">
                            <h2 className="aboutHeader">Committed To Making A Difference And Setting The Gold Standard</h2>
                            <p className="aboutText">
                            For over 2 decades, a testament to our unwavering commitment and excellence in healthcare, 
                            both The Guardian and The Times have honored us with their recognition. Being consistently 
                            spotlighted by such prestigious publications not only solidifies our reputation but also reinforces 
                            our dedication to providing unparalleled care.
                            </p> 
                            <p className="aboutText">
                            Every sunrise brings with it a renewed commitment to excellence. For us, 'our best' is not a static 
                            benchmark, but an ever-evolving standard we ardently chase each day. Our primary focus is the well-being 
                            of our patients, and this guides our every action and decision. Rather than resting on the laurels of past 
                            achievements, we maintain a forward-facing perspective, constantly questioning, "What more can we do for our patients tomorrow?"
                            </p>
                            <Link to="/About" className="linkWrapper">
                            <button className="learnMoreButton">Learn More</button>
                            </Link>
                        </div>
                    </div> 
                </div>
            </section>
        {/* ============ services section ============ */}
        <section>
                <div className="servicesSection">
                    <div className="servicesHeaderContainer">
                        <h2 className="servicesHeader">Our Medical Services</h2>
                        <p className="servicesText">
                            At the heart of our institution lies a commitment to enhancing the well-being and health of our community. 
                            Here's a brief overview into the range of medical services we offer. Want to know more? Click on the arrows below each segment to be taken directly to the practiotioners page.
                        </p>
                    </div>
                    <div className="servicesOfferedContainer">
                        {/* Mapping through services data*/}
                        {servicesData.map(service => (
                            <div className="servicesInnerContainer" key={service.id}>
                                <div className="iconHeader">
                                    <h2 className="iconHeaderContents">{service.title}</h2>
                                    <p className="iconTextContents">{service.description}</p>
                                    <Link to={service.link} className="arrowContainer">
                                        <BsArrowRight className="arrowIcon"/>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        {/* ============ feature image ============ */}
            <section>
                <div className="featureSection">
                    <div className="featInnerContainer">
                        <div className="featImgContainer">
                            <img src={featImg} alt="" className="featImg"/> {/*© [NeoLeo] / Adobe Stock*/}
                            <div className="appointmentCard">
                                <div className="cardContainer">
                                    <div className="cardInnerContainer">
                                        <p className="cardTextDate">
                                        Wed, 23
                                        </p>
                                        <p className="cardTextType">
                                            Consultation
                                        </p>
                                        <p className="cardTextTime">
                                            10:00am
                                        </p>
                                    </div>
                                    <span className="cardImgContainer">
                                        <img src={videoIcon} alt="" className=""/>
                                    </span>
                                </div>
                            </div>
                        </div>
        {/* ============ feature content ============ */}          
                        <div className="featHeaderContainer">
                            <h2 className="featHeader">Get Virtual Treatment At Any Time</h2>
                            <ul className="featListWrapper">
                                <li className="featText">
                                    1. Find a doctor, not sure which service you need? Don't worry, speak to our primary care physician 
                                    and they'll refer you to the right department.
                                </li>
                                <li className="featTextList">
                                    2. There may be multiple doctors to choose from based on the service you're looking for, take your time to open up each doctors profile and read the reviews.
                                </li>
                                <li className="featTextList">
                                    3. Think you've found the right doctor to accomodate your needs, feel free to request an appointment that suits you using the online scheduling tool.
                                </li>
                                <li className="featTextList">
                                    4. Finally, wait for your doctor to accept your booking and you're all set. Got any questions? Click the button below. 
                                </li>
                                <li className="featTextList"> 
                                    (P.S. Don't forget to note down the booking in your diary!)
                                </li>
                            </ul> 
                            <Link to="/Contact" className="linkWrapper">
                            <button className="learnMoreButton">Contact Us</button>
                            </Link>
                        </div>
                    </div> 
                </div>
            </section>
        {/* ============ doctors section ============ */} 
            <section>
                <div className="docsThemeSection">
                    <div className="docsThemeHeaderContainer">
                        <h2 className="docsThemeHeader">Meet Our Doctors</h2>
                        <p className="docsThemeText">
                            In the world of healthcare, the human touch, expertise, and dedication stand paramount. Our hospital boasts a team of highly skilled, compassionate, and dedicated professionals committed to delivering the best care possible. 
                            Here's an introduction to some of our esteemed doctors.
                        </p>
                    </div>
                    <div className="docsThemeContainer">
                        {displayedDoctors.map(doctor => (
                            <div className="docsThemeInnerContainer" key={doctor.id}>
                                <div className="docsThemeImgContainer">
                                    <img src={doctor.imageUrl} alt={doctor.name} className="docsThemeImg"/>
                                </div>
                                <div className="docsThemeContents">
                                    <h2 className="docsThemeHeaderContents">{doctor.name}</h2>
                                    <div>
                                        <span className="docsThemeTextType">{doctor.specialty}</span>
                                        <p><BsFillStarFill className="star"/> {doctor.rating}</p>
                                        <p className="docsThemeTotalRatings">({doctor.totalRatings})</p>
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
        {/* ============ faq section ============ */} 
            <section>
                <div className="faqContainer">
                    <div className="faqInnerContainer">
                        <div className="faqImgContainer">
                            <img src={faqImg} alt="" className="faqImg"/> {/*© [steffenak] / Adobe Stock*/}
                        </div>
                        <div className="faqHeaderContainer">
                            <h2 className="faqHeader">
                                Most Frequently Asked Questions By Our Customers
                            </h2>
        {/* ============ faq content ============ */}   
                            <FaqSection />
                        </div>
                    </div> 
                </div>
            </section>
        {/* ============ testimonial section ============ */} 
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

export default Home

