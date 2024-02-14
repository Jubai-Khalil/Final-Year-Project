/*
// function to get all users.
async function getAllUsers() {
    const url = 'http://localhost:5001/api/v1/users/'; // API endpoint to get all users.

     // Send a GET request to the users endpoint.
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('All users:', data);

        } else {
            console.log("No users found");
            return null;
        }
    } catch (error) {
        // Log any errors that occur during the fetch call.
        console.error('Error fetching all users:', error);
        return null;
    }
};

// function to get all registered doctors.
async function getAllDoctors() {
    const url = 'http://localhost:5001/api/v1/doctors/'; // API endpoint to get all doctors.

    try {
        //  GET request to the server.
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        // Check if the response from the server is OK (successful).
        if (response.ok) {
            const data = await response.json();
            console.log('All Doctors:', data);

        } else {
            console.log("No doctors found");
            return null;
        }
    } catch (error) {
         // Log any errors that occur during the fetch request.
        console.error('Error fetching all doctors:', error);
        return null;
    }

    async function getAllReviews() {
    const url = 'http://localhost:5001/api/v1/reviews/';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        console.log('Reviews fetched:', data);
        return data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return null;
    }
}
};

const users = await getAllDoctors();
const users = await getAllUsers();
const users = await getAlReviews();
*/

