
import fetch from 'node-fetch';

const revDoctorData = {
    email: 'revjohndoe@example.com',
    password: 'password123',
    firstname: 'revJohn',
    surname: 'revDoe',
    role: 'doctor',
};

const revPatientData = {
    email: 'revevasmith@example.com',
    password: 'password123',
    firstname: 'revEva',
    surname: 'revSmith',
    role: 'patient',
};

// Function to register a new doctor
async function registerNewDoctor() {

    const url = 'http://localhost:5001/api/v1/auth/register'; // API endpoint

    try {
        // POST request to the server with the doctor's data.
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(revDoctorData)
        });

        const data = await response.json();
        console.log('Response from server:', data);

        // Returning the user response if registration is successful, otherwise null.
        if (data.success && data.userResponse) {
            return data.userResponse;
        } else {
            return null;
        }
    } catch (error) {
         // Log any errors during the fetch request.
        console.error('Error posting new doctor:', error);
        return null;
    }
};

// Function to register a new patient
async function RegisterNewPatient() {
    const url = 'http://localhost:5001/api/v1/auth/register'; // API endpoint

    try {
        // POST request to the server with the patient's data.
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(revPatientData)
        });

        const data = await response.json();
        console.log('Response from server:', data);

        // Returning the user response if registration is successful, otherwise null.
        if (data.success && data.userResponse) {
            return data.userResponse;
        } else {
            return null;
        }
    } catch (error) {
        // Log any errors during the fetch request
        console.error('Error posting new patient:', error);
        return null;
    }
};

// function to log in a user.
async function login(email, password) {
    const url = 'http://localhost:5001/api/v1/auth/login'; // API endpoint for user login

    try {
        // POST request to the server with the user's email and password.
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (data.status && data.token) {
            console.log('Login successful:', data);
            // Returning the JWT token if login is successful
            return data.token; 
        } else {
            console.log('Login failed:', data.message);
            return null;
        }
    } catch (error) {
         // Log any errors during the fetch request.
        console.error('Error during login:', error);
        return null;
    }
}

async function createReview(doctorId, patientToken, reviewText, rating) {
    const url = `http://localhost:5001/api/v1/doctors/${doctorId}/reviews`;

    const reviewData = {
        reviewText: reviewText,
        rating: rating
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${patientToken}`
            },
            body: JSON.stringify(reviewData)
        });

        const data = await response.json();
        console.log('Review creation response:', data);
        return data;
    } catch (error) {
        console.error('Error creating review:', error);
        return null;
    }
}

/*
async function getDoctorsReviews(doctorId, doctorToken) {
    const url = `http://localhost:5001/api/v1/doctors/${doctorId}/reviews`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${doctorToken}`
            },
        });

        const data = await response.json();
        console.log('Reviews for doctor fetched:', data);
        return data;
    } catch (error) {
        console.error('Error fetching reviews for doctor:', error);
        return null;
    }
}

async function deleteReviewsByDoctor(doctorId, token) {
    const url = `http://localhost:5001/api/v1/doctor/${doctorId}/reviews`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        const data = await response.json();
        console.log(`All reviews for doctor with ID ${doctorId} deleted:`, data);
        return data;
    } catch (error) {
        console.error(`Error deleting reviews for doctor with ID ${doctorId}:`, error);
        return null;
    }
}
*/

//make function which deletes review from doctor schema

// function to delete a user 
async function deleteUser(id, role, token) {
    // Determining the API endpoint based on the user's role.
    let url;
    if (role === "doctor") {
        url = `http://localhost:5001/api/v1/doctors/${id}`;
    } else {
        url = `http://localhost:5001/api/v1/users/${id}`;
    }

    try {
        // DELETE request to the server with the necessary authorization.
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include the JWT token in the request header
            }
        });

        // Check if the response from the server is OK (successful).
        if (response.ok) {
            const data = await response.json(); 
            console.log(`User with ID ${id} has been deleted successfully.`, data);
        } else {
            console.log(`Failed to delete user with ID ${id}. Response status: ${response.status}`);
        }
    } catch (error) {
        // Log any errors during the fetch request.
        console.error(`Error deleting user with ID ${id}:`, error);
    }
}

async function main() {
    const doctor = await registerNewDoctor();
    const doctorToken = await login(doctor.email, 'password123');

    const patient = await RegisterNewPatient();
    const patientToken = await login(patient.email, 'password123');

    const review = await createReview(doctor.id, patientToken, "Great service", 5);
    const review2 = await createReview(doctor.id, patientToken, "Perfect service", 5);
    const review3 = await createReview(doctor.id, patientToken, "Splendid service", 5);

    //const doctorsReviews = await getDoctorsReviews(doctor.id, doctorToken)
    //const delDocReviews = await deleteReviewsByDoctor(doctor.id, doctorToken)

    await deleteUser(doctor.id, doctor.role, doctorToken);
    await deleteUser(patient.id, patient.role, patientToken);

}

main();
