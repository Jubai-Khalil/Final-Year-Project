import React from "react";
import "../../styling/AboutPractitioner.css";
import doctorsData from "../../assets/data/doctorsData"; 

const CardiologistAbout = ({ doctorId }) => {
    // Check if doctorId is provided
    if (!doctorId) {
        return <div>Error: No doctor ID provided.</div>;
    }

    // Find the cardiologist using the doctorId
    const cardiologist = doctorsData.find(doctor => doctor.id === doctorId);

    // Check if a cardiologist is found
    if (!cardiologist) {
        return <div>Error: Doctor not found.</div>;
    }

    return (
        <div>
            <div>
                <h3>About</h3>
                <p className="docsAboutText">
                    {/* Display about text, or a placeholder if none is available */}
                    {cardiologist.aboutText || "No information available."}
                </p>
                <h3 className="docsEduHeader">Education</h3>
                {/*rendering for the education section */}
                {cardiologist.education && cardiologist.education.length > 0 ? (
                    cardiologist.education.map((edu, index) => (
                        <div key={index}>
                            <span className="docsGradYear">
                                {edu.startDate} - {edu.endDate}
                            </span>
                            <div className="eduContainer">
                                <div className="eduDetails">
                                    {/* Displaying the degree */}
                                    <p className="docsAboutText">{edu.degree}</p>
                                    {/* Displaying the institution */}
                                    <p className="docsAboutText eduInstitution">
                                        {edu.institution}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    // Display if no education information is available
                    <p>No education information available.</p>
                )}
                <h3 className="docsEduHeader">Experience</h3>
                <ul className="experienceCardContainer">
                    {cardiologist.experience && cardiologist.experience.length > 0 ? (
                        cardiologist.experience.map((exp, index) => (
                            <li key={index} className="listStyle">
                                <span className="docsExperienceCard">
                                    {/* Displaying the experience date range */}
                                    {exp.startDate} - {exp.endDate || 'Present'}
                                    {/* Displaying the position */}
                                    <p className="docsAboutText">{exp.position}</p>
                                    {/* Displaying the institution */}
                                    <p className="docsExpText">{exp.institution}</p>
                                </span>
                            </li>
                        ))
                    ) : (
                        // Display if no experience information is available
                        <p>No experience information available.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CardiologistAbout;
