import { useState, useEffect } from 'react';
import MemberList from '../../components/MemberList';
import MemberFilter from '../../components/MemberFilter';

const MembersPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('/api/members')
      .then(res => res.json())
      .then(data => setMembers(data))
      .catch(err => console.error(err));
  }, []);

  const handleFilter = (filters) => {
    fetch('/api/members/filter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filters)
    })
      .then(res => res.json())
      .then(data => setMembers(data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Find Members</h1>
      <MemberFilter onFilter={handleFilter} />
      <MemberList members={members} />
    </div>
  );
};

export default MembersPage;
