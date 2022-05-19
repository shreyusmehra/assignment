import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../context";

const UserCard = ({ user }) => {
  const { users, setUsers } = useGlobalContext();
  const { id, name, jobTitle, initials } = user;

  const removeUser = (id) => {
    let newUsers = users.filter((person) => person.id !== id);
    setUsers(newUsers);
  };

  return (
    <div className="usercard" key={id}>
      <div className="initials-container">
        <h3 id="initials">{initials}</h3>
      </div>
      <div className="user-details">
        <h3 id="name">{name}</h3>
        <p id="job-title">{jobTitle}</p>
      </div>
      <div className="delete-btn-container">
        <button className="delete-btn" onClick={() => removeUser(id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
