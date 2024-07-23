import React, { useRef, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { MdEast } from "react-icons/md";
import '../pagesCss/Register.css'
import api from '../api/axios.js';
import { useDispatch } from 'react-redux'
import { addUserExist } from '../Redux/IsAnonymous'
import SignInWithGoogle from '../components/SignInWIthGoogle.js';

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleApi = async (data) => {
    try{
    const res = await axios.post('http://localhost:3001/api/users/register', data, {
      withCredentials: true,
      credentials: 'include',
    })
    if (res.statusText === "OK") {
      dispatch(addUserExist())
      navigate('/', { replace: true })
    }
    else {
      alert('Could not add user, try later')
    }
      
    console.log(res)
    }catch(error) {
      console.log(error.response.data)
    }

  }

  const disableRef = useRef()

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
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
    if (userDetails.confirmPwd !== userDetails.password) {
      alert('Enter Correct passwords')
    } else {

      handleApi(userDetails)
    }
  }

  return (
    <div className='page registerPage'>

      {/* <div className="bgSvg">
                <img src="/assets/bg/bgillu.svg" alt="" />
            </div> */}

      <form action="">
        <input type="text" placeholder='First Name' className='inputEle' name='firstName' onChange={handleChage} />
        <input type="text" placeholder='Last Name' className='inputEle' name='lastName' onChange={handleChage} />
        <input type="text" placeholder='Username' className='inputEle' name='userName' onChange={handleChage} />
        <input type="email" placeholder='Email' className='inputEle' name='email' onChange={handleChage} />
        <input type="password" placeholder='Create Password' className='inputEle' name='password' onChange={handleChage} />
        <input type="password" placeholder='Confirm Password' className='inputEle' name='confirmPwd' onChange={handleChage} />
        <div className="checkBoxContainer">
          <input type="checkbox" id='acceptT&C' onClick={(e) => {
            setUserDetails((prev) => ({ ...prev, tc: !prev.tc }))
            userDetails['tc'] ? disableRef.current.disabled = true : disableRef.current.disabled = false
          }} />
          <label htmlFor="acceptT&C" className='tinyText'>Accept <Link>T and C</Link></label>
        </div>
        <button type='submit' className={`defaultBtn buttonWithIcon lightGreenBg svgWhite ${userDetails.tc ? '' : 'inactiveBtn'}`} onClick={handleRegister} ref={disableRef} >Register <MdEast /> </button>

        <p className='tinyText centerTexts' >OR</p>

      </form>
      <div className="otherOptions">
        <Link to='/login'><button className='defaultBtn buttonWithIcon' >
          Login <MdEast />
        </button></Link>

        <SignInWithGoogle />
      </div>


    </div>
  )
}

export default Register
