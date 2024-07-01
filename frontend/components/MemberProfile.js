import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemberProfile = ({ memberId }) => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [reviews, setReviews] = useState([]);

    // Function to handle profile picture change
    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.files[0]);
    };

    // Function to upload profile picture
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

    // Fetch reviews when memberId changes
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`/api/member/${memberId}/reviews`);
                setReviews(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchReviews();
    }, [memberId]);

    return (
        <div>
            {/* Profile Picture Upload */}
            <div>
                <input type="file" onChange={handleProfilePictureChange} />
                <button onClick={handleProfilePictureUpload}>Upload Profile Picture</button>
            </div>

            {/* Member Reviews */}
            <div>
                <h2>Member Reviews</h2>
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.reviewer.username}</strong> - {review.rating} stars<br />
                            {review.comment}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MemberProfile;
