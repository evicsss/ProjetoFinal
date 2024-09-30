import '../components/styles/UserCard.css'

const UserCard = ({ user, onDelete }) => (
    <div className="card">
      <p>Nome: <span>{user.name}</span></p>
      <p>Idade: <span>{user.age}</span></p>
      <p>Email: <span>{user.email}</span></p>
      <button onClick={() => onDelete(user.id)}>Deletar</button>
    </div>
  );
  
  export default UserCard;
  