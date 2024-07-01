import React, { useState } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const TripPlanner = ({ onCreateTrip }) => {
    const [trip, setTrip] = useState({
        title: '',
        description: '',
        date: ''
    });

    const [destination, setDestination] = useState('');
    const [tripDetails, setTripDetails] = useState(null);

    const handleChange = (e) => {
        setTrip({
            ...trip,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateTrip(trip);
    };

    const handleGetTripDetails = async () => {
        try {
            const response = await axios.get(`/api/trip/details/${destination}`);
            setTripDetails(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Trip Title" value={trip.title} onChange={handleChange} />
                <textarea name="description" placeholder="Trip Description" value={trip.description} onChange={handleChange}></textarea>
                <input name="date" type="date" value={trip.date} onChange={handleChange} />
                <button type="submit">Create Trip</button>
            </form>

            <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
            <button onClick={handleGetTripDetails}>Get Trip Details</button>
            
            {tripDetails && (
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            )}
        </div>
    );
};

export default TripPlanner;
