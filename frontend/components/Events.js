import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/event/events');
                setEvents(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Events</h2>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        <strong>{event.title}</strong><br />
                        {event.description}<br />
                        Location: {event.location}<br />
                        Start Date: {event.startDate}<br />
                        End Date: {event.endDate}<br />
                        Organizer: {event.organizer.username}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
