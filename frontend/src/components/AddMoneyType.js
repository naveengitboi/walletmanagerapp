import React from 'react'
import '../componentStyles/AddMoneyType.css'

function AddMoneyType(props) {
    return (
        <div className='addMoneyTypeContainer glassBg'>
            <div className="amtInputContainer glassBg">
                <p className='pSmall'>
                    $
                </p>
                <input type="text" placeholder='Amount' className='pLarge' />
            </div>
            <div className="amtInputContainer glassBg">
                <p className='pSmall'>
                    Type
                </p>
                <input type="text" placeholder='Amount' className='pMedium' />
            </div>
            <div className="amtInputContainer glassBg">
                <input type="text" placeholder={props.type.type} className='pMedium' />
            </div>
            <div className="amtInputContainer glassBg">
                <input type="text" placeholder='Description' className='pMedium' />
            </div>

            <button className={props.type.btnColorCode ? 'lightGreenBg defaultBtn' : 'lightGreenBg defaultBtn lightRedBg'}>{props.type.btn}</button>
            <button className='defaultBtn darkRed'>Reset</button>


        </div>
    )
}

export default AddMoneyType