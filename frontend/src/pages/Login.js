import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEast } from "react-icons/md";
import "../pagesCss/Register.css";
import api from "../api/axios.js";
import { useDispatch } from "react-redux";
import { addUserExist } from "../Redux/IsAnonymous.js";
function Login() {

  const dispatch = useDispatch();

    const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    tc: false,
  });

  const handleChage = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setUserDetails({ ...userDetails, [name]: val });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (userDetails.username === "" || userDetails.password === "") {
      alert("Enter correct details or register as new");
    } else if (userDetails.tc === false) {
      alert("Please accept tand c");
    } else {
      const resp = await api.post("/login", userDetails, {
        withCredentials:true,
        credentials: 'include',
  
      })
      .catch((err) => console.log(err.response));
      if(resp.status === 200){
        dispatch(addUserExist())
        navigate('/');
      }
    }
  };

  return (
    <div className="page registerPage">
     {/* <div className="bgSvg">
        <img src="/assets/bg/bgillu.svg" alt="" />
      </div> */}
      <form action="">
        <input
          type="text"
          placeholder="Username"
          className="inputEle"
          name="username"
          onChange={handleChage}
        />
        <input
          type="password"
          placeholder="Password"
          className="inputEle"
          name="password"
          onChange={handleChage}
        />
        <div className="checkBoxContainer">
          <input
            type="checkbox"
            id="acceptT&C"
            onClick={(e) => {
              setUserDetails((prev) => ({ ...prev, tc: !prev.tc }));
            }}
          />
          <label htmlFor="acceptT&C" className="tinyText">
            Accept <Link>T and C</Link>
          </label>
        </div>
        <button
          type="submit"
          className="defaultBtn buttonWithIcon lightGreenBg svgWhite"
          onClick={handleLogin}
        >
          Login <MdEast />{" "}
        </button>

        <p className="tinyText centerTexts">OR</p>
      </form>
      <div className="otherOptions">
        <Link to="/register">
          <button className="defaultBtn buttonWithIcon">
            Register <MdEast />
          </button>
        </Link>

        <button className="defaultBtn buttonWithIcon">
          Google
          <MdEast />
        </button>
      </div>
    </div>
  );
}

export default Login;
