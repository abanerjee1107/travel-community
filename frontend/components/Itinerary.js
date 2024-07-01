import React from 'react';

const Itinerary = ({ itinerary }) => {
    const handleShare = () => {
        // Implement sharing logic
        console.log('Share itinerary:', itinerary.title);
    };

    return (
        <div>
            <h2>{itinerary.title}</h2>
            <ul>
                {itinerary.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={handleShare}>Share</button>
        </div>
    );
};

export default Itinerary;
