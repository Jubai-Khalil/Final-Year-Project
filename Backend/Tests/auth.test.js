// test cases have been written manually, succcess/passing can be seen in the terminal output responses

import fetch from 'node-fetch';

// Test data for a patient.
const authTestPatient = {
    email: 'authtestpatient@example.com',
    password: 'password123',
    firstname: 'JohnAuth',
    surname: 'DoeAuth',
    dob: '1990-01-01',
    role: 'patient',
};

// Test data for a doctor.
const authTestDoctor = {
    email: 'authtestdoctor@example.com',
    password: 'password123',
    firstname: 'EvaAuth',
    surname: 'SmithAuth',
    dob: '1990-01-01',
    role: 'doctor',
};

// Function to register a new doctor
async function RegisterNewDoctor() {
    const url = 'http://localhost:5001/api/v1/auth/register'; // API endpoint

    try {
        // POST request to the server with the doctor's data.
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authTestDoctor)
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
            body: JSON.stringify(authTestPatient)
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

// function to delete a user 
async function deleteUser(id, email, role,token) {
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
            console.log(`User with ID ${id} and email ${email} has been deleted successfully.`, data);
        } else {
            console.log(`Failed to delete user with ID ${id}. Response status: ${response.status}`);
        }
    } catch (error) {
        // Log any errors during the fetch request.
        console.error(`Error deleting user with ID ${id}:`, error);
    }
}

// main function to call the rest of the functions in order
async function main() {

    const newPatient = await RegisterNewPatient();
    console.log('Registered Patient:', newPatient);

    const newDoctor = await RegisterNewDoctor();
    console.log('Registered Doctor:', newDoctor);

    const patientToken = newPatient ? await login(newPatient.email, 'password123') : null;
    const doctorToken = newDoctor ? await login(newDoctor.email, 'password123') : null;

    await deleteUser(newPatient.id,newPatient.email, newPatient.role, patientToken);
    await deleteUser(newDoctor.id,newDoctor.email, newDoctor.role, doctorToken);
};

main();

