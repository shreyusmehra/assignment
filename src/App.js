import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserListingPage from "./components/UserListingPage";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <SearchBar />
        <UserListingPage />
      </div>
    </div>
  );
};

export default App;
