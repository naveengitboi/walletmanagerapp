import React from 'react'
import '../componentStyles/Header.css'
import { MdCampaign } from "react-icons/md";
import { useLocation, Link } from 'react-router-dom'
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
                    <Link to='/register'><img src="/profile.png" alt="profile image" /></Link>
                </div>
            </div>

        </nav>
    )
}

export default Header