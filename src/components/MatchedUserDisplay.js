import { useGlobalContext } from "../context";
import { useEffect } from "react";
import { MdPerson, MdEmail } from "react-icons/md";

const MatchedUserDisplay = () => {
  const {
    users,
    userList,
    setUserList,
    searchedTerm,
    searchedUser,
    setSearchedUser,
    closeMatchedUserDisplay,
  } = useGlobalContext();

  const searchUser = () => {
    let newUserList = [...userList];
    newUserList = newUserList.filter((user) => {
      return user.email.startsWith(searchedTerm);
    });
    setUserList(newUserList);
  };

  const handleClick = (user) => {
    // function used to add users to list
    const { id, name, jobTitle, initials } = user;
    if ([...new Set(searchedUser?.map((user) => user.id))].includes(id)) {
      // to remove duplicate users
      closeMatchedUserDisplay();
    } else if ([...new Set(users?.map((user) => user.id))].includes(id)) {
      // to prevent duplicate users from being added to list
      closeMatchedUserDisplay();
    } else {
      setSearchedUser([
        ...searchedUser,
        { id: id, name: name, jobTitle: jobTitle, initials: initials },
      ]);
      closeMatchedUserDisplay();
    }
  };

  useEffect(() => {
    if (searchedTerm) {
      searchUser();
    }
    // eslint-disable-next-line
  }, [searchedTerm]);

  return (
    <div className="dropdown-user-list">
      {userList?.map((user) => {
        const { id, name, jobTitle, initials, email } = user;
        return (
          <article key={id} className="list" onClick={() => handleClick(user)}>
            <div className="initials-container-searchlist">
              <h3 id="initials-searchlist">{initials}</h3>
            </div>
            <div className="user-details-searchlist">
              <h3 id="name-searchlist">{name}</h3>
              <p id="job-title-searchlist">
                <MdPerson />
                {jobTitle}
              </p>
              <p id="email-searchlist">
                <MdEmail />
                {email}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MatchedUserDisplay;
