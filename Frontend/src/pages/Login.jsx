import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styling/Login.css";

const Login = () => {

    // State hook for managing form data with initial state for email and password
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // State hook for storing error messages
    // this state will be used to display error messages in the future
    const [error, setError] = useState("");

    // Handler for input changes, updates formData state when the user types in an input
    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset error state each time the form is submitted
        setError("");

        // There's no backend yet, so i'll log the credentials
        console.log("Login Attempt with: ", formData);

        // In the future, if the API call fails, ill catch the error and set the state
        try {
            
            if (!formData.email || !formData.password) {
                throw new Error("Please fill in all fields");
            }

            // If successful, redirect the user or perform some other action
        } catch (error) {
            // If an error occurs, set the error message in our state
            setError(error.message);
        }
    };

    return(
        <section className="loginSection">
            <div className="loginContainer">
                <h3 className="loginHeader">
                    Hello! <span className="loginWelcome"> Welcome</span> Back 👋🏾
                </h3>
                <form className="formContainer">
                    <div>
                    {/* Input for email */}
                        <input type="email" 
                        placeholder="Enter Your Email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange}
                        className="loginInput"
                        required
                        />
                    </div>
                    <div>
                    {/* Input for password */}
                        <input type="password" 
                        placeholder="Enter Your Password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleInputChange}
                        className="loginInput"
                        required
                        />
                    </div>
                    <div>
                        <button type="submit" className="loginButton">Login</button>
                    </div> 
                    {/* Link to register page if user doesnt have an account */}
                    <p className="register">
                        Don't Have An Account? <Link to="/Register" className="loginLinkWrapper">Register</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Login
