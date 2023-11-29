import React from "react";
import "../styling/Contact.css"

const Contact = () => {

    // An array of locations that will be used to generate Google Maps URLs
    const locations = [
        "One Canada Square",
        "Westfield London",
        "Granary Square",
        "Hodgkin Building"
    ];

    // Function to generate the Google Maps URL
    const createGoogleMapsUrl = (location) => {
    // Retrieve the Google Maps API key from the environment variables
    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    // Return the full URL for embedding the map with the given location
    return `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(location)}`;
    };

    return (
        <section>
            <div className="contactSection">
                <div className="gridContainer">
                    <div className="contactContainer">
                        <h2 className="contactHeader">Contact Us</h2>
                        <p className="contactText">
                        Got technical issues? Have a great idea? Stuck with a beta feature? We want to know about it! Our customers are at
                        the forefront of everything we do, so if you've got something to tell us don't shy away. 
                        </p>
                        <form action="#" className="contactForm">
                            <div>
                                <label htmlFor="email" className="formLabel">
                                Your Email
                                </label>
                                <input
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                className="formInput"
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="formLabel">
                                Subject
                                </label>
                                <input
                                type="text"
                                id="subject"
                                placeholder="Subject Matter"
                                className="formInput"
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="formLabel">
                                Your Message
                                </label>
                                <textarea
                                rows="6"
                                type="text"
                                id="message"
                                placeholder="Kindly let us know how we can improve"
                                className="formInput"
                                required
                                />
                            </div>
                            <div>
                                <button type="submit" className="contactSubmitButton">Submit</button>
                            </div> 
                        </form>
                    </div>      
                    <div className="contactContainer">
                        <h2 className="contactHeader">Find Us</h2>
                        <div className="nestedGrid">
                            {/* Mapping through locations to create an iframe for each */}
                            {locations.map((location, index) => (
                                <div key={index}>
                                    <iframe
                                        width="348"
                                        height="280"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src={createGoogleMapsUrl(location)}
                                        title={`Google Maps Embed - ${location}`}
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                    </div> 
                </div> 
            </div>
        </section>
    );
};

export default Contact;
