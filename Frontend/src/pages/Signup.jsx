import React from "react";
import { Link } from "react-router-dom";
import "../styling/Signup.css"
import Signupimg from "../assets/images/signup.png"
import avatarIcon3 from "../assets/images/avatarIcon3.png"

const Signup = () => {


    {/*
    const [selectedFile, setSelectedFile] = useState(null);
    const [PreviewURL, setPreviewURl] = usestate ("");

    const [formData, setFormData] = useState(
        {
            name:"",
            surname:"",
            email: "",
            password: "",
            photo: "selectedFile",
            role: "patient",
            gender:"",
            dob:""
        }
    )

    const handleInputChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleFileInputChange = async (event) =>{
        const file = event.target.files[0]
        // later i will use a package to accept the upload of images
    }

    const submitHandler = async (event) =>{
        event.preventDefault();
    }

    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    const maxDate = eighteenYearsAgo.toISOString().split('T')[0];
    */}

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
                        <h3 className="signupHeader">
                            Create An <span className="signupText">Account</ span>
                        </h3>
                        <form /*onSubmit={submitHandler}*/>
                            <div>
                                <input type="text" 
                                placeholder="Enter Your First name" 
                                name="name" 
                                //value={formData.name} onChange={handleInputChange}
                                className="loginInput"
                                required
                                />
                            </div>
                            <div>
                                <input type="text" 
                                placeholder="Enter Your Surname" 
                                name="surname" 
                                //value={formData.surname} onChange={handleInputChange}
                                className="loginInput"
                                required
                                />
                            </div>
                            <div>
                                <input type="email" 
                                placeholder="Enter Your Email" 
                                name="email" 
                                //value={formData.email} onChange={handleInputChange}
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
                                    //value={formData.dob} onChange={handleInputChange}
                                    className="loginInput"
                                    //max={maxDate}
                                    required
                                />
                            </div>
                            <div>
                                <input type="password" 
                                placeholder="Enter A Password" 
                                name="password" 
                                //value={formData.password} onChange={handleInputChange}
                                className="loginInput"
                                required
                                />
                            </div>
                            <div className="roleSelectorContainer">
                                <label htmlFor="role" className="roleSelectorText">
                                    Are you a:
                                    <select name="role" id="role" /*value={formData.role}
                                    onChange={handleInputChange}*/className="roleText">
                                        <option value="">Select</option>
                                        <option value="patient">Patient</option>
                                        <option value="doctor">Doctor</option>
                                    </select>
                                </label>
                            </div>
                            <div className="genderSelectorContainer">
                                <label htmlFor="gender" className="genderSelectorText">
                                    Gender:
                                    <select name="gender" /*value={formData.gender}
                                    onChange={handleInputChange}*/ id="gender" className="genderText">
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                            </div>
                            <div className="pictureContainer">
                                <figure className="accAvatarContainer">
                                    <img src={avatarIcon3} alt="" className="avatarImage"/>
                                </figure>
                                <div className="uploadPhotoContainer">
                                    <input type="file" 
                                    name="photo"
                                    id="customFile" 
                                    // onChange={handleFileInputChange}
                                    accept=" -jpg,png"
                                    className="uploadPhotoContents"
                                    />
                                    <label htmlFor="customFile" className="uploadText">
                                        Upload Photo
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="loginButton">Sign up</button>
                            </div> 
                            <p className="signup">
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