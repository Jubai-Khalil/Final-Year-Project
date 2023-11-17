/* Some of the headers and text for the webpage have been generated, enhanced or extended using Ai tools*/

import React from "react";
import "../../styling/DoctorsAbout.css";
import { formatDate } from "../../utils/formatDate";

const CardiologistAbout = () => {
    return (
        <div>
            <div>
                <h3>
                    About
                </h3>
                <p className="docsAboutText">
                My approach is to work collaboratively with you to tailor treatment plans that
                fit your unique needs, ensuring that you receive the best possible outcomes. 
                I believe in empowering my patients with knowledge about their conditions and treatment options. 
                Together, we will strive for your optimal heart health, so you can live a full and active life."
                </p>
                <h3 className="docsEduHeader">
                    Education
                </h3>
                <span className="docsGradYear">
                    {formatDate("28-09-1972")} - {formatDate("19-05-1978")}
                </span>
                <div className="eduContainer">
                    <div className="eduDetails">
                        <p className="docsAboutText">
                            MBBS Medicine, Accredited by the General Medical Council
                        </p>
                        <p className="docsAboutText eduInstitution">
                            Kings College London
                        </p>
                    </div>
                </div>
                <span className="docsGradYear">
                    {formatDate("21-09-1981")} - {formatDate("05-06-1985")}
                </span>
                <div className="eduContainer">
                    <div className="eduDetails">
                        <p className="docsAboutText">
                            M.D. Medicine
                        </p>
                        <p className="docsAboutText eduInstitution">
                            University College London
                        </p>
                    </div>
                </div>
                <h3 className="docsEduHeader">
                    Experience
                </h3>
                <ul className="experienceCardContainer">
                    <li className="listStyle">
                        <span className="docsExperienceCard">
                            {formatDate("28-09-1972")} - {formatDate("19-05-1978")}
                            <p className="docsAboutText">
                                Cardiology Fellow
                            </p>
                            <p className="docsExpText">
                            Royal Free Hospital, England
                        </p>
                        </span>
                    </li>
                    <li className="listStyle">
                        <span className="docsExperienceCard">
                            {formatDate("28-09-1985")} - {formatDate()}
                            <p className="docsAboutText">
                                Consultant Cardiologsit
                            </p>
                            <p className="docsExpText">
                                Gill Heart & Vascular Institute, England
                            </p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CardiologistAbout;