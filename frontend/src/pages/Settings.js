import React from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint, MdPassword, MdAccountTree, MdBugReport, MdDelete } from "react-icons/md";
import { SiCodeigniter } from "react-icons/si";
import '../pagesCss/Settings.css'
function Settings() {
  return (
    <div className='page settingsContainer'>
      <div className="updateBtnsContainer settingsOptionsTop">
        <div className="updateBtn">
          <Link to='/profile/passwords'><button className='defaultBtn buttonWithIcon'>Passwords <MdPassword /> </button></Link>
        </div>
        <div className="updateBtn">
          <Link to='/profile/2fa'><button className='defaultBtn buttonWithIcon'>2-Fa Authentication <MdFingerprint /> </button></Link>
        </div>
        <div className="updateBtn">
          <Link><button className='defaultBtn buttonWithIcon'>Accounts <MdAccountTree /> </button></Link>
        </div>
      </div>

      <div className="updateBtnsContainer settingsOptionsTop">
        <div className="updateBtn">
          <Link><button className='defaultBtn buttonWithIcon'>Report Bug <MdBugReport /> </button></Link>
        </div>
        <div className="updateBtn">
          <a href='https://github.com/naveengitboi/walletmanagerapp' target='_blank' rel="noreferrer"><button className='defaultBtn buttonWithIcon'>Contribute Code <SiCodeigniter /> </button></a>
        </div>
        <div className="updateBtn">
          <Link><button className='defaultBtn buttonWithIcon lightRedBg svgWhite'>Delete Account <MdDelete /> </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Settings