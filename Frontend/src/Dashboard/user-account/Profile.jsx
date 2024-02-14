import React, { useContext, useState, useEffect } from "react";
import { authContext } from "../../context/AuthContext";
import "../../styling/Signup.css";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL } from "../../config.js";
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import bcrypt from 'bcryptjs';

const Profile = () => {
    const { user: contextUser, dispatch } = useContext(authContext);
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        firstname: contextUser?.firstname || "",
        surname: contextUser?.surname || "",
        email: contextUser?.email || "",
        password: "",
        photo: contextUser?.photo || null,
        bloodType: contextUser?.bloodType || "",
        gender: contextUser?.gender || "",
    });

    useEffect(() => {
        if (contextUser) {
            setFormData({ ...formData, ...contextUser });
        }
    }, [contextUser]);

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileInputChange = async (event) => {
        const file = event.target.files[0];
        const data = await uploadImageToCloudinary(file);
        setSelectedFile(data.url);
        setFormData({ ...formData, photo: data.url });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
    
        let { password, ...updatePayload } = formData; // Destructure password from formData
    
        if (password) {
            // Generate a salt and hash the password client-side
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);
    
            // Use the hashed password for the updatePayload
            password = hashedPassword;
        }
    
        // Include hashed password in payload if it was updated
        if (password) {
            updatePayload = { ...updatePayload, password };
        }
    
        // Exclude the role from the update payload and prepare to keep it in local storage
        const token = localStorage.getItem('token'); 
        try {
            const response = await fetch(`${BASE_URL}/users/${contextUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatePayload)
            });
    
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message);
            }
    
            // Ensure the role remains "patient" and exclude password when updating context and localStorage
            const updatedUserDetails = { ...contextUser, ...result.data, password: undefined, role: "patient" };
            dispatch({ type: 'LOGIN_SUCCESS', payload: { user: updatedUserDetails, token } });
            localStorage.setItem('user', JSON.stringify(updatedUserDetails));
    
            toast.success('Profile updated successfully.');
        } catch (error) {
            toast.error(`Profile update failed: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text"
                        placeholder="Firstname"
                        name="firstname"
                        value={formData.firstname} onChange={handleInputChange}
                        className="loginInput"
                        required
                    />
                </div>
                <div>
                    <input type="text"
                        placeholder="Surname"
                        name="surname"
                        value={formData.surname} onChange={handleInputChange}
                        className="loginInput"
                        required
                    />
                </div>
                <div>
                    <input type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email} onChange={handleInputChange}
                        className="loginInput"
                        required
                    />
                </div>
                <div>
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password} onChange={handleInputChange}
                        className="loginInput"
                    />
                </div>
                <div>
                    <input type="text"
                        placeholder="Blood Type"
                        name="bloodType"
                        value={formData.bloodType} onChange={handleInputChange}
                        className="loginInput"
                        required
                    />
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
                    {formData.photo && <figure className="accAvatarContainer">
                        <img
                            src={formData.photo} // fix this to show image when one has been uploaded - doesn't show fix later
                            alt=""
                            className="avatarImage" />
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
                        disabled={loading && true}
                        type="submit"
                        className="loginButton">
                        {loading ? <HashLoader color="#ffffff" /> : 'Update'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Profile;
