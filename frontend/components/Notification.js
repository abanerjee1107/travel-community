import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server URL

const Notification = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        socket.on('receiveNotification', (notification) => {
            setNotifications([...notifications, notification]);
        });

        return () => {
            socket.off('receiveNotification');
        };
    }, [notifications]);

    const sendNotification = () => {
        const newNotification = {
            message: 'New notification!',
            timestamp: new Date().toLocaleTimeString()
        };
        socket.emit('sendNotification', newNotification);
    };

    return (
        <div>
            <button onClick={sendNotification}>Send Notification</button>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>
                        <strong>{notification.message}</strong> - {notification.timestamp}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notification;
