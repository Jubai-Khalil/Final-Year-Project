// test cases have been written manually with template data, succcess/passing can be seen in the terminal output

import fetch from 'node-fetch';

// test data for registering a new doctor.
const doctorData = {
    email: 'testdoctor@example.com',
    password: 'password123',
    firstname: 'Eva',
    surname: 'Smith',
    dob: '1990-01-01',
    role: 'doctor',
};

// function to register a new doctor.
async function RegisterNewDoctor() {
    const url = 'http://localhost:5001/api/v1/auth/register'; // API endpoint for user registration.

    try {
        // POST request to the server with the doctor's data.
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(doctorData)
        });

        const data = await response.json();
        console.log('Response from server:', data);

        // Return the user response if registration is successful, otherwise null.
        if (data.success && data.userResponse) {
            return data.userResponse;
        } else {
            return null;
        }
    } catch (error) {
        // Log any errors that occur during the fetch request.
        console.error('Error posting new doctor:', error);
        return null;
    }
};

// function to log in a user.
async function login(email, password) {
    const url = 'http://localhost:5001/api/v1/auth/login'; // API endpoint for user login.

    try {
        // POST request to the server with the user's email and password.
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        // Returning the JWT token if login is successful, otherwise null.
        const data = await response.json();
        if (data.status && data.token) {
            console.log('Login successful:', data);
            return data.token; // Return the JWT token
        } else {
            console.log('Login failed:', data.message);
            return null;
        }
    } catch (error) {
        // Log any errors that occur during the fetch request.
        console.error('Error during login:', error);
        return null;
    }
}

// function to get a single doctor by their ID.
async function getSingleDoctor(id,token) {
    const url = `http://localhost:5001/api/v1/doctors/${id}`; // API endpoint to get a single doctor.

    try {
        // GET request to the server with the necessary authorization token.
        const response = await fetch(url, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        // Check if the response from the server is OK (successful).
        if (response.ok) {
            const data = await response.json();
            console.log('Doctor found:', data);
        } else {
            console.log("Doctor not found");
            return null;
        }
    } catch (error) {
        // Log any errors that occur during the fetch request.
        console.error('Error fetching doctor:', error);
        return null; 
    }
};

// function to delete a doctor by their ID.
async function deleteDoctor(id, email, token) {
    const url = `http://localhost:5001/api/v1/doctors/${id}`; // API endpoint to delete a doctor.

    try {
        // DELETE request to the server with the necessary authorization token.
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Including the JWT token for authorization.
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
        // Log any errors that occur during the fetch request.
        console.error(`Error deleting user with ID ${id}:`, error);
    }
}

// main function to call the above in the correct order
async function main() {

    const newDoctor = await RegisterNewDoctor();
    console.log('Registered Doctor:', newDoctor);

    const doctorToken = newDoctor ? await login(newDoctor.email, 'password123') : null;
    
    const singleUser = await getSingleDoctor(newDoctor.id, doctorToken);

    await deleteDoctor(newDoctor.id,newDoctor.email, doctorToken);
    
};

main();
