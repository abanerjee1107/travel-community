import React from 'react';
import { React360 } from 'react-360-web';

const VirtualTour = () => {
    return (
        <div>
            <h2>Virtual Tour</h2>
            <React360
                width="100%"
                height="500px"
                scenes={[
                    { type: 'image', source: '/path/to/360-image.jpg', id: 'scene1' },
                    // Add more scenes as needed
                ]}
            />
        </div>
    );
};

export default VirtualTour;
