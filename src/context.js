import { createContext, useContext, useState } from "react";
import { UserList } from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userList, setUserList] = useState(UserList);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [searchedUser, setSearchedUser] = useState([]);
  const [isClickedSearchbar, setIsClickedSearchbar] = useState(false);
  const [sendAlert, setSendAlert] = useState(null);

  const openMatchedUserDisplay = () => {
    setIsClickedSearchbar(true);
  };
  const closeMatchedUserDisplay = () => {
    setSearchedTerm("");
    setUserList(UserList);
    setIsClickedSearchbar(false);
  };

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        userList,
        setUserList,
        sendAlert,
        setSendAlert,
        searchedTerm,
        setSearchedTerm,
        searchedUser,
        setSearchedUser,
        isClickedSearchbar,
        openMatchedUserDisplay,
        closeMatchedUserDisplay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
