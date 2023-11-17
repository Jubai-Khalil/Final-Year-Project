import React from "react";

const Contact = () => {
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCvpN8BHXFL_3SKXHtnpYne6v7FKIH-fn4&q=Royal+Holloway`;

    return (
    <div>
        <h2>Contact</h2>
        <iframe
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={googleMapsUrl}
            title="Google Maps Embed">
        </iframe>
    </div>
    );
};

export default Contact;
