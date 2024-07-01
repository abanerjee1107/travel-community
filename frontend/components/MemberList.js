import Member from './Member';

const MemberList = ({ members }) => (
  <div>
    {members.map(member => (
      <Member key={member.id} member={member} />
    ))}
  </div>
);

export default MemberList;
