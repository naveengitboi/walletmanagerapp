import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { MdEast } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import '../settingsCss/PasswordUpdate.css'

function PasswordUpdate() {

    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        newPwd: '',
        confirmNewPwd: ''
    })

    const handleChage = (e) => {
        const val = e.target.value
        const name = e.target.name
        setUserDetails({ ...userDetails, [name]: val })

    }
    const handlePwdChange = (e) => {
        e.preventDefault()
    }



    return (
        <div className='page registerPage'>
            <form action="">
                <input type="password" placeholder='Enter New Password' className='inputEle' name='newPwd' onChange={handleChage} />
                <input type="password" placeholder='Confirm New Password' className='inputEle' name='confirmNewPwd' onChange={handleChage} />

                <button type='submit' className='defaultBtn buttonWithIcon lightGreenBg svgWhite' onClick={handlePwdChange}>Update <MdEast /> </button>

            </form>
            <div className="otherOptions">
                <Link><button className='defaultBtn buttonWithIcon darkGrayBg svgWhite' onClick={() => navigate(-1)}>
                    Go Back <RiArrowGoBackFill />
                </button></Link>

                <Link to='/profile'><button className='defaultBtn buttonWithIcon svgWhite lightRedBg'>
                    Cancel <MdOutlineCancelScheduleSend />
                </button></Link>

            </div>


        </div>
    )
}

export default PasswordUpdate