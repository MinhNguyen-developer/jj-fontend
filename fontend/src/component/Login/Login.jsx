/** @format */

import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/logo.svg";
const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toastOption = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("Password is required", toastOption);
      return false;
    } else if (username === "") {
      toast.error("Username is required", toastOption);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      values,
    };
    loginUser(newUser, dispatch, navigate);
  };

  handleValidation();

  return (
    <div className="h-[100vh] width-[100vw] flex flex-col justify-center gap-4 items-center">
      <form
        className="flex flex-col gap-8 bg-[#c9d1d2] rounded-[2rem] py-[3rem] px-[5rem]"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="brand flex items-center gap-4 justify-center">
          <h1 className="text-[#fff] text-[1.5rem] uppercase">Login</h1>
        </div>
        <input
          className="bg-transparent placeholder:text-[#fff] p-[1rem] border-[0.1rem]  rounded-[0.4rem] text-[#fff] text-[1rem] focus:rounded-[0.1rem] focus:border-[#fff] focus:outline-none"
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
          min="3"
        />

        <input
          className="bg-transparent placeholder:text-[#fff] p-[1rem] border-[0.1rem]  rounded-[0.4rem] text-[#fff] text-[1rem] focus:rounded-[0.1rem] focus:border-[#fff] focus:outline-none"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />

        <button
          className="bg-[#949aa1] text-[#fff] py-[1rem] px-[2rem] border-none font-bold text-[1rem] uppercase transition duration-500 ease-in-out hover:bg-[#4e0eff]"
          type="submit"
        >
          Login
        </button>
        <span className="text-[#fff] uppercase">
          Don't have an account ?{" "}
          <Link
            className="text-[#949aa1] hover:text-orange-500 transition duration-500 ease-out font-bold no-underline"
            to="/register"
          >
            Register
          </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Login;
