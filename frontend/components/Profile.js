import React, { useState } from 'react';
import axios from 'axios';

const Profile = ({ memberId }) => {
    const [socialLinks, setSocialLinks] = useState([]);
    const [photoUrl, setPhotoUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [badgeName, setBadgeName] = useState('');

    const handleSocialLinksChange = (e) => {
        setSocialLinks(e.target.value.split(','));
    };

    const handlePhotoUpload = async () => {
        try {
            await axios.post(`/api/member/${memberId}/uploadPhoto`, { photoUrl });
            console.log('Photo uploaded successfully');
            setPhotoUrl('');
        } catch (error) {
            console.error('Error uploading photo:', error);
        }
    };

    const handleVideoUpload = async () => {
        try {
            await axios.post(`/api/member/${memberId}/uploadVideo`, { videoUrl });
            console.log('Video uploaded successfully');
            setVideoUrl('');
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    const handleAwardBadge = async () => {
        try {
            await axios.post(`/api/member/${memberId}/awardBadge`, { badgeName });
            console.log('Badge awarded successfully');
            setBadgeName('');
        } catch (error) {
            console.error('Error awarding badge:', error);
        }
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

            <br />
            
            <input type="text" placeholder="Photo URL" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
            <button onClick={handlePhotoUpload}>Upload Photo</button>

            <br />
            
            <input type="text" placeholder="Video URL" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
            <button onClick={handleVideoUpload}>Upload Video</button>

            <br />

            <input type="text" placeholder="Badge Name" value={badgeName} onChange={(e) => setBadgeName(e.target.value)} />
            <button onClick={handleAwardBadge}>Award Badge</button>
        </div>
    );
};

export default Profile;
