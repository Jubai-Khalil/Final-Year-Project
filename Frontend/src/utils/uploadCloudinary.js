// Constants for Cloudinary API
const UPLOAD_PRESET = 'upload'; 
const CLOUD_NAME = 'dcbbqb2ef'; 

// uploads an image to Cloudinary.
const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            // Convert non-200 responses into errors
            const errorData = await response.json();
            throw new Error(`Failed to upload image: ${errorData.error?.message || response.statusText}`);
        }

        // Only parse JSON and return the URL if the response was successful
        const data = await response.json();
        return data.secure_url; 
    } catch (error) {
        // Rethrow or handle the error as needed
        throw error;
    }
};

export default uploadImageToCloudinary;
