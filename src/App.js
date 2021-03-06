import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserListingPage from "./components/UserListingPage";
import { useGlobalContext } from "./context";
import MessageAlert from "./components/MessageAlert";

const App = () => {
  const { sendAlert, closeMatchedUserDisplay } = useGlobalContext();
  return (
    <div className="app" onClick={closeMatchedUserDisplay}>
      {sendAlert && <MessageAlert />}
      <Header />
      <div className="container">
        <SearchBar />
        <UserListingPage />
      </div>
    </div>
  );
};

export default App;
