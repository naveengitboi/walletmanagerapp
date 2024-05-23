import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { MdEast } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import '../settingsCss/PasswordUpdate.css'
import '../../pagesCss/Register.css'
import api from "../../api/axios.js";
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
    const handlePwdChange = async (e) => {
        e.preventDefault();
        if(userDetails.newPwd != userDetails.confirmNewPwd){
            alert('Enter same in both the text areas');
        }
        else{
            const response = await api.put('/update/password',{password : userDetails.newPwd}, {
                withCredentials: true,
                credentials: 'include',
            }).catch((err) => console.log(err.response));

           console.log(response)
        }

        

    }

    console.log(userDetails)


    return (
        <div className='page registerPage'>
            <form action="">
                <input type="password" placeholder='Enter New Password' className='inputEle' name='newPwd' onChange={handleChage} />
                <input type="password" placeholder='Confirm New Password' className='inputEle' name='confirmNewPwd' onChange={handleChage} />

                <button type='submit' className='addGreenHoverEffect defaultBtn buttonWithIcon lightGreenBg svgWhite' onClick={handlePwdChange}>Update <MdEast /> </button>

            </form>
            <div className="otherOptions">
                <Link to='/profile'><button className='addRedHoverEffect defaultBtn buttonWithIcon svgWhite lightRedBg' onClick={() => navigate(-1)}>
                    Cancel <MdOutlineCancelScheduleSend />
                </button></Link>

            </div>


        </div>
    )
}

export default PasswordUpdate