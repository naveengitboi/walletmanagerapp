import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdEast } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import '../settingsCss/PasswordUpdate.css'

function TwoFa() {

    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        phNum: '',
        enterOtp: '',
        fourDigit: ''
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
                <p className='tinyText topInfoText'>
                    OTP will be sent to this mobile number you are submitting
                </p>
                <div className="mobNumber">
                    <input type="text" placeholder='Enter Mobile Number' className='inputEle' name='phNum' onChange={handleChage} />
                    <button className='defaultBtn addHoverEffect' onClick={(e) => e.preventDefault()}>SEND</button>
                </div>
                <input type="text" placeholder='Enter OTP' className='inputEle' name='enterOtp' onChange={handleChage} />
                <p className='tinyText'>Enter a 4digit security pin and please keep it safe and do not share with anyone else!</p>
                <input type="text" placeholder='Confirm 4Digit PIN' className='inputEle' name='fourDigit' onChange={handleChage} />

                <button type='submit' className='defaultBtn buttonWithIcon lightGreenBg svgWhite' onClick={handlePwdChange}>Update Changes<MdEast /> </button>

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

export default TwoFa