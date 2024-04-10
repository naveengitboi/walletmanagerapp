import React from "react";
import "../componentStyles/Header.css";
import { MdCampaign } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const userData = useSelector((state) => state.user.currentUser);
  console.log(userData);

  let location = useLocation();
  return (
    <nav>
      <div className="logo">
              <Link to='/'><h1 className="hMedium">WM</h1></Link>
        <p className="pMedium">{location.pathname.slice(1)}</p>
      </div>

      <div className="infoNavContainer">
        <MdCampaign />
        <div className="profileCircle">
          {!Boolean(userData.username) ? (
                      <Link to='/register' className="profileRegister lightGreenBg">Register</Link>
          ) : (
            <Link to='/profile'>
                <div className="gradientProfile"></div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
