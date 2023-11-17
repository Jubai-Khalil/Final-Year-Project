import React, {useState} from "react";
import docImg1 from "../../assets/images/docImg1.png";
import "../../styling/DoctorsDetails.css";
import { BsFillStarFill } from "react-icons/bs";
import CardiologyAbout from "./CardiologyAbout";
import CardiologyFeedback from "./CardiologyFeedback";
import SidePanel from "./SidePanel";

const Cardiologist = () => {

    const [tab, setTab] = useState("About")

    return (
        <section>
            <div className="docsSection">
                <div className="docsContainer">
                    <div className="docsInnerContainer">
                        <div className="docsImgContainer">
                            <img src={docImg1} alt="" className="docsImg"/> {/*© [Monkey Business] / Adobe Stock*/}
                        </div>
                    </div>
                    <div className="docsInnerContainer">
                        <div className="docsContents">
                            <h2 className="docsHeaderContents">
                                Dr. Richard Gray
                            </h2>
                            <div>
                                <span className="docsTextType">
                                    Cardiologist
                                </span>
                                <p>
                                    <BsFillStarFill className="star"/> 4.8
                                </p>
                                <li className="docsListWrapper">
                                    <p className="docsTotalRatings">
                                        (1013)
                                    </p>
                                </li>
                            </div>
                            <p className="docsText">
                                "Hello, I'm Dr. Richard Gray, your dedicated cardiologist. With over a decade of experience 
                                in heart health, I'm committed to providing you with comprehensive and compassionate care. 
                            </p>
                            <h2 className="consultationHeader">
                                Consultation List
                            </h2>
                            <p className="docsText">
                                Private consultation: £200
                                a one-on-one session where we'll discuss your medical history, current health concerns, 
                                and symptoms. We'll go over your lifestyle, risk factors for heart disease, and any medications you're taking. 
                            </p>
                            <p className="docsText">
                                ECG: £50
                                An Electrocardiogram (ECG) is a simple, quick test that records the electrical activity of your heart. 
                            </p>
                            <p className="docsText">
                                Private consultation with ECG: £250
                                This combined service offers both a private consultation and an ECG test at a bundled rate. 
                            </p>
                            <p className="docsText">
                                Echocardiogram: £300
                                An echocardiogram is an ultrasound scan of the heart. It provides a detailed look at the heart's 
                                structure and function, helping to detect issues such as valve problems or heart chamber size.
                            </p>
                        </div>
                    </div>
                    <div className="docsInnerContainer">
                        <div className="docsImgContainer">
                            <SidePanel/>
                        </div>
                    </div>
                </div>
                <div className="docsInfoContainer">
                <button 
                        className={`aboutButton ${tab === "About" ? "activeTab" : ""}`} 
                        onClick={() => setTab("About")}
                    >
                        About
                    </button>
                    <button 
                        className={`aboutButton ${tab === "Feedback" ? "activeTab" : ""}`} 
                        onClick={() => setTab("Feedback")}
                    >
                        Feedback
                    </button>
                </div>
                <div className="tab">
                    {
                        tab === "About" && <CardiologyAbout/>
                    }
                    {
                        tab === "Feedback" && <CardiologyFeedback/>
                    }
                </div>
            </div>
        </section>
    ); 
};


export default Cardiologist