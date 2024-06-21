import React from 'react'
import '../componentStyles/SideNav.css'
import { NavLink } from 'react-router-dom'
import { AiOutlineRadarChart, AiOutlineSliders, AiOutlineApi, AiOutlineDollarCircle, AiOutlineProfile } from "react-icons/ai";
import { VscGraphScatter } from "react-icons/vsc";
import { TbLogout2 } from "react-icons/tb";
function SideNav() {
  return (
    <div className='sideNavbar'>
      <ul className="dashboardLinks">
        <li><NavLink to='/'><AiOutlineRadarChart /></NavLink></li>
        {/* <li><NavLink to='/analytics'><VscGraphScatter /></NavLink></li> */}
        {/* <li><NavLink to='/beta'><AiOutlineApi /></NavLink></li> */}
        <li><NavLink to='/transactions'><AiOutlineDollarCircle /></NavLink></li>
        {/* <li><NavLink to='/guide'><AiOutlineProfile /></NavLink></li> */}
        
      </ul>
      <ul className="bottomLinks">
        <li><NavLink to='/profile'><AiOutlineSliders /></NavLink></li>
        <li><NavLink to='/logout'><TbLogout2 /></NavLink></li>
      </ul>
    </div>
  )
}

export default SideNav