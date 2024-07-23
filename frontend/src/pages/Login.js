import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEast } from "react-icons/md";
import "../pagesCss/Register.css";
import api from "../api/axios.js";
import { useDispatch } from "react-redux";
import { addUserExist } from "../Redux/IsAnonymous.js";
import SignInWithGoogle from "../components/SignInWIthGoogle.js";
import Model from "../components/Model";
function Login() {
  const [viewModel, setViewModel] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const navigateRegister = () => {
    navigate('/register')
  }
  const [userDetails, setUserDetails] = useState({
    userName: "",
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
    if (userDetails.userName === "" || userDetails.password === "") {
      alert("Enter correct details or register as new");
    } else if (userDetails.tc === false) {
      alert("Please accept tand c");
    } else {
      try {
        const resp = await api.post("/users/login", userDetails, {
          withCredentials: true,
          credentials: 'include',
        })

        if (resp && resp.status === 200) {
          dispatch(addUserExist())
          navigate('/');
        }
      } catch (error) {
        setViewModel(true)
        console.log("error", error.response)
      }
    }
  };

  return (
    <div className="page registerPage">
      {/* <div className="bgSvg">
        <img src="/assets/bg/bgillu.svg" alt="" />
      </div> */}

      {viewModel && <Model setViewModel={setViewModel} header={"Unauthorised User"} description={"Please Valid details or register to the site"} type={"Register"} onCancel={() => console.log('Do nothing ')
      } onSubmit={() => navigateRegister()} />}
      <form action="">
        <input
          type="text"
          placeholder="Username"
          className="inputEle"
          name="userName"
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
            onClick={() => {
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

        <SignInWithGoogle />
      </div>
    </div>
  );
}

export default Login;
