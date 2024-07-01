import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A marker on the map.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
