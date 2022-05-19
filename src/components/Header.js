import logo from "../assests/images/logo.PNG";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" />
      <div className="heading">
        <h2>YOUR SPOTTABL TEAM</h2>
        <h4>Spottabl supports you all throughout</h4>
      </div>
    </div>
  );
};

export default Header;
