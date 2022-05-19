import { useGlobalContext } from "../context";
import MatchedUserDisplay from "./MatchedUserDisplay";
import SearchedUserDisplay from "./SearchedUserDisplay";

const SearchBar = () => {
  const {
    users,
    setUsers,
    searchedTerm,
    setSearchedTerm,
    searchedUser,
    setSearchedUser,
    openMatchedUserDisplay,
    closeMatchedUserDisplay,
    isClickedSearchbar,
  } = useGlobalContext();

  const inputSearchHandler = (e) => {
    setSearchedTerm(e.target.value);
    openMatchedUserDisplay();
  };
  const AddCSMHandler = (e) => {
    e.preventDefault();
    closeMatchedUserDisplay();
    setSearchedTerm("");
    setUsers([...users, ...searchedUser]);
    setSearchedUser([]);
  };

  return (
    <form>
      <div className="search-bar-container">
        <h2 id="csm-heading">Customer Success Managers</h2>
        <div className="input-fields-container">
          {searchedUser && <SearchedUserDisplay />}
          <input
            type={"text"}
            className="searched-user-input"
            value={searchedTerm}
            onChange={(e) => inputSearchHandler(e)}
            placeholder={
              searchedUser.length !== 0 ? "" : "Add by Name or email"
            }
          />
          <button
            className="add-csm-btn"
            type="submit"
            onClick={(e) => AddCSMHandler(e)}
          >
            Add CSM
          </button>
        </div>

        {isClickedSearchbar && <MatchedUserDisplay />}
      </div>
    </form>
  );
};

export default SearchBar;
