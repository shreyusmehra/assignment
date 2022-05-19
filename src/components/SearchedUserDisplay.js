import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const SearchedUserDisplay = () => {
  const { searchedUser, setSearchedUser } = useGlobalContext();
  const removeUser = (id) => {
    let newUsers = searchedUser.filter((person) => person.id !== id);
    setSearchedUser(newUsers);
  };

  return (
    <div className="addList-container">
      {searchedUser.map((user) => {
        const { id, name } = user;
        return (
          <article key={id} className="addList-user">
            {name}
            <i className="remove-icon" onClick={() => removeUser(id)}>
              <FaTimes />
            </i>
          </article>
        );
      })}
    </div>
  );
};

export default SearchedUserDisplay;
