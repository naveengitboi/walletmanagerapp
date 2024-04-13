import React, { useState } from 'react'
import '../pagesCss/Profile.css'
import { MdEdit } from "react-icons/md";
import Settings from './Settings';
import {useSelector} from 'react-redux'
function Profile() {
    const currentUser = useSelector((state) => state.user.currentUser)

    const [userDetails, setuserDetails] = useState(currentUser)
    const [giveEditAccess, setGiveEditAccess] = useState(false)

    const changeUserData = (e) => {
        const value = e.target.value;
        const key = e.target.name
        setuserDetails({...userDetails, [key]:value})
    }

    const updateUserDb = () => {
        setGiveEditAccess(false)
        //update user db 
    //    console.log(userDetails)
    }

    return (

        <div className='page profilePage'>
            <div className="profileSection">
                <div className="profileImgContainer">
                    {/* <img src="/profile.png" alt="" /> */}
                    <div className="gradientProfile"></div>
                </div>
                <div className="profileEdits">
                    <div className="editSection">
                        <p className='pMedium'>Edit Details</p>
                        <div className="editIcon" onClick={() => setGiveEditAccess(true)}>
                            <MdEdit />
                        </div>
                    </div>

                    <div className="userInfo">
                        <div className="userValues">
                            <p className='tinyText'>First Name</p>
                            <input type="text" className='inputEle userValueInput' value={userDetails.firstName}
                                onChange={changeUserData} disabled={giveEditAccess ? "" : "disabled"} name="firstName" />
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Last Name</p>
                            <input type="text" className='inputEle userValueInput' value={userDetails.lastName}
                                onChange={changeUserData} disabled={giveEditAccess ? "" : "disabled"} name="lastName"/>
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Email</p>
                            <input type="text" className='inputEle userValueInput' value={userDetails.email}
                                onChange={changeUserData} disabled={giveEditAccess ? "" : "disabled"} name="email"/>
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Phone Number</p>
                            <input type="text" className='inputEle userValueInput' value={userDetails.phnum}
                                onChange={changeUserData} disabled={giveEditAccess ? "" : "disabled"} name="phoneNumber"/>
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Account Number</p>
                            <input type="text" className='inputEle userValueInput' value={userDetails.accNum}
                                onChange={changeUserData} disabled={giveEditAccess ? "" : "disabled"} name="accountNumber" />
                        </div>
                    </div>
                </div>

                <button className='defaultBtn' onClick={updateUserDb}>Update Details</button>


            </div>

            <div className="settingsSection">
                <Settings />
            </div>

        </div>
    )
}

export default Profile