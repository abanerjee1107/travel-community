import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [socialLinks, setSocialLinks] = useState([]);

    const handleSocialLinksChange = (e) => {
        setSocialLinks(e.target.value.split(','));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.patch('/api/member/updateProfile', { socialLinks });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Social Links (comma-separated)" value={socialLinks.join(',')} onChange={handleSocialLinksChange} />
            <button onClick={handleSubmit}>Update Profile</button>
        </div>
    );
};

export default Profile;
