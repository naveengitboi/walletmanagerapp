import React from 'react'
import '../componentStyles/AddMoneyType.css'

function AddMoneyType(props) {
    return (
        <div className='addMoneyTypeContainer glassBg'>
            <div className="amtInputContainer glassBg">
                <input type="text" placeholder='$500' className='pLarge' />
            </div>
            <div className="amtInputContainer glassBg pMedium">
                <select name="type" id="fromType">
                    <option value="paytm">PAYTM</option>
                    <option value="gpay">GPAY</option>
                    <option value="phonepay">PHONEPAY</option>
                    <option value="paypal">PAYPAL</option>
                    <option value="other">OTHERS</option>
                </select>
            </div>
            <div className="amtInputContainer glassBg">
                <input type="text" placeholder={`${props.type.type} John`}  className='pMedium' />
            </div>
            <div className="amtInputContainer glassBg">
                <input type="text" placeholder='Groceries, Saloon ....' className='pMedium' />
            </div>

            <button className={props.type.btnColorCode ? 'lightGreenBg defaultBtn' : 'lightGreenBg defaultBtn lightRedBg'}>{props.type.btn}</button>
            <button className='defaultBtn darkRed'>Reset</button>


        </div>
    )
}

export default AddMoneyType 