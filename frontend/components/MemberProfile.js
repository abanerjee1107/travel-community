import React, { useState } from 'react';
import axios from 'axios';

const MemberProfile = () => {
    const [profilePicture, setProfilePicture] = useState(null);

    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.files[0]);
    };

    const handleProfilePictureUpload = async () => {
        const formData = new FormData();
        formData.append('profilePicture', profilePicture);

        try {
            const response = await axios.post('/api/member/uploadProfilePicture', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleProfilePictureChange} />
            <button onClick={handleProfilePictureUpload}>Upload Profile Picture</button>
        </div>
    );
};

export default MemberProfile;
