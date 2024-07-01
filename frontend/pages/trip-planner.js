import TripPlanner from '../components/TripPlanner';

const TripPlannerPage = () => (
  <div>
    <h1>Trip Planner</h1>
    <TripPlanner onCreateTrip={(trip) => console.log(trip)} />
  </div>
);

export default TripPlannerPage;
