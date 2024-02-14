import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styling/Login.css";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import {authContext} from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {

    // State hook for managing form data with initial state for email and password
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // State hook for storing error messages
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {dispatch} = useContext(authContext)


    // Handler for input changes, updates formData state when the user types in an input
    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (event) =>{
        event.preventDefault();
        setLoading(true)

        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formData)
            })

            const result = await res.json()
            if(!res.ok){
                throw new Error(result.message)
            }

            dispatch({
                type:'LOGIN_SUCCESS',
                payload: {
                    user:result.data,
                    token:result.token,
                    role:result.role,
                },
            });

            console.log(result, 'login data');

            setLoading(false)
            toast.success(result.message)
            navigate('/home')

        } catch (error) {
            toast.error(error.message)
            setLoading(false)
        }
    }

    return(
        <section className="loginSection">
            <div className="loginContainer">
                <h3 className="loginHeader">
                    Hello! <span className="loginWelcome"> Welcome</span> Back 👋🏾
                </h3>
                <form className="formContainer" onSubmit={submitHandler}>
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
                        <button type="submit" className="loginButton">{loading ? <HashLoader color="#ffffff"/> :'Login'}</button>
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
