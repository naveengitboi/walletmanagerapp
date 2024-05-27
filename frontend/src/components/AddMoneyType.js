import React, { useState } from 'react'
import '../componentStyles/AddMoneyType.css'
import { useLocation } from 'react-router-dom'
import api from '../api/axios'


function AddMoneyType(props) {

    const location = useLocation()
    let path = location.pathname.slice(1);
    if (path == '') {
        path = 'received'
    }
    const [transDetails, setTransDetails] = useState({
        transType: path,
        through: 'paytm',
    })

    const inputHandler = (e) => {

        setTransDetails({ ...transDetails, [e.target.name]: e.target.value, tramsType: path })
    }

    const addTransButton = async () => {
        await api.post('/transaction/addmoney', { 
            ...transDetails, amount: parseInt(transDetails.amount) }, {
            withCredentials: true
        })
    }

    return (
        <div className='addMoneyTypeContainer glassBg'>
            <div className="amtInputContainer glassBg">
                <input type="text" placeholder='$500' className='pLarge' value={transDetails.amount} name="amount" onChange={inputHandler} />
            </div>
            <div className="amtInputContainer glassBg pMedium">
                <select name="through" id="fromType" onChange={inputHandler} >
                    <option value="paytm">PAYTM</option>
                    <option value="gpay">GPAY</option>
                    <option value="phonepay">PHONEPAY</option>
                    <option value="paypal">PAYPAL</option>
                    <option value="other">OTHERS</option>
                </select>
            </div>
            <div className="amtInputContainer glassBg">
                <input type="text" placeholder={`${props.type.type} John`} className='pMedium' name="transFromTo" onChange={inputHandler} />
            </div>
            <div className="amtInputContainer glassBg">
                <input type="text" placeholder='Groceries, Saloon ....' className='pMedium' name="description" onChange={inputHandler} />
            </div>

            <button className={props.type.btnColorCode ? 'lightGreenBg defaultBtn' : 'lightGreenBg defaultBtn lightRedBg'} onClick={addTransButton} >{props.type.btn}</button>


            <button className='defaultBtn darkRed'>Reset</button>


        </div>
    )
}

export default AddMoneyType 