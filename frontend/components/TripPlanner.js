import { useState } from 'react';

const TripPlanner = ({ onCreateTrip }) => {
  const [trip, setTrip] = useState({
    title: '',
    description: '',
    date: ''
  });

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

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Trip Title" value={trip.title} onChange={handleChange} />
      <textarea name="description" placeholder="Trip Description" value={trip.description} onChange={handleChange}></textarea>
      <input name="date" type="date" value={trip.date} onChange={handleChange} />
      <button type="submit">Create Trip</button>
    </form>
  );
};

export default TripPlanner;
