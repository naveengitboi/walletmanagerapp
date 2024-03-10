import React from 'react'
import '../componentStyles/Header.css'
import { MdCampaign } from "react-icons/md";
import { useLocation } from 'react-router-dom'
function Header() {
    let location = useLocation()
    return (
        <nav>
            <div className="logo">
                <h1 className='hMedium'>WM</h1>
                <p className='pMedium'>{location.pathname.slice(1)}</p>
            </div>

            <div className="infoNavContainer">

                <MdCampaign />
                <div className="profileCircle">
                    <img src="/profile.png" alt="profile image" />
                </div>
            </div>

        </nav>
    )
}

export default Header