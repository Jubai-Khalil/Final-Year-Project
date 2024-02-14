// test cases have been written manually with template data, succcess/passing can be seen in the terminal output

import fetch from 'node-fetch';

// an object representing patient data for registration.
const patientData = {
    email: 'testpatient@example.com',
    password: 'password123',
    firstname: 'John',
    surname: 'Doe',
    dob: '1990-01-01',
    role: 'patient',
};

//function to register a new patient.
async function RegisterNewPatient() {
    const url = 'http://localhost:5001/api/v1/auth/register'; // API endpoint for registration.

    // Send a POST request to the registration endpoint with the patient data.
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(patientData)
        });

        const data = await response.json();
        console.log('Response from server:', data);

        // Check if the registration was successful and return the user response.
        if (data.success && data.userResponse) {
            return data.userResponse;
        } else {
            return null;
        }
        // Log any errors that occur during the fetch call.
    } catch (error) {
        console.error('Error posting new patient:', error);
        return null;
    }
};

//function to log in a user.
async function login(email, password) {
    const url = 'http://localhost:5001/api/v1/auth/login'; // API endpoint for login.

    // Send a POST request to the login endpoint with the email and password.
    try {
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
            return data.token; // Return the JWT token if login is successful.
        } else {
            console.log('Login failed:', data.message);
            return null;
        }
        // Log any errors that occur during the fetch call.
    } catch (error) {
        console.error('Error during login:', error);
        return null;
    }
}

// function to get a single user by ID.
async function getSingleUser(id,token) {
    const url = `http://localhost:5001/api/v1/users/${id}`; // API endpoint to get a single user.

    // Send a GET request to the specific user endpoint with authorization token.
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include the JWT token in the request header.
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('User found:', data);
        } else {
            console.log("User not found");
            return null;
        }
    } catch (error) {
        // Log any errors that occur during the fetch call.
        console.error('Error fetching user:', error);
        return null; 
    }
};

// function to delete a user by ID.
async function deleteUser(id, email, token) {
    const url = `http://localhost:5001/api/v1/users/${id}`; // API endpoint to delete a user.

    // Send a DELETE request to the specific user endpoint with authorization token.
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include the JWT token in the request header
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(`User with ID ${id} and email ${email} has been deleted successfully.`, data);
        } else {
            console.log(`Failed to delete user with ID ${id}. Response status: ${response.status}`);
        }
    } catch (error) {
        // Log any errors that occur during the fetch call.
        console.error(`Error deleting user with ID ${id}:`, error);
    }
}

// function to call the above functions in order
async function main() {
    
    const newPatient = await RegisterNewPatient();
    console.log('Registered Patient:', newPatient);
    
    const patientToken = newPatient ? await login(newPatient.email, 'password123') : null;
    
    const singleUser = await getSingleUser(newPatient.id, patientToken);

    await deleteUser(newPatient.id,newPatient.email, patientToken);
    
};

main();

