import React, { useState } from 'react'
import '../pagesCss/Profile.css'
import { MdEdit } from "react-icons/md";
import Settings from './Settings';

function Profile() {
    const [username, setUsername] = useState({
        fname: 'Jangiti',
        lname: 'Naveen',
        email: 'naveen@gmail.com',
        phnum: 9110346500,
        accNum: '*******'
    })
    return (
        <div className='page profilePage'>
            <div className="profileSection">
                <div className="profileImgContainer">
                    <img src="/profile.png" alt="" />
                </div>
                <div className="profileEdits">
                    <div className="editSection">
                        <p className='pMedium'>Edit Details</p>
                        <div className="editIcon">
                            <MdEdit />
                        </div>
                    </div>

                    <div className="userInfo">
                        <div className="userValues">
                            <p className='tinyText'>First Name</p>
                            <input type="text" className='inputEle userValueInput' value={username.fname}
                                onChange={(e) => setUsername(e.target.value)} disabled />
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Last Name</p>
                            <input type="text" className='inputEle userValueInput' value={username.lname}
                                onChange={(e) => setUsername(e.target.value)} disabled />
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Email</p>
                            <input type="text" className='inputEle userValueInput' value={username.email}
                                onChange={(e) => setUsername(e.target.value)} disabled />
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Phone Number</p>
                            <input type="text" className='inputEle userValueInput' value={username.phnum}
                                onChange={(e) => setUsername(e.target.value)} disabled />
                        </div>
                        <div className="userValues">
                            <p className='tinyText'>Account Number</p>
                            <input type="text" className='inputEle userValueInput' value={username.accNum}
                                onChange={(e) => setUsername(e.target.value)} disabled />
                        </div>
                    </div>
                </div>

                <button className='defaultBtn '>Update Details</button>


            </div>

            <div className="settingsSection">
                <Settings />
            </div>

        </div>
    )
}

export default Profile