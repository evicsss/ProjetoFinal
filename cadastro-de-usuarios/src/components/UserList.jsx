import UserCard from './UserCard';
import '../components/styles/UserList.css'

const UserList = ({ users, onDelete }) => (
  <div>
    {users.map((user) => (
      <UserCard key={user.id} user={user} onDelete={onDelete} />
    ))}
  </div>
);

export default UserList;
