import { useState } from 'react';

const MemberFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    destination: '',
    budget: '',
    currency: '',
    language: ''
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="destination" placeholder="Destination" value={filters.destination} onChange={handleChange} />
      <input name="budget" placeholder="Budget" value={filters.budget} onChange={handleChange} />
      <input name="currency" placeholder="Currency" value={filters.currency} onChange={handleChange} />
      <input name="language" placeholder="Language" value={filters.language} onChange={handleChange} />
      <button type="submit">Filter</button>
    </form>
  );
};

export default MemberFilter;
