import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdEast } from "react-icons/md";
import '../pagesCss/Register.css'
function Register() {

    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        createPwd: '',
        confirmPwd: '',
        tc: false
    })

    const handleChage = (e) => {
        const val = e.target.value
        const name = e.target.name
        setUserDetails({ ...userDetails, [name]: val })

    }
    const handleRegister = (e) => {
        e.preventDefault()
        console.log(userDetails)
    }



    return (
        <div className='page registerPage'>
            <div className="bgSvg">
                <img src="/assets/bg/bgillu.svg" alt="" />
                
            </div>
            <form action="">
                <input type="text" placeholder='Username' className='inputEle' name='username' onChange={handleChage} />
                <input type="email" placeholder='Email' className='inputEle' name='email' onChange={handleChage} />
                <input type="password" placeholder='Create Password' className='inputEle' name='createPwd' onChange={handleChage} />
                <input type="password" placeholder='Confirm Password' className='inputEle' name='confirmPwd' onChange={handleChage} />
                <div className="checkBoxContainer">
                    <input type="checkbox" id='acceptT&C' onClick={(e) => {
                        setUserDetails((prev) => ({ ...prev, tc: !prev.tc }))

                    }} />
                    <label htmlFor="acceptT&C" className='tinyText'>Accept <Link>T and C</Link></label>
                </div>
                <button type='submit' className='defaultBtn buttonWithIcon lightGreenBg svgWhite' onClick={handleRegister}>Register <MdEast /> </button>

                <p className='tinyText centerTexts' >OR</p>

            </form>
            <div className="otherOptions">
                <Link to='/login'><button className='defaultBtn buttonWithIcon'>
                    Login <MdEast />
                </button></Link>

                <button className='defaultBtn buttonWithIcon'>
                    Google Account <MdEast />
                </button>

            </div>


        </div>
    )
}

export default Register