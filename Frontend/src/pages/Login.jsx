import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styling/Login.css";

const Login = () => {

    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleInputChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <section className="loginSection">
            <div className="loginContainer">
                <h3 className="loginHeader">
                    Hello! <span className="loginWelcome"> Welcome</span> Back 👋🏾
                </h3>
                <form className="formContainer">
                    <div>
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
                        <input type="password" 
                        placeholder="Enter Your Password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleInputChange}
                        className="loginInput"
                        required
                        />
                    </div>
                    <div className="mt-7">
                        <button type="submit" className="loginButton">Login</button>
                    </div> 
                    <p className="register">
                        Don't Have An Account? <Link to="/Register" className="loginLinkWrapper">Register</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Login
