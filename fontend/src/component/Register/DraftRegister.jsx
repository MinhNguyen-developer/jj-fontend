/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const DraftRegister = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOption = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const inputStyle =
    "bg-transparent placeholder:text-[#fff] p-[1rem] border-[0.1rem] rounded-[0.4rem] text-[#fff] w-[100%] text-[1rem] focus:border-[0.1rem] focus:border-[#fff] focus:outline-none";

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same !",
        toastOption
      );
      return false;
    } else if (username.length < 3 || username === "") {
      toast.error("Username should be greater than 3 characters", toastOption);
      return false;
    } else if (password.length < 8 || username === "") {
      toast.error(
        "Password should be greater or equal 8 characters",
        toastOption
      );
      return false;
    } else if (!email.match(pattern) || email === "") {
      toast.error("Email is not valid", toastOption);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <div className="h-[100vh] width=[100vw] flex flex-col justify-center gap-4 items-center ">
      <form
        className="flex bg-[#c9d1d2] flex-col gap-8  rounded-[2rem] py-[3rem] px-[5rem]"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="brand flex items-center gap-4 justify-center">
          <h1 className="text-[#fff] text-[1.5rem] uppercase">Register</h1>
        </div>
        <input
          className={inputStyle}
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          className={inputStyle}
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          className={inputStyle}
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <input
          className={inputStyle}
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        />
        <button
          className="bg-[#949aa1] text-[#fff] py-[1rem] px-[2rem] border-none font-bold cursor-pointer rounded-[0.4rem] text-[1rem] uppercase transition duration-400 ease-in-out hover:bg-[#4e0eff]"
          type="submit"
        >
          Create Account
        </button>
        <span className="text-[#fff] uppercase">
          Already have an account ?{" "}
          <Link
            className="text-[#997af0] hover:text-orange-500 transition duration-500 ease-out no-underline font-bold"
            to="/login"
          >
            Login
          </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default DraftRegister;
