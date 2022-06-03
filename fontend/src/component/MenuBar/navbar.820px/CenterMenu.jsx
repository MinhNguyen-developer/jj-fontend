/** @format */

import "./Navbar.820.css";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faGear,
  faCircleInfo,
  faHouseUser,
  faBuildingUser,
  faHandshakeSimple,
} from "@fortawesome/free-solid-svg-icons";
import { logOut } from "../../../redux/authSlice";

const CenterMenu = () => {
  const user = useSelector((state) => state.auth.user?.currentUser);
  const liStyle =
    "mr-[2rem] p-[1.2rem] hover:scale-125 hover:cursor-pointer transition duration-200 ease-in text-[#949aa1] text-[1.3rem]";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="menu flex">
      <ul className="flex w-[100%] justify-between">
        <Link to="/">
          <li className={liStyle}>Home</li>
        </Link>
        <Link to="/job">
          <li className={liStyle}>Job</li>
        </Link>
        <Link to="/about">
          <li className={liStyle}>About</li>
        </Link>
        <Link to="/company">
          <li className={liStyle}>Company</li>
        </Link>
        <Link to="/user">
          <li className={liStyle}>User</li>
        </Link>
      </ul>
    </div>
  );
};
export default CenterMenu;
