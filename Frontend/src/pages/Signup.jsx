import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styling/Signup.css"
import Signupimg from "../assets/images/signup.png"
import avatarIcon3 from "../assets/images/avatarIcon3.png"
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config.js";
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Signup = () => {

    // State for the selected file, image preview, loading state, and form data
    const [selectedFile, setSelectedFile] = useState(null);
    const [PreviewURL, setPreviewURl] = useState ("");
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState(
        {
            firstname:"",
            surname:"",
            email: "",
            password: "",
            photo: selectedFile,
            role: "patient",
            gender:"",
            dob:""
        }
    )

    const navigate = useNavigate()

    const handleInputChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    // Handler for file input changes (image upload)
    const handleFileInputChange = async (event) =>{
        const file = event.target.files[0]
        const data = await uploadImageToCloudinary(file)
        
        setPreviewURl(data.url)
        setSelectedFile(data.url)
        setFormData({...formData, photo:data.url})
    }

    // Handler for form submission
    const submitHandler = async (event) =>{
        event.preventDefault();
        setLoading(true)

        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formData)
            })

            const {message} = await res.json()
            if(!res.ok){
                throw new Error(message)
            }

            setLoading(false)
            toast.success(message)
            navigate('/login')

        } catch (error) {
            toast.error(error.message)
            setLoading(false)
        }
    }

    /*
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    const maxDate = eighteenYearsAgo.toISOString().split('T')[0];
    */

    // Render the signup form
    return (
        <section className="signupSection">
            <div className="signupContainer">
                <div className="signupInnerContainer">   
                    {/* ============ img ============ */}        
                    <div className="signupImgContainer">
                        <figure className>
                            <img src={Signupimg} alt="" className="singupImg"/>  {/*© [Vectors Point] / Adobe Stock*/}
                        </figure>
                    </div>
                    {/* ============ registration form ============ */} 
                    <div className="signupFormContainer">
                        <h3>
                            Create An <span className="signupHeader">Account</ span>
                        </h3>
                        <form onSubmit={submitHandler}>
                            <div>
                                <input type="text" 
                                placeholder="Enter Your First name" 
                                name="firstname" 
                                value={formData.firstname} onChange={handleInputChange}
                                className="loginInput"
                                required
                                />
                            </div>
                            <div>
                                <input type="text" 
                                placeholder="Enter Your Surname" 
                                name="surname" 
                                value={formData.surname} onChange={handleInputChange}
                                className="loginInput"
                                required
                                />
                            </div>
                            <div>
                                <input type="email" 
                                placeholder="Enter Your Email" 
                                name="email" 
                                value={formData.email} onChange={handleInputChange}
                                className="loginInput"
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor="dob" className="labelling">Select Date of Birth</label>
                                <input 
                                    type="date" 
                                    id="dob"
                                    name="dob" 
                                    value={formData.dob} onChange={handleInputChange}
                                    className="loginInput"
                                    //max={maxDate}
                                    required
                                />
                            </div>
                            <div>
                                <input type="password" 
                                placeholder="Enter A Password" 
                                name="password" 
                                value={formData.password} onChange={handleInputChange}
                                className="loginInput"
                                required
                                />
                            </div>
                            <div className="roleSelectorContainer">
                                <label htmlFor="role" className="roleSelectorText">
                                    Are you a:
                                    <select name="role" id="role" value={formData.role}
                                    onChange={handleInputChange} className="roleText">
                                        <option value="">Select</option>
                                        <option value="patient">Patient</option>
                                        <option value="doctor">Doctor</option>
                                    </select>
                                </label>
                            </div>
                            <div className="genderSelectorContainer">
                                <label htmlFor="gender" className="genderSelectorText">
                                    Gender:
                                    <select name="gender" value={formData.gender}
                                    onChange={handleInputChange} id="gender" className="genderText">
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                            </div>
                            <div className="pictureContainer">
                                {selectedFile && <figure className="accAvatarContainer">
                                    <img 
                                    src={PreviewURL} // fix this to show image when one has been uploaded - doesn't show fix later
                                    alt="" 
                                    className="avatarImage"/>
                                </figure>}
                                <div className="uploadPhotoContainer">
                                    <input type="file" 
                                    name="photo"
                                    id="customFile" 
                                    onChange={handleFileInputChange}
                                    accept=" -jpg,png"
                                    className="uploadPhotoContents"
                                    />
                                    <label htmlFor="customFile" className="uploadText">
                                        Upload Photo
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button 
                                disabled = {loading && true}
                                type="submit" 
                                className="loginButton">
                                    { loading ? <HashLoader color="#ffffff"/>:'Sign up'}
                                </button>
                            </div> 
                            <p className="signup">
                            {/* Link to login page for existing users */}
                                Already Have An Account? <Link to="/Login" className="loginLinkWrapper">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup

