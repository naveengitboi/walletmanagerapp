import React, { useEffect, useState, useRef } from "react";
import "../componentStyles/Header.css";
import { MdCampaign } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MessageModel from "./MessageModel";


function Header() {
  const currentUser = useSelector((state) => state.isAnonymous.userExist)
  const [toggle, setToggle] = useState(false);
  // console.log(userData);
  const toggleRef = useRef()
  let location = useLocation();
  useEffect(() => {
    const closeMessagehandler = (e) => {
      if (!toggleRef.current.contains(e.target)) {
        setToggle(false)
      }
    }

    document.addEventListener('click', closeMessagehandler);

    return () => document.removeEventListener('click', closeMessagehandler);

  }, [toggleRef, toggle])



  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1 className="hMedium">WM</h1>
        </Link>
        {currentUser && <p className="pMedium">{location.pathname.slice(1)}</p>}
      </div>

      <div className="infoNavContainer">
        <div className="notifications addHoverEffect" ref={toggleRef} >
          <MdCampaign onClick={() => setToggle(!toggle)} />

          {toggle && <MessageModel />}

        </div>
        <div className="profileCircle">
          {!currentUser ? (
            <div className="actionsButtonsHeader">
              <Link to="/register" className="defaultBtn lightGraybg">
                Register
              </Link>
              <Link to="/login" className="defaultBtn lightGreenBg">
                Login
              </Link>
            </div>

          ) : (
              <Link to="/profile">
                <div className="gradientProfile"></div>
              </Link>
         
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
