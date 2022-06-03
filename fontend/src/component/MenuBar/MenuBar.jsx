/** @format */

// import Navbar820 from "./navbar.820px/Navbar.820px";
// import Navbar819 from "./navbar.819px/Navbar.819px";
// import './MenuBar.css';
import CenterMenu from "./navbar.820px/CenterMenu";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const buttonStyle =
    "border-none bg-transparent text-[#949aa1] text-[1.2rem] px-5 py-2 rounded-[0.1rem] hover:bg-[#485461] hover:text-[#fff] transition duration-500 ease-in";
  return (
    <div className="header bg-[#fff] flex items-center justify-between px-[5rem] py-[1.5rem] text-[0.8rem]">
      {/* logo */}
      <img
        src={logo}
        alt="logo"
        className="logo w-[90px] h-[90px] bg-transparent"
      />
      {/* side menu */}
      <CenterMenu />
      <div className="buttons flex">
        <Link to="/login">
          <button className={buttonStyle}>Login</button>
        </Link>
        <Link to="/register">
          <button className={buttonStyle}>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
