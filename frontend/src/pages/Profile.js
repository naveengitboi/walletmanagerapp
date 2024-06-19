import React, { useEffect, useState } from 'react'
import '../pagesCss/Profile.css'
import { MdEdit } from "react-icons/md";
import Settings from './Settings'
import api from '../api/axios';


function Profile() {
    const currentUser = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        accountNumbers: ['']
    }
    const [userDetails, setuserDetails] = useState(currentUser)
    const [giveEditAccess, setGiveEditAccess] = useState(false)

    useEffect(() => {
        const getOwnerDetails = async () => {
            const userData = await api.get('/users/user', {
                withCredentials: true,
                credentials: 'include',
            })
            // console.log(userData)
            const output = userData.data.output
            setuserDetails(output);

        }
        getOwnerDetails()

    }, [])

    const changeUserData = (e) => {
        const value = e.target.value;
        const key = e.target.name
        setuserDetails({ ...userDetails, [key]: value })
    }

    const updateUserDb = async () => {
        console.log(userDetails)
        const updateUser = await api.put('/update', userDetails, {
            withCredentials: true,
            credentials: 'include'
        })
        setGiveEditAccess(false)
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
                        <div className="editIcon addHoverEffect" onClick={() => setGiveEditAccess(!giveEditAccess)}>
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
                                onChange={changeUserData} disabled={giveEditAccess ? "" : "disabled"} name="lastName" />
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Email</p>
                            <input type="text" className='inputEle userValueInput' value={userDetails.email}
                                onChange={changeUserData} disabled={giveEditAccess ? "" : "disabled"} name="email" />
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Phone Number</p>
                            <input type="text" className='inputEle userValueInput' value={userDetails.phone}
                                onChange={changeUserData} disabled={giveEditAccess ? "" : "disabled"} name="phone" />
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Account Number</p>
                            <input type="text" className='inputEle userValueInput' value={''}
                                onChange={changeUserData} disabled={giveEditAccess ? "" : "disabled"} name="accountNumbers" />
                            {/* {
                                userDetails.account_numbers?.map((num, idx) => {
                                    return (<p className='tinyText' key={idx}>{num}</p>)
                                })
                            } */}

                        </div>
                    </div>
                </div>

                <button className='defaultBtn' onClick={updateUserDb}>Update Details</button>


            </div>

            <div className="settingsSection">
                <p className='pSmall settingsHeader'>Settings</p>
                <Settings />
            </div>

        </div>
    )
}

export default Profile